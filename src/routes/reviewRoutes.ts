import { Router } from 'express';
import {  createReviewController,  getReviewByIdController,  deleteReviewController } from '../controllers/reviewController';
import auth from '../middlware/authMiddleware';
const router = Router();

router.post('/bookReview/:bookId/createReview', auth,createReviewController);
router.get('/bookReview/:bookId/getReviewById', getReviewByIdController);
router.delete('/deleteReview/:id',auth, deleteReviewController);



export default router ;
