import Associate from "../models/associate.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import Teacher from "../models/teachers.model.js";
import bcrypt from 'bcrypt';
import LeaveLetter from "../models/leaveLetter.model.js";
import Event from "../models/event.model.js";

export const addAssociate = async (req , res , next) => {

    if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    const verifyAdmin = await Teacher.findOne({_id: req.params.id});

    if(verifyAdmin.isHOD === false) next(errorHandler(401 , "Unauthorized"))

    const {name , studentID , email} = req.body ;

    const findExistingMember = await Associate.findOne({studentID})

    if(findExistingMember) return next(errorHandler("User already exist"))

    const password = bcrypt.hashSync(email , 10);

    const newMember = new Associate({name , studentID , email , password});


    try {
        newMember.save(); 
        res
        .json({message:"Member added successfully"})
    } catch (error) {
        next(error);
    }
    
}

export const manageLeaveLetter = async (req , res , next) => {

    try {

    if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    const verifyAdmin = await Teacher.findOne({_id: req.params.id});

    if(verifyAdmin.isHOD == false) next(errorHandler(401 , "Unauthorized"))

    const { status , id } = req.body ; 

    const updatedLeaveLetter = await LeaveLetter.findByIdAndUpdate(
        id, 
        { $set: {approved: status } }, 
        { new: true } 
    );

    if (!updatedLeaveLetter) {
        return next(errorHandler(404, "Leave letter not found"));
    }

    res.status(200).json({ message: "Leave letter updated successfully" });
    
    } catch (error) {
        
    }
    


}

export const addEvent = async (req , res , next) => {

    if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    const verifyAdmin = await Teacher.findOne({_id: req.params.id});

    if(verifyAdmin.isHOD == false) next(errorHandler(401 , "Unauthorized"))

    const {title ,description} = req.body ; 

    const addEvent = new Event({title , description})

    try {
        await addEvent.save()
    } catch (error) {
        
    }
    


}

