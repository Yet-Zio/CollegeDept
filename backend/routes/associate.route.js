import express from "express";
import { addArticle, countAssociate, deleteAssociate, getAllArticle, getArticle, getEvent, getNotification, loginAssociate, updateAssociate, updateAssociateAdmin } from "../controller/associate.controller.js";
import { upload } from "../utils/multer.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/loginAssociate', loginAssociate);

router.post('/updateAssociate/:id', updateAssociate);

router.post('/addArticle/:id' ,addArticle)

router.get('/count/:id' , countAssociate)

router.get('/getAllArticle' , getAllArticle)

router.get('/getArticle/:id' , getArticle)

router.get('/getEvent/:id' , getEvent)

router.get('/getNotification/:id' , getNotification)

router.post('/updateAssociate' , updateAssociateAdmin);

router.delete('/deleteAssociate/:id' , deleteAssociate)


export default router;