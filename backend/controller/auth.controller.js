import Student from "../models/students.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/errorHandler.js";

// signup

export const signup = async(req , res , next)=>{
    const {email , studentID} = req.body;
    
    const handPassword = bcrypt.hashSync(email,10);

    const newStudent = new Student({email , password: handPassword, studentID});

    try{
        await newStudent.save();
        res.status(201).json("Students created successfully")

    }catch(error){
        next (error);
    }
}

// signin

