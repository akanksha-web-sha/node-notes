const Product = require("./../modals/productmodel");
const { fileTypeFromBuffer } = require("file-type");
const fs = require("fs/promises");
const crypto = require("crypto");
const path = require("path");
// 4-5 images

const saveImages = async(images, imageNames)=>{
  const allowedExt = ["jpg", "jpeg", "webp", "png"];

  await Promise.all(images.map(async (image) => {
    const { ext } = await fileTypeFromBuffer(image.buffer);
    if (allowedExt.includes(ext)) {
      const fileName = `${Math.floor(Math.random() * 10000000)}-${crypto
        .randomBytes(8)
        .toString("hex")}.${ext}`;
     await fs.writeFile("./uploads/" + fileName, image.buffer);

     imageNames.push(fileName);
    }
  }));


}

exports.createaHandler = async (req, res) => {
  try {
    
    const imageNames = [];
    await saveImages(req.files, imageNames);
  

    console.log("Reached products create handler");
    let { title, description, price, rating, size } = req.body;
    if (!title|| !description || !price || !rating || !size)
      throw new Error("Missing required fields!");

    const createdProduct = await Product.create({
      title,
      images: imageNames,
      description,
      price,
      rating,
      size,
    });
    res.status(201).json({ Message: createdProduct });
  } catch (error) {
    if (error.name == "ValidationError") {
      const allErrors = error.errors;
      const errors = Object.keys(allErrors).map(function (key) {
        return allErrors[key].message;
      });
      return res.status(400).json({ error: errors });
    }
    if (error.code == 11000) {
      const fieldName = Object.keys(error.keyValue)[0];
      return res
        .status(400)
        .json({ error: `The ${fieldName} has already been taken!` });
    }
    res.status(400).json({ message: error.message });
  }
};

exports.findallHandler = async (req, res) => {
  "";
};
