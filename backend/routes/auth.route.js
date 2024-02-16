import express from "express";
import { signup } from "../controller/auth.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/signup', signup);

export default router;

