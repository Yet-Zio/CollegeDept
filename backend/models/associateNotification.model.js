import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({

    details: {
        type: String , 
        required: true
    },
    date: {
        type: Date , 
        default: Date.now
    },
    member: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Associate'
    },

})

const Notification = mongoose.model('Notification' , notificationSchema);

export default Notification ;