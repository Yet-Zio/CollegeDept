import express from "express";
import { addAnnouncement, addTeacher, assignHomework, getTeacher, setFaculty, teacherSignin } from "../controller/teacher.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/addTeacher', addTeacher);
router.post('/teacherSignin', teacherSignin);
router.get('/getTeacher', getTeacher);
router.post('/setFaculty', setFaculty);
router.post('/assignHomework/:id', assignHomework);
router.post('/addAnnouncement/:id', addAnnouncement);



export default router;