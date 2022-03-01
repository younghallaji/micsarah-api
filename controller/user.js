import registerUser from '../model/registerModel.js';
import asyncHandler from "express-async-handler";
// import './model/registerModel.js';

export const allUsers = asyncHandler(async(req, res) => {
    try {
        const registeredUsers = await registerUser.find();
        res.status(200).json(registeredUsers);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

export const register = async(req, res) => {
    
    try {
        const user = req.body;
        console.log(user);
        const newUser = new registerUser(user);
        await newUser.save()
        res.status(200).json({message:'successful'})
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
    // if(!user)
    // res.send('New Registration made')
}