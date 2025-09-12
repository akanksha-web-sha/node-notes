const express=require("express");
const productRouter=express.Router();

const{createaHandler}=require("./../controllers/productcontroller");
const multer = require("multer");
const { protect, restrictToAdmin } = require("../controllers/authController");

const uploadImages = multer({storage: multer.memoryStorage()});

productRouter.use(protect);
productRouter.use(restrictToAdmin);
productRouter.post("/create",uploadImages.array("images", 20),createaHandler);

module.exports=productRouter;