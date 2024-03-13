import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandler.js";

export const verifyUser = (req , res , next) => {

    const token = req.cookies.accessToken ;
    
    if(!token) return next(errorHandler(401 , "authorized"));

    jwt.verify(token , process.env.JWT_KEY , (err , user) => {
        if(err) return next(errorHandler(403, 'forbidden'))

        req.user = user ; 

        next();
    })

}