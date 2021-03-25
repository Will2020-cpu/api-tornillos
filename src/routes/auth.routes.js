import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller'
import * as VerifyToken from '../middlewares/VerifyToken'

const router = Router();

router.post('/signin',AuthController.signin)
router.post('/signup',VerifyToken.verifyToken,AuthController.signup)
router.get('/whoami',AuthController.whoami)

export default router;
