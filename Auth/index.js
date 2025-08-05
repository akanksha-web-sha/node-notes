const express = require("express");
const fs = require("fs/promises");
const nodemailer = require("nodemailer");
const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sanjanadagar301@gmail.com",
    pass: "s",
  },
});

app.post("/signup", express.json(), async (req, res) => {
  try {
    const cred = req.body;
    // read users data from file (string)
    const data = await fs.readFile("users.json", "utf-8");
    // convert the data to javascript array
    const users = JSON.parse(data);
    // push the new user to the javascript array
    users.push(cred);
    // convert the array back to string
    const usersString = JSON.stringify(users);
    // rewrite the file with this new data

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
                  <p>Hi ${cred.name},</p>
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
    await fs.writeFile("users.json", usersString);
    transporter.sendMail(
      { from: "NodeClass", to: cred.email, subject: "Welcome", html },
      (err) => {
        if (err) console.log("Email not sent!");
        else console.log("OK");
      }
    );
    res.json({ message: "Signed up!" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/forgotpass", express.json(), async (req, res) => {
  try {
    const cred = req.body;
    const data = await fs.readFile("./users.json", "utf-8");
    const users = JSON.parse(data);

    const userFound = users.findIndex((el) => el.email == cred.email);

    if (userFound == -1) throw new Error("Invalid credentials!");

    const otp = Math.floor(Math.random() * 900000) + 100000;

    transporter.sendMail({ to: cred.email, text: String(otp) }, async (err) => {
      if (err)
        throw new Error("Could not process your request  at this moment!");

      users[userFound].otp = otp;
      let userString = JSON.stringify(users);
      await fs.writeFile("./users.json", userString);
      res.json({ message: "An otp has been sent to your email address!" });
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/updatepass", express.json(), async (req, res) => {
  try {
    const cred = req.body;
    //Read users.json
    const data = await fs.readFile("./users.json", "utf-8");

    //json parse users data to users array
    const users = JSON.parse(data);
    //Find the index of the element with the given email address
    const foundIndex = users.findIndex((el) => el.email == cred.email);
    if (foundIndex == -1) throw new Error("User not found!");
    users[foundIndex].password = cred.newPassword;
    users[foundIndex].email = cred.newEmail;
    // convert the users array back to json string

    const userString = JSON.stringify(users);

    // overwrite the users.json file

    await fs.writeFile("./users.json", userString);

    res.json({ message: "Password updated!" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/login", express.json(), (req, res) => {
  const data = req.body; // {email:"abcd@gmail.com", password: "123"}

  // if(!data.email || !data.password) return res.json({message: "Invalid Credentials!"})

  // if(data.email==undefined || data.password == undefined)
  //     return res.json({message: "Invalid Credentials!"});

  const userFound = users.find(
    (user) => user.email == data.email && user.password == data.password
  );

  if (userFound == undefined)
    return res.json({ message: "Invalid Credentials!" });
  res.json({ message: "Logged in successfully!" });
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
