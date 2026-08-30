import crypto from "crypto";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function createJWT(credentials) {
  const header = {
    alg: "RS256",
    typ: "JWT"
  };

  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iss: credentials.client_email,
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
    credentials.private_key,
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

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

if (!clientEmail || !privateKey) {
  console.error("Google credentials are missing.");

  return res.status(500).json({
    error: "Google credentials are not configured"
  });
}

const credentials = {
  client_email: clientEmail,
  private_key: privateKey.replace(/\\n/g, "\n")
};

    let credentials;

    try {
      credentials = JSON.parse(credentialsJSON);
    } catch (error) {
      console.error("Invalid Google credentials JSON:", error);

      return res.status(500).json({
        error: "Google credentials JSON is invalid"
      });
    }

    /*
     * ==============================
     * STEP 1 — Get Google access token
     * ==============================
     */

    const jwt = createJWT(credentials);

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

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      console.error(
        "GOOGLE AUTHENTICATION ERROR:",
        tokenData
      );

      return res.status(500).json({
        error: "Google authentication failed",
        details: tokenData
      });
    }

    /*
     * ==============================
     * STEP 2 — Generate Korean speech
     * ==============================
     */

    const speechResponse = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize",
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${tokenData.access_token}`,

          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          input: {
            text: text
          },

          voice: {
            languageCode: "ko-KR",

            /*
             * High-quality Korean female voice.
             */
            name: "ko-KR-Chirp3-HD-Aoede"
          },

          /*
           * THIS IS THE AUDIO CONFIG.
           */
          audioConfig: {
            audioEncoding: "MP3",
            speakingRate: 0.82,
            pitch: 0
          }
        })
      }
    );

    const speechData =
      await speechResponse.json();

    /*
     * IMPORTANT:
     * Return Google's actual error so we can
     * see what is wrong instead of simply saying
     * "Korean TTS failed".
     */
    if (!speechResponse.ok) {
      console.error(
        "GOOGLE TTS ERROR:",
        JSON.stringify(speechData, null, 2)
      );

      return res.status(speechResponse.status).json({
        error: "Google TTS request failed",
        googleError: speechData
      });
    }

    if (!speechData.audioContent) {
      console.error(
        "Google returned no audio:",
        speechData
      );

      return res.status(500).json({
        error: "Google returned no audio"
      });
    }

    /*
     * ==============================
     * STEP 3 — Send MP3 to browser
     * ==============================
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

    return res.status(200).send(audioBuffer);

  } catch (error) {

    console.error(
      "KOREAN TTS SERVER ERROR:",
      error
    );

    return res.status(500).json({
      error: "Korean TTS failed",
      details: error.message
    });
  }
}
