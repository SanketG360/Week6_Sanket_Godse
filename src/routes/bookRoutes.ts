import express from 'express'
import {addBooks,getAllBooks,getAllBooksById,updateBookById,deleteBookById} from '../controllers/bookController';
import auth from '../middlware/authMiddleware';
const router = express.Router();


router.post('/create_books',auth,addBooks);
router.get('/getAllBooks',getAllBooks);
router.get('/getAllBooksById/:id',getAllBooksById);
router.put('/updateBookById/:id',auth,updateBookById);
router.delete('/deleteBookById/:id',auth,deleteBookById);


export default router;