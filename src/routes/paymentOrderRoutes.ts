import { Router } from 'express';
import {  createOrderController,  getOrderByIdController } from '../controllers/paymentOrderController';
import auth from '../middlware/authMiddleware';
const router = Router();

router.post('/createOrder',auth, createOrderController);
router.get('/getOrder/:id', getOrderByIdController);



export default router ;