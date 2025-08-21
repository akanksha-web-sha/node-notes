// const crypto = require("crypto");
// const fs = require("fs");
// const hashed = crypto.createHash("sha256").update("apple").digest("hex");
// console.log(hashed);


// //3a7bd3e2360a3d29eea436fcfb7e44c735d117c42d1c1835420b6b9942dd4f1b



// const data = fs.readFileSync("./cat.webp");
// const hash = crypto.createHash("sha256").update(data).digest("hex");
// console.log("file hash: ", hash);

//44da7e85545825aa4a61222dfb61ba2e8f4e42e36009bf0b4d356fb65207ae31


// const data = fs.readFileSync("./cat2.jpg");
// const hash = crypto.createHash("sha256").update(data).digest("hex");
// console.log(hash);


// 123 => "sagdjhagsdhjasgdashdgashjdasgd"
// 456 => "asjdasjdhgashdgashjdgasjhdgaj"


// "123"+"abcd675443" = "123abcd675443"=> hash => "tred.abcd675443"
// "123"+"abc" = "123abc" = > "hjgr.abc"




// const crypto = require("crypto");

// let password = "12345678";
// const salt = crypto.randomBytes(8).toString("hex");
// password = password+salt;

// let hash = crypto.createHash("sha256").update(password).digest("hex");
// hash= hash+"."+salt;

// console.log(hash);





// const [hash, salt] = "75e23b3f50e4faf5468e83ec3b96675722c89b0460744dd72d9580c2884f7da6.2ef30f95430dc712".split(".");

// const givenPass = "12345678"+salt;

// const newHash = crypto.createHash("sha256").update(givenPass).digest("hex");
// if(newHash==hash){
//     console.log("Password is correct!");
// }else{
//     console.log("Incorrect Password!");
// }





