
import { response } from 'express';
import Product from '../model/product-Scema.js';

export const getProducts = async (req,res) =>{

    try {

        Product.find({},(err,products)=>{
            if(err){
                res.status(500).json({
                    message: "Error in fetching products",
                    error: err
                })
            }
            else{
                res.status(200).json({
                    products: products
                })
            }
        }
        )

        
    } catch (error) {
        res.status(500).json({
            message: "Error in fetching products",
            error: error
        })
        
    }
}

export const getProductsbyID = async (req,res) =>{

    try {
        const id = req.params.id;
        const product = await Product.findOne({'id':id})

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error in fetching products", error: error });
    }
} 