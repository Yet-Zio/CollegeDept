import bcrypt from 'bcrypt';
import Teacher from '../models/teachers.model.js';
import jwt from 'jsonwebtoken'
import leaveLetter from '../models/leaveLetter.model.js';
import Homework from '../models/homework.model.js';
import Announcement from '../models/announcement.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import TimeTable from '../models/timeTable.model.js';
import { errorHandler } from '../utils/errorHandler.js';
import StudyMaterial from '../models/studyMaterial.model.js';
import Student from '../models/students.model.js';
import mongoose from 'mongoose';
import TeacherNotification from '../models/teacherNotification.model.js';

export const addTeacher = async(req, res, next) =>{
    const{firstname, lastname,  teacherID, email} = req.body;

    const handPassword = bcrypt.hashSync( email , 10 );

    const newBatchStudents = new Teacher({email , password: handPassword, teacherID ,firstname , lastname });

    try{
        await newBatchStudents.save();
        res.status(201).json("Teacher created successfully");

    }catch(error){
        next (error);
    }

}

export const teacherSignin = async (req , res , next ) =>{

    const {teacherID , password} = req.body;

    try {

        const validUser = await Teacher.findOne({teacherID});

        if(!validUser) return next(errorHandler(404 , "User Not Found"));

        const validPassword = bcrypt.compareSync(password , validUser.password);

        if(!validPassword) return next(errorHandler(401 , "Invalid Password"));

        const token = jwt.sign({id:validUser._id} , process.env.JWT_KEY);


        const {password: pass , ...rest} = validUser._doc;
        
        res
        .cookie('accessToken', token ,{httpOnly:true})
        .status(200)
        .json(rest);
    }catch(error){
        next(error);
    }
}

export const getTeacher = async(req, res, next) =>{
    try {
        const teacher = await Teacher.find().select('-password -isHOD')
        res
        .status(200)
        .json(teacher)
    } catch (error) {
        next(error);
    }
}

// const {email} = req.params.email ; 

    // const verifyAdmin = await Teacher.findOne({email});

    // if(verifyAdmin.isHOD == false) next(errorHandler(401 , "Unauthorized"))

export const setFaculty = async (req , res , next) => {

    const {batch, teacherID} = req.body ; 

    

    // const {email} = req.params.email ; 

    // const verifyAdmin = await Teacher.findOne({email});

    // if(verifyAdmin.isHOD == false) next(errorHandler(401 , "Unauthorized"))

    try {
        await Teacher.findOneAndUpdate(
            { teacherID },
            { $set: { batch: [{ batch }] } },
            { new: true }
        );

        res
        .status(200)
        .json({message:"Faculty Set SuccessFully"});
    } catch (error) {
        next(error);
    }


}

export const applyLeave = async (req , res , next) => {

    // if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    const { message , firstname , image} = req.body ;

    // const findTeacher = await Teacher.findOne({_id:teacher})

    // if(!findTeacher) return next(errorHandler(404 , 'Teacher Not Found'));

    const addLeaveLetter = new leaveLetter({teacher: req.params.id , message , firstname , image});

    try {
        
        await addLeaveLetter.save()
        res
        .json({message: "Applied Successfully"})

    } catch (error) {
        next(error);
    }



}

export const assignHomework = async(req , res , next) => {


    try {

        // if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

        const {id} = req.params;

        const {subject , details , batch} = req.body ;

        const imagePath = req.file?.path;

        const uploadImage = await uploadOnCloudinary(imagePath)

        const homework = new Homework({teacher: id , subject , details , batch , image: uploadImage.url})

        await homework.save();

        res
        .status(200)
        .json("Homeword Assigned Successfully")

        
    } catch (error) {
        next(error)
    }

}

export const addAnnouncement = async(req , res , next) => {

    try {

        // if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized"))



        const {batch , details} = req.body;

        const newAnnouncement = new Announcement({batch , details })

        await newAnnouncement.save();

        res 
        .status(200)
        .json("Announcement Added")

    } catch (error) {
        next(error)
    }

}

export const updateTeacher = async (req, res, next) => {
    const { firstname, lastname, email, teacherID } = req.body;

    try {
        
        if (!teacherID) {
            return res.status(400).json({ error: "teacherID is required." });
        }

        
        let teacher = await Teacher.findOne({ teacherID });

    
        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found." });
        }

        if (firstname) {
            teacher.firstname = firstname;
        }
        if (lastname) {
            teacher.lastname = lastname;
        }
        if (email) {
            teacher.email = email;
        }

        await teacher.save()

        res
        .status(200)
        .json("updated successfully");
    } catch (error) {
        next(error);
        
    }
};

export const deleteTeacher = async(req , res , next) => {

    try {
        
        await Teacher.findOneAndDelete({teacherID : req.params.id})
        res.status(200)
        .json("Teacher Deleted Successfully")

    } catch (error) {
        next(error)
    }

} 
export const uploadTimetable = async (req, res, next) => {
    const { batch, timeTableData } = req.body;

    try {
        let timetable = await TimeTable.findOne({ batch });

        if (!timetable) {
            timetable = new TimeTable({ batch });
        }

        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].forEach(day => {
            if (timeTableData[day]) {
                timetable[day] = timeTableData[day];
            }
        });

        await timetable.save();

        const message = timetable.isNew ? 'Timetable uploaded successfully' : 'Timetable updated successfully';
        return res.status(200).json({ message });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: 'An error occurred while uploading the timetable.' });
    }
};
export const addStudyMaterial = async(req , res , next) => {

    try {
        
        const filePath = req.file?.path;

        const uploadFile = await uploadOnCloudinary(filePath)

        const{url , batch} = req.body;

        const addDoc = new StudyMaterial({url , batch , pdf: uploadFile.url})

        await addDoc.save();

        res
        .status(200)
        .json("added successfully")


    } catch (error) {
        next(error)
    }

}

export const uploadAttendance = async (req, res, next) => {
    const { studentID, present, absent , batch } = req.body;

    try {

        const model = mongoose.model(batch , Student.schema);

        const student = await model.findOne({ studentID });

        // if (!student) {
        //     return res.status(404).json({ message: 'Student not found' });
        // }

        if (student.attendance.length === 0) {
            // If no attendance entry exists, create a new one
            student.attendance.push({ present: 0, absent: 0 });
        }

            student.attendance[0].present += present;
        
            student.attendance[0].absent += absent;
       
        

        await student.save();

        return res.status(200).json({ message: 'Attendance updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const getTeacherNotification  = async(req , res , next) => {

    

    try {

        const fetchDocs = await TeacherNotification.find();

        res 
        .status(200)
        .json(fetchDocs)

        
    } catch (error) {
        next(error)
    }

}
