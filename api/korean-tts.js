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

    const credentialsJSON =
      process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;

    if (!credentialsJSON) {
      console.error(
        "GOOGLE_APPLICATION_CREDENTIALS_JSON is missing"
      );

      return res.status(500).json({
        error: "Google credentials are not configured"
      });
    }

    const credentials = JSON.parse(credentialsJSON);

    /*
     * Create Google access token.
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
        "Google authentication error:",
        tokenData
      );

      return res.status(500).json({
        error: "Unable to authenticate with Google"
      });
    }

    /*
     * Ask Google Cloud Text-to-Speech
     * to generate Korean audio.
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
            name: "ko-KR-Chirp3-HD-Aoede"
          },

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

    if (!speechResponse.ok) {
      console.error(
        "Google TTS error:",
        speechData
      );

      return res.status(500).json({
        error: "Google TTS request failed"
      });
    }

    if (!speechData.audioContent) {
      return res.status(500).json({
        error: "Google returned no audio"
      });
    }

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
      "Korean TTS error:",
      error
    );

    return res.status(500).json({
      error: "Korean TTS failed"
    });
  }
}
