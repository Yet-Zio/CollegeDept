import mongoose from "mongoose";

const leaveLetterSchema = new mongoose.Schema({

    teacher: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Teacher'
    },
    approved:{
        enum: ["Pending","Approved" , "Declined"],
        default: "Pending"
    },
    message: String,

})

const leaveLetter = mongoose.model('LeaveLetter' , leaveLetterSchema);

export default leaveLetter;