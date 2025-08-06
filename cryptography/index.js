// function encrypt(message){
//     let encryptedMsg = "";

//     for(let ch of message){
//         const charCode = ch.charCodeAt();
//         const nextChar = String.fromCharCode(charCode+1);

//         encryptedMsg+=nextChar;
//     }

//     return encryptedMsg;
// }

// console.log(encrypt("The quick brown fox jumps over the lazy dog"));

// let decriptionMsg="";
// for(let ch of message){
//     const charCode=ch.charCodeAt();
//     const nextChar=String.fromCharCode(charCode-1);
//     decriptionMsg+=nextChar;

// }

// console.log(decriptionMsg);

// for (let i = 1; i <=10; i++) {
  
//   const message = "Uif!rvjdl!cspxo!gpy!kvnqt!pwfs!uif!mb{z!eph";
//   let decriptionMsg = "";
//   for (let ch of message) {
//     const charCode = ch.charCodeAt();
//     const nextChar = String.fromCharCode(charCode - i);
//     decriptionMsg += nextChar;
//   }

//   console.log(decriptionMsg);
// }


// "apple"+"asdjghasjgd" = "appleasdasdasdasd"

//===============================================================

const crypto = require("crypto");

// Encryption

            // const message = "The quick brown fox jumps over the lazy dog!";

            //key must be 32 characters long and the iv must be 16 chars long
            // const key = "nodejsclassencryptiondecryption1";
            // const iv = crypto.randomBytes(16);

            // const cipher = crypto.createCipheriv("aes-256-cbc",Buffer.from(key, "utf-8"), iv);
            // let encrypted = cipher.update(message, "utf-8", "hex");
            // encrypted+=cipher.update("\nthis is on the second line", "utf-8", "hex");
            // encrypted+=cipher.final("hex");
            // encrypted=encrypted+":"+iv.toString("hex");
            // console.log(encrypted);


// Decryption: 
            // const message = "ddb2458e202d9e1f7b4bb1c319112a7c7e82bfca8223cc56bc256d39c899566da8207c096e529ba3dc0407fafcd9d898a4ed3a74e8f51b0504a58b5868abed05090463ef4da1c29b69902973d26bf5f0:6c0756ebec0f49dbb54b6eb859a37537"

            // const [encrypted, iv]=message.split(":");

            // const key = "nodejsclassencryptiondecryption1";

            // const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key, "utf-8"), Buffer.from(iv, "hex"));

            // let decrypted = decipher.update(encrypted, "hex", "utf-8");
            // decrypted+=decipher.final("utf-8");

            // console.log(decrypted);



