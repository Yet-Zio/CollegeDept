import express from "express";
import { addArticle, loginAssociate } from "../controller/associate.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/loginAssociate', loginAssociate);

router.post('/addArticle' , upload.single("image") , addArticle)


export default router;