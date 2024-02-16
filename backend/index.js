import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'

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

app.use(express.json());



app.listen(PORT, () => {
    console.log("server is running at port 3000");
});

app.use('/api/auth',authRouter);


// creating middleware
