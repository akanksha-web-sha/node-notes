const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs/promises");
const app = express();

app.post("/signup", express.json(), async (req, res) => {
  try {
    let { name, email, phone, password } = req.body;
    password = await bcrypt.hash(password, 12);

    const userString = await fs.readFile("./users.json", "utf-8");
    const users = JSON.parse(userString);

    users.push({ name, email, phone, password });

    await fs.writeFile("./users.json", JSON.stringify(users));
    res.status(201).json({ message: "Done!" });
  } catch (error) {
    res.json({ error: "something went wrong!" });
  }
});

app.post("/login", express.json(), async (req, res)=>{
    try {
        let {email, password}= req.body;
        const userString = await fs.readFile("./users.json", "utf-8");
        const users = JSON.parse(userString);

        const foundUser = users.find(el=>el.email==email);
        if(!foundUser) throw new Error("invalid credentials!");

        const correctPass = await bcrypt.compare(password, foundUser.password)

        if(!correctPass) throw new Error("invalid credentials!")

        res.status(200).json({message: "Logged in!"})

    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

app.listen(8080, () => console.log("Listening on port 8080"));

/*
            const userData = req.body; 

            console.log(userData);
            userData.password = await bcrypt.hash(userData.password, 12);


*/
