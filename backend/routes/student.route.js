import express from "express";
import { addStudent, contactUs, getBatch} from "../controller/student.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/addStudent', addStudent);
router.post('/contactUs', contactUs);
router.get('/getBatch', getBatch);


export default router;