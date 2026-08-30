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

  const signer =
    crypto.createSign("RSA-SHA256");

  signer.update(unsignedToken);

  const signature =
    signer.sign(
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

  console.log("========== KOREAN TTS START ==========");

  try {

    /*
     * STEP 1
     * Check request.
     */

    console.log("STEP 1: Request received");

    if (req.method !== "POST") {

      return res.status(405).json({
        error: "Method not allowed"
      });

    }


    const { text } =
      req.body || {};

    console.log(
      "STEP 1: Text:",
      text
    );


    if (
      !text ||
      typeof text !== "string"
    ) {

      return res.status(400).json({
        error:
          "Missing Korean text"
      });

    }


    /*
     * STEP 2
     * Read environment variables.
     */

    console.log(
      "STEP 2: Checking Google credentials"
    );

    const clientEmail =
      process.env.GOOGLE_CLIENT_EMAIL;

    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY;


    console.log(
      "Client email exists:",
      !!clientEmail
    );

    console.log(
      "Private key exists:",
      !!privateKey
    );


    if (!clientEmail) {

      return res.status(500).json({
        error:
          "GOOGLE_CLIENT_EMAIL is missing"
      });

    }


    if (!privateKey) {

      return res.status(500).json({
        error:
          "GOOGLE_PRIVATE_KEY is missing"
      });

    }


    /*
     * STEP 3
     * Format private key.
     */

    console.log(
      "STEP 3: Formatting private key"
    );

    const formattedPrivateKey =
      privateKey.replace(
        /\\n/g,
        "\n"
      );


    /*
     * STEP 4
     * Create JWT.
     */

    console.log(
      "STEP 4: Creating Google JWT"
    );

    let jwt;

    try {

      jwt = createJWT(
        clientEmail,
        formattedPrivateKey
      );

    } catch (error) {

      console.error(
        "JWT CREATION ERROR:",
        error
      );

      return res.status(500).json({

        error:
          "Google JWT creation failed",

        details:
          error.message

      });

    }


    console.log(
      "STEP 4: JWT created successfully"
    );


    /*
     * STEP 5
     * Get Google access token.
     */

    console.log(
      "STEP 5: Requesting Google access token"
    );

    const tokenResponse =
      await fetch(
        "https://oauth2.googleapis.com/token",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded"
          },

          body:
            new URLSearchParams({

              grant_type:
                "urn:ietf:params:oauth:grant-type:jwt-bearer",

              assertion:
                jwt

            })

        }
      );


    const tokenData =
      await tokenResponse.json();


    console.log(
      "STEP 5: Google token status:",
      tokenResponse.status
    );


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


    console.log(
      "STEP 5: Google authentication successful"
    );


    /*
     * STEP 6
     * Request Korean speech.
     */

    console.log(
      "STEP 6: Sending text to Google TTS"
    );


    const speechResponse =
      await fetch(

        "https://texttospeech.googleapis.com/v1/text:synthesize",

        {

          method: "POST",

          headers: {

            Authorization:
              `Bearer ${tokenData.access_token}`,

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify({

              input: {
                text: text
              },

              voice: {

                languageCode:
                  "ko-KR",

                name:
                  "ko-KR-Chirp3-HD-Aoede"

              },

              audioConfig: {

                audioEncoding:
                  "MP3",

                speakingRate:
                  0.82,

                pitch:
                  0

              }

            })

        }

      );


    const speechData =
      await speechResponse.json();


    console.log(
      "STEP 6: Google TTS status:",
      speechResponse.status
    );


    /*
     * THIS IS THE MOST IMPORTANT PART.
     */

    if (!speechResponse.ok) {

      console.error(
        "GOOGLE TTS ERROR:",
        speechData
      );

      return res.status(500).json({

        error:
          "Google TTS request failed",

        googleStatus:
          speechResponse.status,

        details:
          speechData.error?.message ||
          "Unknown Google TTS error",

        googleCode:
          speechData.error?.code ||
          null

      });

    }


    /*
     * STEP 7
     * Check audio.
     */

    console.log(
      "STEP 7: Checking audio"
    );


    if (
      !speechData.audioContent
    ) {

      return res.status(500).json({

        error:
          "Google returned no audio"

      });

    }


    /*
     * STEP 8
     * Convert audio.
     */

    console.log(
      "STEP 8: Converting audio"
    );


    const audioBuffer =
      Buffer.from(
        speechData.audioContent,
        "base64"
      );


    /*
     * STEP 9
     * Send MP3 to browser.
     */

    console.log(
      "STEP 9: Sending MP3"
    );


    res.setHeader(
      "Content-Type",
      "audio/mpeg"
    );

    res.setHeader(
      "Cache-Control",
      "public, max-age=86400"
    );


    console.log(
      "========== KOREAN TTS SUCCESS =========="
    );


    return res
      .status(200)
      .send(audioBuffer);


  } catch (error) {

    console.error(
      "========== KOREAN TTS CRASH =========="
    );

    console.error(error);


    return res.status(500).json({

      error:
        "Korean TTS failed",

      details:
        error.message ||
        "Unknown server error",

      stack:
        error.stack ||
        null

    });

  }

}
