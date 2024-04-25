import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({

    title: String ,  

    body : String,

    description: String,

    author: String,
    
    date: {
        type: Date ,
        default: Date.now
    } ,
})

const associateSchema = new mongoose.Schema({
    name: {
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

},{timestamps: true})


const Associate = mongoose.model("Associate" , associateSchema);

export default Associate ; 