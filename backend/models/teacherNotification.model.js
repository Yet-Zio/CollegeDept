import mongoose from "mongoose";

const teacherNotificationSchema = new mongoose.Schema({

    details: {
        type: String , 
        required: true
    },
    date: {
        type: Date , 
        default: Date.now
    },

})

const TeacherNotification = mongoose.model('TeacherNotification' , teacherNotificationSchema);

export default TeacherNotification ;