import mongoose from "mongoose";

const leaveLetterSchema = new mongoose.Schema({

    teacher: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Teacher'
    },
    approved:{
        type: String,
        enum: ["Pending","Approved" , "Declined"],
        default: "Pending"
    },
    message: String,
    date: {
        type: Date,
        default: Date.now
    }

})

const LeaveLetter = mongoose.model('LeaveLetter' , leaveLetterSchema);

export default LeaveLetter;