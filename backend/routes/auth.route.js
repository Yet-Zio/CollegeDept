import express from "express";
import {  signin, signout } from "../controller/auth.controller.js";

const router = express.Router(); // Call express.Router() to create a new router instance

router.post('/signin', signin);

router.get('/signout' , signout);


export default router;

