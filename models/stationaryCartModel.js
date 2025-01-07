import mongoose from "mongoose";

const allProductsSchema = mongoose.Schema({
    title: {type:String},
    description: {type:String},
    price: {type:Number},
    imageURL: {type:String},
    category: {type:String},
    section: {type:String},
})

const stationaryCartSchema = mongoose.Schema({
    userDetails:{
        name:{type: String, required:true},
        phone:{type: String,required:true},
        address:{type: String,required:true}
    },
    orderedItems:{
        title: {type:String,required:true},
        description: {type:String,required:true},
        price: {type:Number,required:true},
        quantity: {type:Number,required:true},
        imageURL: {type:String},
        category: {type:String},
        section: {type:String},
    }
})
const AllProductsData = mongoose.model('AllProductsData',allProductsSchema);
const CartItems= mongoose.model('cartItems',stationaryCartSchema);
export  {AllProductsData, CartItems}; 