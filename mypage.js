const express = require("express")
const app = express();

const data = [
    {
      id: 1,
      name: "Apple",
      picture: "https://example.com/images/apple.jpg",
      description: "A sweet red fruit that is high in fiber and vitamin C."
    },
    {
      id: 2,
      name: "Banana",
      picture: "https://example.com/images/banana.jpg",
      description: "A yellow fruit that's rich in potassium and easy to digest."
    },
    {
      id: 3,
      name: "Mango",
      picture: "https://example.com/images/mango.jpg",
      description: "A tropical fruit known for its sweetness and juicy texture."
    },
    {
      id: 4,
      name: "Grapes",
      picture: "https://example.com/images/grapes.jpg",
      description: "Small, round fruits often used to make wine or eaten fresh."
    },
    {
      id: 5,
      name: "Orange",
      picture: "https://example.com/images/orange.jpg",
      description: "Citrus fruit rich in vitamin C, commonly used in juice."
    },
    {
      id: 6,
      name: "Strawberry",
      picture: "https://example.com/images/strawberry.jpg",
      description: "A red fruit with seeds on the outside and a sweet flavor."
    },
    {
      id: 7,
      name: "Pineapple",
      picture: "https://example.com/images/pineapple.jpg",
      description: "Tropical fruit with a spiky exterior and juicy, tart interior."
    }
  ];

  app.get("/",function(req,res){
    res.json({message:"hello api"});
  });

  app.get("/data",(req,res)=>{
    res.json({message:data});

  });

  // app.get("/fruit/:index",(req,res)=>{
  //   res.json({message:data[0]});
  // });

  app.get("/fruit",(req,res)=>{
    res.json({message:data[req.query.id-1]});
  });

  app.use((req,res)=>{
    res.json({message:"404 not found"});
  });

  app.listen(8080,()=>{console.log("open with live server")})