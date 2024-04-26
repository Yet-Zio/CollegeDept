import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title: String ,
        date: {
            type: Date,
            default: Date.now
        },
        description: String,
        image: String
    }
)

const Event = mongoose.model('Event' , eventSchema);

export default Event;