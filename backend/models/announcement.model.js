import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({

    batch: {
        type: String , 
        required: true
    },
    details: {
        type: String , 
        required: true
    },
    date: {
        type: Date , 
        default: Date.now
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Teacher'
    },

})

const Announcement = mongoose.model('Announcement' , announcementSchema);

export default Announcement ;