import bcrypt from 'bcrypt';
import Teacher from '../models/teachers.model.js';
import jwt from 'jsonwebtoken'
import leaveLetter from '../models/leaveLetter.model.js';
import Homework from '../models/homework.model.js';

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
        const teacher = await Teacher.find();
        res
        .status(200)
        .json(teacher)
    } catch (error) {
        next(error);
    }
}

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
        .json({message:"Faculty Set SuccessFully"});
    } catch (error) {
        next(error);
    }


}

export const applyLeave = async (req , res , next) => {

    if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

    const {teacher , approved , message} = req.body ;

    const findTeacher = await Teacher.findOne({_id:teacher})

    if(!findTeacher) return next(errorHandler(404 , 'Teacher Not Found'));

    const addLeaveLetter = new leaveLetter({teacher , approved , message});

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

        if(req.user.id != req.params.id) return next(errorHandler(401 , "Unauthorized")) 

        const {id} = req.params;

        const {subject , details , batch} = req.body ;

        const homework = new Homework({teacher: id , subject , details , batch})

        await homework.save();

        res
        .status(200)
        .json("Homeword Assigned Successfully")

        
    } catch (error) {
        next(error)
    }

}