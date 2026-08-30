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
     * GOOGLE CREDENTIALS
     * ==========================================
     */

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!clientEmail || !privateKey) {
      console.error("Missing Google environment variables.");

      return res.status(500).json({
        error: "Google credentials are not configured"
      });
    }

    /*
     * Vercel may store the private key with
     * literal \n characters.
     *
     * Convert them into real line breaks.
     */
    const formattedPrivateKey =
      privateKey.replace(/\\n/g, "\n");

    /*
     * ==========================================
     * GOOGLE AUTHENTICATION
     * ==========================================
     */

    const auth = new GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: formattedPrivateKey
      },

      scopes: [
        "https://www.googleapis.com/auth/cloud-platform"
      ]
    });

    const client = await auth.getClient();

    const accessTokenResponse =
      await client.getAccessToken();

    const accessToken =
      typeof accessTokenResponse === "string"
        ? accessTokenResponse
        : accessTokenResponse?.token;

    if (!accessToken) {
      console.error(
        "Google authentication returned no access token."
      );

      return res.status(500).json({
        error: "Google authentication failed"
      });
    }

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
     * HANDLE GOOGLE ERRORS
     * ==========================================
     */

    if (!speechResponse.ok) {
      console.error(
        "Google TTS API error:",
        JSON.stringify(speechData, null, 2)
      );

      return res.status(500).json({
        error:
          speechData?.error?.message ||
          "Google TTS request failed"
      });
    }

    if (!speechData.audioContent) {
      console.error(
        "Google returned no audio content."
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
