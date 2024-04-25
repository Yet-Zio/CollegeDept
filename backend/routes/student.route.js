import express from "express";
import { addStudent, contactUs, getAnnouncement, getBatch, getHomework, getStudent} from "../controller/student.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router(); 

router.post('/addStudent',verifyUser, addStudent);
router.post('/contactUs', contactUs);
router.get('/getBatch', getBatch);
router.get('/getHomework', getHomework);
router.post('/getStudent', getStudent);
router.post('/getAnnouncement/:batch', getAnnouncement);


export default router;