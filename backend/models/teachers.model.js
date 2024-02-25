import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    teacherID:{
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password :{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        default: "",
    },
    avatar:{
        type: String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
},{timestamps:true});



const Teacher = mongoose.model('Teacher',teacherSchema);

export default Teacher;