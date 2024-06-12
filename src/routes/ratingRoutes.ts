import { Router } from 'express';
import {  createRatingController,  getRatingByIdController } from '../controllers/ratingController';
import auth from '../middlware/authMiddleware';
const router = Router();

router.post('/createBook/:bookId/createRating',auth, createRatingController);
router.get('/createBook/:bookId/getRatingById/:id', getRatingByIdController);



export default router ;