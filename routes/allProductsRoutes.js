import express from 'express'
import { AllProductsData } from '../models/stationaryCartModel.js';


export const allProductsRoutes = express.Router();

allProductsRoutes.get('/', async(req,res)=>{
    try{
        const allProductsData = await AllProductsData.find(); 
        res.send({status:200, message:'get successfully', data:allProductsData})
    } catch(error){
        console.log('allproducts routes get error: ', error)
    }
})

allProductsRoutes.get('/get/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const singleProduct = await AllProductsData.findById(id); 
        res.send({status:200, message:'get single product successfully', data:singleProduct})
    } catch(error){
        console.log('allproducts routes get error: ', error)
    }
})

allProductsRoutes.post('/add_products', async(req,res)=>{
    try{
        const data = req.body;
        const allProductsData = await AllProductsData.create(data); 
        res.send({status:200, message:'post successfully', data:allProductsData})
    } catch(error){
        console.log('allproducts routes post error: ', error)
    }
})

allProductsRoutes.put('/update/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).send({ message: 'Invalid ID format' });
        // }
        const data = req.body;
        const allProductsData = await AllProductsData.findByIdAndUpdate(id, data); 
        res.send({status:200, message:'updated successfully', data:allProductsData})
    } catch(error){
        console.log('allproducts routes update error: ', error)
    }
})

allProductsRoutes.delete('/delete/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const allProductsData = await AllProductsData.findByIdAndDelete(id); 
        res.send({status:200, message:'deleted successfully', data:allProductsData})
    } catch(error){
        console.log('allproducts routes delete error: ', error)
    }
})

