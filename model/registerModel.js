import mongoose from "mongoose";
import bcrypt from "bcrypt";
// const bcrypt = require('bcrypt');

const registerSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter title']
    },
    firstname: {
        type: String,
        required: [true, 'Please Enter First Name']
    },
    lastname: {
        type: String,
        required: [true, 'Please Enter Last Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Email'],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please Enter Phone Number']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    interest: [String],
    createdAt:{
        type:Date,
        default: new Date()
    }
}, {
    timestaps: true
});

registerSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(this.password, salt)
        this.password = hashpassword;
        console.log(this.email, this.password)
    } catch (error) {
        next(error)
    }
})
const registerUser = mongoose.model('registerUser', registerSchema);
export default registerUser;