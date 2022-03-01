import express from "express";
import { addPost, allposts } from "../controller/post.js";

const router = express.Router()
router.get('/all-posts', allposts);
router.post('/add-post', addPost);


export default router; 