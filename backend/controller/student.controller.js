import Student from "../models/students.model.js";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import ContactUs from "../models/contactUs.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import Homework from "../models/homework.model.js";
import Announcement from "../models/announcement.model.js";


export const addStudent = async(req , res , next)=>{

    if(req.user.id !== req.params.id) return next(errorHandler(403, 'forbidden'))

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

export const contactUs = async(req , res ,next) =>{
    const{name, email, message} = req.body;

    const newContactUs = new ContactUs({name, email, message});

    try {
        await newContactUs.save();
        res
        .status(200)
        .json("Thanks For Contacting")

    } catch (error) {
        next(error);
    }
}


export const getBatch = async (req, res, next) => {
    try {
        const db = mongoose.connection;

        if (db.readyState !== 1) {
            throw new Error('MongoDB connection is not established.');
        }

        const collections = await db.db.listCollections().toArray();
        
        const batchName = collections.map((data) =>{
            return(data.name);
        })

        const batchItems = batchName.filter(item => item.startsWith("batch"));

        
                
        res.json(batchItems);
        
        
    } catch (error) {
        next(error);
    }
}


export const getStudent = async (req , res , next) => {

    const{batch} = req.body ;

    try {
        
    const model = mongoose.model(batch , Student.schema);

    const fetchStudents = await model.find();

    res.status(200).json(fetchStudents);

    } catch (error) {
        next(error);
    }

}

export const getHomework = async(req , res , next) => {

    try {
        
        const fetchHomework = await Homework.find();

        res
        .status(200)
        .json(fetchHomework);

    } catch (error) {
        next(error);
    }

}

export const getAnnouncement = async(req , res , next) => {

    try {
        
        const batch = req.params.batch ;

        const fetchAnnouncement = await Announcement.find({batch})

        res
        .status(200)
        .json(fetchAnnouncement)



    } catch (error) {
        next(error);
    }

}

