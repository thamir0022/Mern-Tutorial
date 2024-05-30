import {Product} from '../models/product.model.js';

export const addProduct = async (req, res) => {
    const {name, price, image, rating} = req.body;
    if(!name || !price || !image || !rating){
        res.json({message: 'All feilds are required!'});
    }else{
        const newProduct = new Product({
            name,
            price,
            image,
            rating
        });
        await newProduct.save();
        res.status(201).json({newProduct, message: 'New product created successfully'});
    }
}