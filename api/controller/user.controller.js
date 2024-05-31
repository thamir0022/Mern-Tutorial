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
		const user = await User.findOne({email});
		if(!user){
			res.json({message: 'Please Sign In'});
		}else{
			const productIndex = user.cart.findIndex(item => item.product.toString() === productId);
			if(productIndex >  -1){
				if (user.cart[productIndex].quantity < 10) user.cart[productIndex].quantity += 1;
			}else{
				user.cart.unshift({product: productId, quantity: 1});
			}
			await user.save();
		}
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


export const deleteCartProduct = async(req, res) => {
	try {
		const {email} = req.cookies.access_token.user;
		const {productId} = req.body;
		if(!email){
			res.json({message: 'Please Sign In'});
		}else{
			const user = await User.findOne({email});
			if(!user){
				res.json({message: 'User not found!'});
			}else{
				const productIndex = user.cart.findIndex(item => item.product.toString() === productId);
                if(productIndex >  -1){
                    user.cart.splice(productIndex, 1);
                }
                await user.save();
                res.json({message: 'Product deleted from cart'})
			}
		}
	} catch (error) {
		res.json({error:  error.message});
	}
}

export const updateCartProductQuantity = async(req, res) => {
 try {
	const {email} = req.cookies.access_token.user;
	if(!email){
		res.json({message: 'Please Sign In'});
	}else{
		const operation = req.params.op;
		const productId = req.params.productId;
		const user = await User.findOne({email});
		const productIndex = user.cart.findIndex(item => item.product.toString() === productId);
			if(productIndex >  -1){
				if(operation === 'inc'){
					if(user.cart[productIndex].quantity < 10) user.cart[productIndex].quantity += 1;
				}else if(operation === 'dec'){
					if(user.cart[productIndex].quantity > 1) user.cart[productIndex].quantity -= 1;
				}
			await user.save();
	}
	res.json({message: 'Product quantity updated'});
}}catch (error) {
	console.log(error);
 }
}