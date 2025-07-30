const fs = require("fs/promises");


// async function login(){
//     try {
//         const data = await fs.readFile("./users.json", "utf-8")
//         const users = JSON.parse(data);
       
//         const cred = {email:"sanu@gmail.com", password: "123"};

//         // users.find(function(user){
//         //     if(user.email==cred.email && user.passwor==cred.password) return true;
//         //     else return false;
//         // })

//         const userFound = users.find(el=>el.email==cred.email&& el.password==cred.password);

//         if(userFound==undefined) console.log("User not found!")
//         else console.log("Logged in!")
//     } catch (error) {
//        console.log(error.message) 
//     }
// }
// login();



async function signup(){
    try {
        const cred = {
            name: "Tashif",
            email: "tashif@gmail.com",
            password: "123"
        };

        // read users data from file (string)
        const data = await fs.readFile("users.json", "utf-8");

        // convert the data to javascript array
        const users = JSON.parse(data);
        // push the new user to the javascript array
        users.push(cred)
        // convert the array back to string
        const usersString = JSON.stringify(users);
        // rewrite the file with this new data
        await fs.writeFile("users.json", usersString);
        console.log("signed up!")

    } catch (error) {
            console.log(error)
    }
}

signup();