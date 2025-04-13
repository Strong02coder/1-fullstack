import express from 'express';
import { registeUser } from '../controller/user_controller.js';

const router = express.Router();

router.post('/register', registeUser);

export default router;
