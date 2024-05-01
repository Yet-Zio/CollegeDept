import express from "express";
import { addAnnouncement, addStudyMaterial, addTeacher, applyLeave, assignHomework, deleteTeacher, getTeacher, setFaculty, teacherSignin, updateTeacher, uploadTimetable } from "../controller/teacher.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.post('/addTeacher', addTeacher);
router.post('/teacherSignin', teacherSignin);
router.get('/getTeacher', getTeacher);
router.post('/setFaculty', setFaculty);
router.post('/assignHomework/:id',upload.single("image") , assignHomework);
router.post('/addAnnouncement', addAnnouncement);
router.post('/applyLeave/:id' ,  applyLeave );
router.post('/updateTeacher' , updateTeacher);
router.delete('/deleteTeacher/:id' , deleteTeacher)
router.post('/uploadTimeTable' , uploadTimetable)
router.post('/addStudyMaterial' , upload.single("pdf") , addStudyMaterial)


export default router;