import express from "express";
import { addAssociate, addAssociateNotification, addEvent, addNews, addTeacherNotification, getContactUs, getLeaveLetter, getNews, manageLeaveLetter } from "../controller/admin.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router(); 

router.post('/addAssociate', addAssociate);
router.post('/manageLeaveLetter/:id', manageLeaveLetter);
router.post('/addNews', addNews);
router.post('/addAssociateNotification', addAssociateNotification);
router.post('/addTeacherNotification', addTeacherNotification);
router.post('/addEvent/:id', upload.single("image") ,addEvent);
router.get('/getContact', getContactUs);
router.get('/getNews', getNews);
router.get('/getLeaveLetter', getLeaveLetter);


export default router;