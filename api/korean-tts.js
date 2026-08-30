import { GoogleAuth } from "google-auth-library";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { text } = req.body || {};

    if (!text || typeof text !== "string") {
      return res.status(400).json({
        error: "Missing Korean text"
      });
    }

    if (text.length > 500) {
      return res.status(400).json({
        error: "Text is too long"
      });
    }

    /*
     * ==========================================
     * GET GOOGLE CREDENTIALS
     * ==========================================
     */

    const clientEmail =
      process.env.GOOGLE_CLIENT_EMAIL;

    let privateKey =
      process.env.GOOGLE_PRIVATE_KEY;

    if (!clientEmail || !privateKey) {
      console.error(
        "Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY"
      );

      return res.status(500).json({
        error: "Google credentials are not configured"
      });
    }

    /*
     * ==========================================
     * FIX PRIVATE KEY FORMATTING
     * ==========================================
     *
     * Vercel may contain:
     *
     * -----BEGIN PRIVATE KEY-----\nABC...\n-----END PRIVATE KEY-----
     *
     * We need to turn the literal \n into
     * real line breaks.
     */

    privateKey = privateKey.trim();

    /*
     * If the entire value was pasted with
     * quotation marks, remove them.
     */
    if (
      privateKey.startsWith('"') &&
      privateKey.endsWith('"')
    ) {
      privateKey = privateKey.slice(1, -1);
    }

    /*
     * Convert escaped newlines into real newlines.
     */
    privateKey = privateKey.replace(/\\n/g, "\n");

    /*
     * Remove Windows carriage returns.
     */
    privateKey = privateKey.replace(/\r/g, "");

    /*
     * Make sure the key has the correct PEM structure.
     */
    if (
      !privateKey.includes("-----BEGIN PRIVATE KEY-----") &&
      !privateKey.includes("-----BEGIN RSA PRIVATE KEY-----")
    ) {
      console.error(
        "GOOGLE_PRIVATE_KEY does not appear to be a valid PEM private key."
      );

      return res.status(500).json({
        error: "Google private key format is invalid"
      });
    }

    console.log(
      "Google credentials found. Private key format appears valid."
    );

    /*
     * ==========================================
     * GOOGLE AUTHENTICATION
     * ==========================================
     */

    const auth = new GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey
      },

      scopes: [
        "https://www.googleapis.com/auth/cloud-platform"
      ]
    });

    const client = await auth.getClient();

    const tokenResponse =
      await client.getAccessToken();

    const accessToken =
      typeof tokenResponse === "string"
        ? tokenResponse
        : tokenResponse?.token;

    if (!accessToken) {
      console.error(
        "Google authentication returned no access token."
      );

      return res.status(500).json({
        error: "Google authentication failed"
      });
    }

    console.log(
      "Google authentication successful."
    );

    /*
     * ==========================================
     * GOOGLE TEXT-TO-SPEECH
     * ==========================================
     */

    const speechResponse = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          input: {
            text: text
          },

          voice: {
            languageCode: "ko-KR",
            name: "ko-KR-Chirp3-HD-Aoede"
          },

          audioConfig: {
            audioEncoding: "MP3"
          }
        })
      }
    );

    const speechData =
      await speechResponse.json();

    /*
     * ==========================================
     * GOOGLE TTS ERROR
     * ==========================================
     */

    if (!speechResponse.ok) {
      console.error(
        "Google TTS API error:",
        JSON.stringify(
          speechData,
          null,
          2
        )
      );

      return res.status(500).json({
        error:
          speechData?.error?.message ||
          "Google TTS request failed"
      });
    }

    if (!speechData.audioContent) {
      console.error(
        "Google returned no audio."
      );

      return res.status(500).json({
        error: "Google returned no audio"
      });
    }

    /*
     * ==========================================
     * SEND MP3 TO BROWSER
     * ==========================================
     */

    const audioBuffer = Buffer.from(
      speechData.audioContent,
      "base64"
    );

    res.setHeader(
      "Content-Type",
      "audio/mpeg"
    );

    res.setHeader(
      "Cache-Control",
      "public, max-age=86400"
    );

    return res
      .status(200)
      .send(audioBuffer);

  } catch (error) {

    console.error(
      "Korean TTS error:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Korean TTS failed"
    });
  }
}
