import express from 'express'
import { AllProductsData } from '../models/stationaryCartModel.js';


export const allProductsRoutes = express.Router();

allProductsRoutes.get('/', async(req,res)=>{
    try{
        const allProductsData = await AllProductsData.find(); 
        res.send({status:200, message:'get successfully', data:allProductsData})
    } catch(error){
        console.log('cartRouts get error: ', error)
    }
})

allProductsRoutes.post('/add_products', async(req,res)=>{
    try{
        const data = req.body;
        const allProductsData = await AllProductsData.create(data); 
        res.send({status:200, message:'get successfully', data:allProductsData})
    } catch(error){
        console.log('cartRouts post error: ', error)
    }
})

