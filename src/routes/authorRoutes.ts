import { Router } from 'express';
import { createAuthorController, getAllAuthorController, getAuthorByIdController,  updateAuthorController, deleteAuthorController } from '../controllers/authorController';
import auth from '../middlware/authMiddleware';
const router = Router();

router.post('/createAuthor', auth, createAuthorController);
router.get('/getAllAuthor', getAllAuthorController);
router.get('/getAuthorById/:id', getAuthorByIdController);
router.put('/updateAuthor/:id',auth, updateAuthorController);
router.delete('/deleteAuthor/:id',auth, deleteAuthorController);



export default router ;