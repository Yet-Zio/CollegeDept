import mongoose from "mongoose";

const newsSchema  = new mongoose.Schema({

    headline: String , 
    content: String ,


})

const News = mongoose.model('News' ,newsSchema);

export default News;