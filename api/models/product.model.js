import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    rating: Number,
});

const Product = mongoose.model("product", ProductSchema);

export { Product };