import express from "express";
import {  signin } from "../controller/auth.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/signin', signin);


export default router;

