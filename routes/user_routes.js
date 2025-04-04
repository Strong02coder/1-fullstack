import express from 'express';
import { registeUser } from '../controller/User_controller';

const router = express.Router();

router.get('/register', registeUser);

export default router;
