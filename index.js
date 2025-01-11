import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { cartRoutes } from './routes/cartItemsRoutes.js';
import cors from 'cors'
import { allProductsRoutes } from './routes/allProductsRoutes.js';
dotenv.config()

// =================== app ====================
const app = express();
app.use(cors())
app.use(express.json())
app.get('/', (req,res)=>{
    res.send('welcome to backend')
})
app.use('/cartItems', cartRoutes)
app.use('/all_products', allProductsRoutes)
const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log('Server Started')
})

// =================== mongoose ===================
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('MongoDB connected successfully');
})
.catch((err)=>console.log('MongoDB connection error:',err))