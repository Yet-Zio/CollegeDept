import Student from "../models/students.model.js";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";


export const addStudent = async(req , res , next)=>{
    const {email , studentID , firstname , lastname , batch} = req.body;
    
    const handPassword = bcrypt.hashSync( email , 10 );

    const model = mongoose.model(batch , Student.schema);

    const newBatchStudents = new model({email , password: handPassword, studentID ,firstname , lastname, batch});

    try{
        await newBatchStudents.save();
        res.status(201).json("Students created successfully")

    }catch(error){
        next (error);
    }
}