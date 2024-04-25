import express from "express";
import { addTeacher, assignHomework, getTeacher, setFaculty, teacherSignin } from "../controller/teacher.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/addTeacher', addTeacher);
router.post('/teacherSignin', teacherSignin);
router.get('/getTeacher', getTeacher);
router.post('/setFaculty', setFaculty);
router.post('/assignHomework/:id', assignHomework);



export default router;