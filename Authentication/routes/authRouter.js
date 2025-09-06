const express = require("express");
const authRoutes = express.Router();

const {signupHandler, loginHandler, profileHandler, logoutHandler} = require("./../controllers/authController");


authRoutes.post("/signup", signupHandler);
authRoutes.post("/login", loginHandler);
authRoutes.get("/profile", profileHandler);
authRoutes.get("/logout", logoutHandler);

module.exports = authRoutes;
