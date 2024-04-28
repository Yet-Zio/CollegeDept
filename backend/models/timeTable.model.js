import mongoose from "mongoose";

const periodSchema = new mongoose.Schema({
    firstPeriod: String ,
    secondPeriod: String ,
    thirdPeriod: String ,
    fourthPeriod: String ,
    fifthPeriod: String ,
});

const timeTableSchema = new mongoose.Schema({
    batch: {
        type: String , 
        required: true
    },
    monday: [periodSchema],
    tuesday: [periodSchema],
    wednesday: [periodSchema],
    thursday: [periodSchema],
    friday: [periodSchema],
});

const TimeTable = mongoose.model('TimeTable' , timeTableSchema);

export default TimeTable;
