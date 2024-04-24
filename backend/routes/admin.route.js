import express from "express";
import { addAssociate, addEvent, manageLeaveLetter } from "../controller/admin.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/addAssociate', addAssociate);
router.post('/manageLeave', manageLeaveLetter);
router.post('/addEvent', addEvent);


export default router;