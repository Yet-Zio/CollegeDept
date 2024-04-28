import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    present: {
        type: Number,
        default: 0
    },
    absent: {
        type: Number,
        default: 0
    }
});

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    studentID: {
        type: Number,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: false,
    },
    avatar: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    batch: String,
    attendance: {
        type: [attendanceSchema],
        default: []
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
