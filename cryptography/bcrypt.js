const bcrypt = require("bcrypt");

// async function hashPassword(){
//     try {
//         let hashedPass = await bcrypt.hash("123", 12);
//         console.log(hashedPass);
//     } catch (error) {
//         console.log(error);
//     }
// }

// hashPassword();

async function verifyPassword(){
    try {
        let correctPassword = await bcrypt.compare("123", "$2b$12$rAUe66K.RhqVB3lGlKRVZ.px/PgS9KU77uppVFiEHeiiLsRhenOLK");
        console.log(correctPassword);
    } catch (error) {
        console.log(error);
    }
}

verifyPassword();