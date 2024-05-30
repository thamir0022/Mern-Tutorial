import {Product} from '../models/product.model.js'

export const getProducts = async(req, res) => {
	const allProducts = await Product.find();
	res.json({allProducts})
}