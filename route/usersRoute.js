import express from "express";
import { profile } from "../controller/profile.js";
import { allUsers, register } from "../controller/user.js";


const router = express.Router();

router.get('/all-users', allUsers);
router.post('/register', register);
router.get('/profile/:id', profile);

export default router; 