import express from "express";
import { addArticle, countAssociate, loginAssociate, updateAssociate } from "../controller/associate.controller.js";
import { upload } from "../utils/multer.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/loginAssociate', loginAssociate);

router.post('/updateAssociate/:id', updateAssociate);

router.post('/addArticle/:id' ,addArticle)

router.get('/count/:id' , countAssociate)


export default router;