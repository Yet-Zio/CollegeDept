import Associate from "../models/associate.model.js";
import bcrypt from 'bcrypt';
import { errorHandler } from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken'

export const loginAssociate = async (req , res , next) => {
 
    const {studentID , password} = req.body ;

    try {

    const findMember = await Associate.findOne({studentID}); 

    if(!findMember) return next(errorHandler(401 , "Please enter a valid email"));

    const checkPassword = bcrypt.compareSync(password , findMember.password);

    if(!checkPassword) return next(errorHandler(401 , "Invalid Credentials"))

    const token = jwt.sign({id: findMember._id} , process.env.JWT_KEY , {expiresIn: '1d'})

    const {password: pass , ...rest} = findMember._doc ; 

    res
    .status(201)
    .cookie('accessToken' , token , {httpOnly: true})
    .json(rest) 

   } catch (error) {
    
    next(error);

   }

}

export const addArticle = async (req , res , next) => {

    if(req.user.id !== req.params.id) return next(errorHandler(403, 'forbidden'))

    const {title , body , author , description } = req.body ;

    const findUser = await Associate.findOne({_id:req.params.id})

    if(!findUser) return next(errorHandler(401 , "User cant be found"))

    findUser.article.push({title , body , author , description})

    try {
        await addArticle.save();
        res
        .json({message:"Article Added Successfully"})
    } catch (error) {
        next(error);
    }

}
