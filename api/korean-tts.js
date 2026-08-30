import crypto from "crypto";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function createJWT(clientEmail, privateKey) {
  const header = {
    alg: "RS256",
    typ: "JWT"
  };

  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  };

  const unsignedToken =
    base64url(JSON.stringify(header)) +
    "." +
    base64url(JSON.stringify(payload));

  const signer = crypto.createSign("RSA-SHA256");

  signer.update(unsignedToken);

  const signature = signer.sign(
    privateKey,
    "base64"
  );

  return (
    unsignedToken +
    "." +
    signature
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")
  );
}

export default async function handler(req, res) {

  /*
   * Only allow POST requests.
   */

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    /*
     * Get Korean text from lesson.js.
     */

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
     * Get Google credentials from Vercel.
     */

    const clientEmail =
      process.env.GOOGLE_CLIENT_EMAIL;

    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY;


    /*
     * Make sure the credentials exist.
     */

    if (!clientEmail || !privateKey) {

      console.error(
        "Missing Google environment variables",
        {
          clientEmailExists: !!clientEmail,
          privateKeyExists: !!privateKey
        }
      );

      return res.status(500).json({
        error:
          "Google credentials are not configured"
      });
    }


    /*
     * Vercel may store \n as literal characters.
     *
     * Convert them into real line breaks.
     */

    const formattedPrivateKey =
      privateKey.replace(/\\n/g, "\n");


    /*
     * Create Google OAuth JWT.
     */

    const jwt = createJWT(
      clientEmail,
      formattedPrivateKey
    );


    /*
     * Exchange JWT for an access token.
     */

    const tokenResponse = await fetch(
      "https://oauth2.googleapis.com/token",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded"
        },

        body: new URLSearchParams({
          grant_type:
            "urn:ietf:params:oauth:grant-type:jwt-bearer",

          assertion: jwt
        })
      }
    );


    const tokenData =
      await tokenResponse.json();


    /*
     * Check authentication.
     */

    if (
      !tokenResponse.ok ||
      !tokenData.access_token
    ) {

      console.error(
        "GOOGLE AUTH ERROR:",
        tokenData
      );

      return res.status(500).json({
        error:
          "Google authentication failed",

        details:
          tokenData.error_description ||
          tokenData.error ||
          "Unknown authentication error"
      });
    }


    /*
     * Ask Google Cloud Text-to-Speech
     * to generate Korean speech.
     */

    const speechResponse = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize",
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${tokenData.access_token}`,

          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          input: {
            text: text
          },

          voice: {
            languageCode: "ko-KR",

            name:
              "ko-KR-Chirp3-HD-Aoede"
          },

          audioConfig: {
            audioEncoding: "MP3",

            speakingRate: 0.82,

            pitch: 0
          }
        })
      }
    );


    /*
     * Read Google's response.
     */

    const speechData =
      await speechResponse.json();


    /*
     * IMPORTANT:
     *
     * Instead of simply saying
     * "Korean TTS failed",
     * show us Google's actual error.
     */

    if (!speechResponse.ok) {

      console.error(
        "GOOGLE TTS ERROR:",
        speechData
      );

      return res.status(
        speechResponse.status
      ).json({

        error:
          "Google TTS request failed",

        details:
          speechData.error?.message ||
          "Unknown Google TTS error",

        code:
          speechData.error?.code ||
          null

      });
    }


    /*
     * Make sure Google actually
     * returned audio.
     */

    if (!speechData.audioContent) {

      return res.status(500).json({
        error:
          "Google returned no audio"
      });
    }


    /*
     * Convert Google's base64 audio
     * into an MP3 buffer.
     */

    const audioBuffer =
      Buffer.from(
        speechData.audioContent,
        "base64"
      );


    /*
     * Return MP3 to the browser.
     */

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
    "KOREAN TTS SERVER ERROR:",
    error
  );

  return res.status(500).json({

    error: "Korean TTS failed",

    details: error.message || "Unknown server error",

    stack: error.stack || null

  });
}
}
