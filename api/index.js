import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.route.js'
import adminRoutes from './routes/admin.route.js'
import cookieparser from 'cookie-parser'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
	console.log(`http://localhost:${port}`);
});

mongoose.connect(process.env.MONGO).then(() => {
	console.log('MongoDb Connected');
})

app.use(express.json());
app.use(cookieparser());

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

