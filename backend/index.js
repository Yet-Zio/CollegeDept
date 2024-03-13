import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import studentRouter from './routes/student.route.js'
import teacherRouter from './routes/teacher.route.js'
import adminRouter from './routes/admin.route.js'
import associateRouter from './routes/associate.route.js'
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
app.use('/api/student',studentRouter);
app.use('/api/teacher',teacherRouter);
app.use('/api/admin',adminRouter);
app.use('/api/associate',associateRouter);


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