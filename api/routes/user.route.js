import express from 'express';
import { addToCart, getCartProducts, getProducts, deleteCartProduct } from '../controller/user.controller.js';
import { signIn, signUp } from '../controller/auth.controller.js';

const app = express();

app.post('/sign-in', signIn);
app.post('/sign-up', signUp);
app.get('/products', getProducts);
app.post('/add-to-cart', addToCart);
app.get('/get-cart', getCartProducts);
app.delete('/delete-cart-product', deleteCartProduct);


export default app;