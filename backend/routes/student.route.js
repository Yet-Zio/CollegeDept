import express, { Router } from "express";
import { addStudent, contactUs, getAnnouncement, getBatch, getHomework, getStudent, getTimetableByBatch} from "../controller/student.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router(); 

router.post('/addStudent', addStudent);
router.post('/contactUs', contactUs);
router.get('/getBatch', getBatch);
router.get('/getHomework/:batch', getHomework);
router.post('/getStudent', getStudent);
router.post('/getAnnouncement/:batch', getAnnouncement);
router.post('/getStudyMaterial/:batch', );

export default router;