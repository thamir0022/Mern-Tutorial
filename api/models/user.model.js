import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    cart: {
       type: mongoose.Types.ObjectId,
       ref: 'product',
       default: []
    }
});

const User = mongoose.model('user', UserSchema);

export {User};