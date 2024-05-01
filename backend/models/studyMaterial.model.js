import mongoose from "mongoose";

const studyMaterialSchema = new mongoose.Schema({

    pdf: String , 
    url: String ,
    batch: String

})

const StudyMaterial = mongoose.model('StudyMaterial' , studyMaterialSchema);

export default StudyMaterial;