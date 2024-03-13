import express from "express";
import { loginAssociate } from "../controller/associate.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/login-associate', loginAssociate);


export default router;