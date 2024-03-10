import express from 'express';
import {signup} from '../controllers/auth.controller.js';
// Use curly braces {} when importing named exports.
// Do not use curly braces when importing the default export.
const router = express.Router();

router.post('/signup' , signup);

export default router;