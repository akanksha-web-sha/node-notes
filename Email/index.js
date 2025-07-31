const nodemailer = require("nodemailer");
let name = "Sanjana Dagar";

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Subscription Confirmation</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 20px 0;">

        <!-- Email container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 30px; background-color:#007BFF; color:#ffffff; font-family:Arial, sans-serif; font-size:24px;">
              Thank You for Subscribing!
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px; font-family:Arial, sans-serif; color:#333333; font-size:16px;">
              <p>Hi ${name},</p>
              <p>Thank you for subscribing to our newsletter. We're excited to have you on board!</p>
              <p>You’ll be the first to know about updates, new content, and exclusive offers.</p>
              <p>If you didn’t subscribe or received this email by mistake, please ignore it.</p>

              <!-- Call-to-action button -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px;">
                <tr>
                  <td align="center">
                    <a href="https://example.com" style="background-color:#007BFF; color:#ffffff; padding:12px 24px; text-decoration:none; font-size:16px; border-radius:4px; display:inline-block;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px; font-family:Arial, sans-serif; font-size:12px; color:#777777;">
              © 2025 Your Company Name · <a href="#" style="color:#777777; text-decoration:underline;">Unsubscribe</a>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

transporter.sendMail(
  {
    from: "imamansari9711@gmail.com",
    to: "sanjanadagar301@gmail.com",
    subject: "Test mail",
    html, 
    attachments: [{filename: "cat.webp", path: "./cat.webp"}, {filename: "package.json", path:"./package.json"}],
    text: "Thank you for subscribing!",
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Email sent!");
  }
);



/*
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "imamansari9711@gmail.com",
    pass: "",
  },
});

const users = [
  { name: "Harsh", email: "kharsh48412@gmail.com" },
  { name: "Sanjana Dagar", email: "sanjanadagar301@gmail.com" },
];

users.forEach((user) => {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Subscription Confirmation</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 20px 0;">

        <!-- Email container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 30px; background-color:#007BFF; color:#ffffff; font-family:Arial, sans-serif; font-size:24px;">
              Thank You for Subscribing!
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px; font-family:Arial, sans-serif; color:#333333; font-size:16px;">
              <p>Hi ${user.name},</p>
              <p>Thank you for subscribing to our newsletter. We're excited to have you on board!</p>
              <p>You’ll be the first to know about updates, new content, and exclusive offers.</p>
              <p>If you didn’t subscribe or received this email by mistake, please ignore it.</p>

              <!-- Call-to-action button -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:20px;">
                <tr>
                  <td align="center">
                    <a href="https://example.com" style="background-color:#007BFF; color:#ffffff; padding:12px 24px; text-decoration:none; font-size:16px; border-radius:4px; display:inline-block;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px; font-family:Arial, sans-serif; font-size:12px; color:#777777;">
              © 2025 Your Company Name · <a href="#" style="color:#777777; text-decoration:underline;">Unsubscribe</a>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;

  transporter.sendMail(
    {
      from: "imamansari9711@gmail.com",
      to: user.email,
      subject: "Test mail",
      html,
      text: "Thank you for subscribing!",
    },
    (err) => {
      if (err) console.log(err);
      else console.log("Email sent!");
    }
  );
});




*/