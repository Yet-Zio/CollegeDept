import express from "express";
import { addAssociate, addEvent, addNews, getContactUs, getNews, manageLeaveLetter } from "../controller/admin.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router(); 

router.post('/addAssociate', addAssociate);
router.post('/manageLeave', manageLeaveLetter);
router.post('/addNews', addNews);
router.post('/addEvent', upload.single("image") ,addEvent);
router.get('/getContact', getContactUs);
router.get('/getNews', getNews);


export default router;