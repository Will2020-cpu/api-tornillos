import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller'


const router = Router();

router.post('/signin',AuthController.signin)
router.post('/signup',AuthController.signup)
router.get('/whoami',AuthController.whoami)

export default router;
