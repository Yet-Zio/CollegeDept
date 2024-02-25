import bcrypt from 'bcrypt';
import Teacher from '../models/teachers.model.js';
import jwt from 'jsonwebtoken'

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
