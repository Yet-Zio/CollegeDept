import express from "express";
import { addAssociate, addEvent, manageLeaveLetter } from "../controller/admin.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/add-associate', addAssociate);
router.post('/manage-leave', manageLeaveLetter);
router.post('/add-event', addEvent);


export default router;