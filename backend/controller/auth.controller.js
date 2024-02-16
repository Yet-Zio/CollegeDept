import Student from "../models/students.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";

// signup

export const signup = async(req , res , next)=>{
    const {email , studentID , firstname , lastname} = req.body;
    
    const handPassword = bcrypt.hashSync( email , 10 );

    const newStudent = new Student({email , password: handPassword, studentID ,firstname , lastname});

    try{
        await newStudent.save();
        res.status(201).json("Students created successfully")

    }catch(error){
        next (error);
    }
}

// signin

export const signin = async (req , res , next ) =>{
    const {studentID , password} = req.body;
    try {
        const validUser = await Student.findOne({studentID});
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

