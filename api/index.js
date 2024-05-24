import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import cookieparser from 'cookie-parser'

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
	console.log(`http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://thamir:123@mern-tutorial.99oq83n.mongodb.net/?retryWrites=true&w=majority&appName=Mern-Tutorial')
.then(() => {
	console.log('MongoDb Connected');
})

app.use(express.json());
app.use(cookieparser());

app.use('/api/user', userRoutes);