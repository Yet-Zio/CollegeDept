import express from "express";
import { addAssociate, addEvent, getContactUs, manageLeaveLetter } from "../controller/admin.controller.js";
import { upload } from "../utils/multer.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/addAssociate', addAssociate);
router.post('/manageLeave', manageLeaveLetter);
router.post('/addEvent', upload.single("image") ,addEvent);
router.get('/getContact', getContactUs);


export default router;