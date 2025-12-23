const RECAPTCHA_SECRET_KEY = "6Le-0RosAAAAAClInCxxQrpd5ZrWwnlQ06QgYzfz"
const ZOHO_API_KEY = "1003.578c95da7fc447a87b7b3bfcc672d98d.54efb85fcfaafc399e6356502991521d"

// app/api/zoho/lead/route.js
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      mobile,
      city,
      recaptchaToken,
      leadSource,
      landingPage,
    } = body;
    console.log(body, "bodybodybody");
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA token missing" }),
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const verifyData = await verifyRes.json();
    console.log(
      verifyData,
      "verifyDataverifyDataverifyDataverifyData",
      process.env.RECAPTCHA_SECRET_KEY
    );
    if (!verifyData.success || verifyData.score < 0.5) {
      return new Response(
        JSON.stringify({
          verifyData,
          error: "reCAPTCHA verification failed",
        }),
        { status: 400 }
      );
    }

    // Submit to Zoho
    const zohoRes = await fetch(
      `https://www.zohoapis.in/crm/v7/functions/leadcreationapi1/actions/execute?auth_type=apikey&zapikey=${ZOHO_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadSource,
          landingPage,
          fullName,
          mobile,
          email,
          city,
        }),
      }
    );

    const zohoData = await zohoRes.json();
    if (!zohoRes.ok) {
      return new Response(JSON.stringify({ error: zohoData }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Lead created", zohoData }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
