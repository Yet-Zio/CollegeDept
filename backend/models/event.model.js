import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title: String ,
        date: {
            type: Date,
            default: Date.now
        },
        description: String,
        image: String,
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Associate'
        }
    }
)

const Event = mongoose.model('Event' , eventSchema);

export default Event;