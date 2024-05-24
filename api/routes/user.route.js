import express from 'express';
import { homePage } from '../controller/user.controller.js';
import { signIn, signUp } from '../controller/auth.controller.js';

const app = express();

//To get index page
app.get('/', homePage);
app.post('/sign-in', signIn);
app.post('/sign-up', signUp);

export default app;