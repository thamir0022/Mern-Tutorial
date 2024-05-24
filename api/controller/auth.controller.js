import {User} from '../models/user.model.js'
export const signIn = (req, res) => {
	
}

export const signUp = async(req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.send('Please enter the required feilds');
    }else{
        const newUser = new User({
            email,
            password
        });
        await newUser.save();
        res.status(201).json({newUser, message: 'New user created successfully'});
    }
}