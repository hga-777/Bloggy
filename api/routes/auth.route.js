import express from 'express';
import {google, signin, signup} from '../controllers/auth.controller.js';
// Use curly braces {} when importing named exports.
// Do not use curly braces when importing the default export.
const router = express.Router();

router.post('/signup' , signup);
router.post('/signin',signin);
router.post('/google', google);

export default router;
