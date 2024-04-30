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

})

const Announcement = mongoose.model('Announcement' , announcementSchema);

export default Announcement ;