import express from 'express'
const router = express.Router();
import {addUser,addLogin} from '../controllers/userController';
import auth from '../middlware/authMiddleware';
router.post('/register',auth,addUser);
router.post('/login',auth,addLogin);



export default router;