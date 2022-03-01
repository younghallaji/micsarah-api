import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter title']
    },
    body: {
        type: String,
        required: [true, 'Please Enter Post Body']
    },
    postedby: String  
    
}, {
    timestamps:true
});

const post = mongoose.model('post', postSchema);
export default post;