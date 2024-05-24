import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('user', UserSchema);

export {User};