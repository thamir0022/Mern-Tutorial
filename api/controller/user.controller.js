import {Product} from '../models/product.model.js'
import { User } from '../models/user.model.js';

export const getProducts = async(req, res) => {
	const allProducts = await Product.find();
	res.json({allProducts})
}

export const addToCart = async (req, res) => {
    try {
	const {email} = req.cookies.access_token.user;
	if(!email){
		res.json({message: 'Please Sign In'});
        return;
	}else{
		const {productId} = req.body;
    	await User.updateOne({email}, {$push: {cart: {$each: [{product: productId, quantity: 1}], $position: 0}}}, {new: true, upsert: true});
		res.json({message: 'Product added to cart'})
	}
	} catch (error) {
		res.json({error:  error.message});
	}
}

export const getCartProducts = async (req, res) =>{
	try {
		const {email} = req.cookies.access_token.user;
		if(!email){
			res.json({message: 'Please Sign In'});
			return;
		}else{
			const user = await User.findOne({email}).populate('cart.product');
			res.json({cart: user.cart})
		}
		} catch (error) {
			res.json({error:  error.message});
		}
} 