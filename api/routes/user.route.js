import express from 'express';
import { getProducts } from '../controller/user.controller.js';
import { signIn, signUp } from '../controller/auth.controller.js';

const app = express();

app.post('/sign-in', signIn);
app.post('/sign-up', signUp);
app.get('/products', getProducts)

export default app;