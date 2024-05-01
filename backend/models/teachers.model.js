import mongoose  from "mongoose";

const facultyAdviserSchema = new mongoose.Schema({
    batch: {
        type: String,
    },
})

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
        unique: true
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

    batch:[facultyAdviserSchema],

    avatar:{
        type: String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    isHOD: {
        type: Boolean , 
        default: false
    }
},{timestamps:true});



const Teacher = mongoose.model('Teacher',teacherSchema);

export default Teacher;