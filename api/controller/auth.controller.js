import {User} from '../models/user.model.js'

export const signIn = async (req, res) => {
	const {email, password} = req.body;
    if(!email || !password){
        res.json({message:'Please enter the required feilds'});
    }else{
        const user = await User.findOne({email});
        if(!user){
            res.json({message:'User does not exist'});
        }else{
            if(user.password === password){
                const { password, ...rest } = user._doc;
                res.status(200).cookie("access_token", {user: rest},{httpOnly: true,}).json({message: "User Signed In Successfully"});
            }else{
                res.json({message:'Incorrect Password'});
            }
        }
    }
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
        res.status(201).json({message: 'Account created successfully'});
    }
}