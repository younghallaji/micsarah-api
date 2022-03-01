import registerUser from "../model/registerModel.js";
import asyncHandler from "express-async-handler";

export const profile = asyncHandler(async(req, res) => {
    try {
        const id = req.params.id;
        const profiles = await registerUser.findById(id);
        console.log(req.params.id)
        res.status(200).json(profiles);
    } catch (error) {
        res.status(400).json({message:req.params.id})
    }
})