import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({

    title: String ,  

    body : String,
    
    date: {
        type: Date ,
        default: Date.now
    } ,
})

const associateSchema = new mongoose.Schema({
    firstname: {
        type: String,
       
    },
    lastname: {
        type: String,
       
    },
    studentID:{
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String ,
        required: true , 
        unique: true,
    },
    article:[articleSchema],
    avatar: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    gender: String,
    dob: String

},{timestamps: true})


const Associate = mongoose.model("Associate" , associateSchema);

export default Associate ; 