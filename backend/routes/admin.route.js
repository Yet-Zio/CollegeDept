import express from "express";
import { addAssociate } from "../controller/admin.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/add-associate', addAssociate);


export default router;