const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema({
     title:{
          type:String,
          minlength:[3,"Name must contain at least 3 characters"],
          required:[true,"Name is required"],
          maxlength:[30,"Name must not contain more than 30 characters!"],
    },
    price:{
        type:String,
        required:[true,"price is required"],
    },
    description:{
        type:String,
        minlength:[20,"description must contain at least 20 characters"],
        required:[true,"description is required"],
        maxlength:[40,"description must not conation more then 40 characters!"],
    },
    size:{
        type:String,
        required:[true,"size is required"],
        enum:["S","M","L"]
    },
    images:{
        type:[String],
        required:[true,"Product must have at least one image!"]
    },
    rating:{
        type:String,
        required:[true,"rating is required"]
    }
});


const Product=mongoose.model("Products",ProductSchema);

module.exports=Product;