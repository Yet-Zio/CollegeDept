import mongoose from "mongoose";

const homeworkSchema = new mongoose.Schema({

    teacher: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Teacher'
    },
    subject: {
        type: String , 
        required: true
    },
    details: {
        type: String ,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    batch: {
        type: String , 
        required: true
    }

})

const Homework = mongoose.model('Homework' , homeworkSchema);

export default Homework ;