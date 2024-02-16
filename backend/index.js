import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import corsMiddleware from './utils/cors.js'

dotenv.config();


const PORT = process.env.PORT || 3000 ;

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log("error caught", err);
    });




const app = express();

app.use(corsMiddleware)



app.use(express.json());

app.use(cookieParser());

app.listen(PORT, () => {
    console.log("server is running at port 3000");
});

app.use('/api/auth',authRouter);


// creating middleware

app.use((err, req , res , next) => {
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json({
        success: false , 
        statusCode,
        message
    });
});