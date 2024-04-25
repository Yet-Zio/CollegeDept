import express from "express";
import { addStudent, contactUs, getBatch, getHomework, getStudent} from "../controller/student.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router(); 

router.post('/addStudent',verifyUser, addStudent);
router.post('/contactUs', contactUs);
router.get('/getBatch', getBatch);
router.get('/getHomework', getHomework);
router.post('/getStudent', getStudent);


export default router;