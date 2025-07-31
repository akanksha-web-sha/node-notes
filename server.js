const express = require("express");
const app = express();

const products = [
    {
      title: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with 20-hour battery life.",
      price: 89.99,
      image: "https://via.placeholder.com/150?text=Headphones"
    },
    {
      title: "Smart Watch",
      description: "Fitness tracker with heart rate monitor and GPS.",
      price: 149.99,
      image: "https://via.placeholder.com/150?text=Smart+Watch"
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and 12-hour playtime.",
      price: 59.99,
      image: "https://via.placeholder.com/150?text=Speaker"
    },
    {
      title: "Gaming Mouse",
      description: "Ergonomic design with customizable DPI and RGB lighting.",
      price: 39.99,
      image: "https://via.placeholder.com/150?text=Gaming+Mouse"
    },
    {
      title: "4K Monitor",
      description: "27-inch UHD display with HDR support and ultra-slim design.",
      price: 299.99,
      image: "https://via.placeholder.com/150?text=4K+Monitor"
    }
  ];
  

app.get("/", function(req, res){
    res.json({message: "Welcome!"});
});

app.get("/contact", function(req, res){
    res.json({message: "+911234567890"})
});

app.get("/products", (req, res)=>{
    res.json({message: products});
});
// app.get("/product/:index", (req, res)=>{
//     // res.json({message: products[0]});
//     // console.log(req.params);
//     // To access index param: req.params.index
//     // to access title param: req.params.title
 
//     // Handle the situation when there is no product index given!
//     const index = req.params.index-1;
//      res.json({message: products[index]})
// })

//query Parameter

app.get("/product", (req, res)=>{
    // http://localhost:8080/product?id=4
    if(!req.query.id) res.json({message: "Invalid product id!"});
   else  res.json({message: products[req.query.id-1]});
})

app.use((req, res)=>{
    res.json({message: "404 Not Found!"});
})

app.listen(8080, ()=>{console.log("Server is running on port 8080!")})