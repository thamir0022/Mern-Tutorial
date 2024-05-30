import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    cart: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
});

const User = mongoose.model('user', UserSchema);

export {User};