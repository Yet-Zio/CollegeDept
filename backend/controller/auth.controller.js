import Student from "../models/students.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";
import mongoose from "mongoose";


// signin

export const signin = async (req , res , next ) =>{
    const {studentID , password, batch} = req.body;
    try {
        const model = mongoose.model(batch , Student.schema);

        const validUser = await model.findOne({studentID});

        if(!validUser) return next(errorHandler(404 , "User Not Found"));

        const validPassword = bcrypt.compareSync(password , validUser.password);

        if(!validPassword) return next(errorHandler(401 , "Invalid Password"));

        const token = jwt.sign({id:validUser._id} , process.env.JWT_KEY);


        const {password: pass , ...rest} = validUser._doc;
        
        res
        .cookie('accessToken',token,{httpOnly:true})
        .status(200)
        .json(rest);
    }catch(error){
        next(error);
    }
}

