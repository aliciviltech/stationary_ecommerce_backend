import express from 'express'
import {CartItems, AllProductsData } from '../models/stationaryCartModel.js';

export const cartRoutes = express.Router();

cartRoutes.get('/', async(req,res)=>{
    try{
        const allCartItems = await CartItems.find(); 
        res.send({status:200, message:'get successfully', data:allCartItems})
    } catch(error){
        console.log('cartRouts get error: ', error)
    }
})

cartRoutes.post('/addCartItems', async(req,res)=>{
    try{
        const data = req.body;
        const allCartItems = await CartItems.create(data); 
        res.send({status:200, message:'post successfully', data:allCartItems})
    } catch(error){
        console.log('cartRouts post error: ', error)
    }
})