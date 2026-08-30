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

    const credentials = JSON.parse(
      process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
    );

    /*
     * Create a Google OAuth access token
     * using the service account.
     */

    const tokenResponse = await fetch(
      `https://oauth2.googleapis.com/token`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },

        body: new URLSearchParams({
          grant_type:
            "urn:ietf:params:oauth:grant-type:jwt-bearer",

          assertion: createJWT(credentials)
        })
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      console.error(tokenData);

      return res.status(500).json({
        error: "Unable to authenticate with Google"
      });
    }

    /*
     * Request Korean speech.
     */

    const speechResponse = await fetch(
      "https://texttospeech.googleapis.com/v1/text:synthesize",
      {
        method: "POST",

        headers: {
          "Authorization":
            `Bearer ${tokenData.access_token}`,

          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          input: {
            text
          },

          voice: {
            languageCode: "ko-KR",
            name: "ko-KR-Chirp3-HD-Aoede"
          },

          audioConfig: {
            audioEncoding: "MP3",
            speakingRate: 0.85,
            pitch: 0
          }
        })
      }
    );

    const speechData = await speechResponse.json();

    if (!speechResponse.ok) {
      console.error(speechData);

      return res.status(500).json({
        error: "Google TTS request failed"
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

    console.error(error);

    return res.status(500).json({
      error: "Korean TTS failed"
    });
  }
}
