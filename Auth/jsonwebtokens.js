const jwt = require("jsonwebtoken");

// async function signToken(){
//     try {
//         let payload = {
//             samose: "4",
//             gulabjamun: "8"
//         }

//        const token =  await jwt.sign(payload, "ramojisweets123", {expiresIn: "1s"});

//        console.log(token);
//     } catch (error) {
//         console.log(error)
//     }
// }

// signToken();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYW1vc2UiOiI0IiwiZ3VsYWJqYW11biI6IjgiLCJpYXQiOjE3NTY3MDcwMTQsImV4cCI6MTc1NjcwNzAxNX0.OYG0yalhPSU8kT-mySXYwTIWO625-LoGJwHbgOfY0A";

async function verifyToken() {
  try {
    let payload = await jwt.verify(token, "ramojisweets123");
    console.log(payload);
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      return console.log("Token has expired!");
    } else if (error.name == "JsonWebTokenError") {
      return console.log("Invalid token!");
    }

    console.log(error.name);
  }
}

verifyToken();



// npm install jsonwebtoken