import Associate from "../models/associate.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import Teacher from "../models/teachers.model.js";
import bcrypt from 'bcrypt';
import LeaveLetter from "../models/leaveLetter.model.js";
import Event from "../models/event.model.js";
import ContactUs from "../models/contactUs.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import News from "../models/departmentNews.model.js";
import Notification from "../models/associateNotification.model.js";
import TeacherNotification from "../models/teacherNotification.model.js";

export const addAssociate = async (req , res , next) => {

    // if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    // const verifyAdmin = await Teacher.findOne({_id: req.params.id});

    // if(verifyAdmin.isHOD == false) next(errorHandler(401 , "Unauthorized"))

    const {firstname , studentID , email , lastname} = req.body ;

    const findExistingMember = await Associate.findOne({studentID})

    if(findExistingMember) return next(errorHandler("User already exist"))

    const password = bcrypt.hashSync(email , 10);

    const newMember = new Associate({firstname , studentID , email , password , lastname});


    try {
        await newMember.save(); 
        res
        .json({message:"Member added successfully"})
    } catch (error) {
        next(error);
    }
    
}

export const manageLeaveLetter = async (req , res , next) => {

    try {

    // if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    // const verifyAdmin = await Teacher.findOne({_id: req.params.id});

    // if(verifyAdmin.isHOD == false) next(errorHandler(401 , "Unauthorized"))

    const { status  } = req.body ; 

    const updatedLeaveLetter = await LeaveLetter.findOneAndUpdate({teacher:req.params.id},
        
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

    const imagePath = req.file?.path;

    const uploadImage = await uploadOnCloudinary(imagePath)

    console.log(uploadImage)

    const {title ,description} = req.body ; 

    const addEvent = new Event({title , description , image: uploadImage.url , owner: req.params.id})

    try {
        await addEvent.save()
        res 
        .status(200)
        .json("Uploaded successfully")
    } catch (error) {
        next(error)
    }

}


export const getContactUs = async(req , res , next) => {

    try {
        
        const fetchContact = await ContactUs.find()

        res
        .status(200)
        .json(fetchContact);

    } catch (error) {
        next(error)
    }

}

export const addNews = async(req , res , next) => {

    try {
        
        const {headline  , content} = req.body;

        const addNews = new News({headline , content})

        await addNews.save();

        res
        .status(200)
        .json("News added successfully")

    } catch (error) {
        next(error);
    }

}

export const getNews = async(req , res , next) => {

    try {
        
        const fetchNews = await News.find()

        res
        .status(200)
        .json(fetchNews);

    } catch (error) {
        next(error)
    }

}
export const getLeaveLetter = async(req , res , next) => {

    try {
        
        const fetchLeaveLetter = await LeaveLetter.find({approved: "Pending"})

        res
        .status(200)
        .json(fetchLeaveLetter);

    } catch (error) {
        next(error)
    }

}

export const addAssociateNotification = async(req , res , next) => {

    try {
        
        const addDocument = new Notification({details: req.body.message})

        await addDocument.save();
        res
        .status(200)
        .json("Notification sent successfully")

    } catch (error) {
        next(error)
    }

}
export const addTeacherNotification = async(req , res , next) => {

    try {
        
        const addDocument = new TeacherNotification({details: req.body.message})

        await addDocument.save();
        res
        .status(200)
        .json("Notification sent successfully")

    } catch (error) {
        next(error)
    }

}
