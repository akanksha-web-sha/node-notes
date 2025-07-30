const express = require("express");
const fs = require("fs/promises");
const app = express();

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
    await fs.writeFile("users.json", usersString);

    res.json({ message: "Signed up!" });
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
