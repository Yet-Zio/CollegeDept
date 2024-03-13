import express from "express";
import { addStudent, contactUs, getBatch} from "../controller/student.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router(); 

router.post('/addStudent',verifyUser, addStudent);
router.post('/contactUs', contactUs);
router.get('/getBatch', getBatch);


export default router;