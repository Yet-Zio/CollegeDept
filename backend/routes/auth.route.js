import express from "express";
import { signin, signup } from "../controller/auth.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/signup', signup);
router.post('/signin', signin);

export default router;

