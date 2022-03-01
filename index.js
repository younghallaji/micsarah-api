import express from "express";
import 'dotenv/config'
import postRoute from "./route/postRoute.js";
import userRoute from "./route/usersRoute.js";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.use('/api/users', userRoute);
app.use('/api/post', postRoute);
app.listen(PORT, ()=>console.log(`Server Running on ${PORT} `));
connectDB();