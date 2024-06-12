import { Request, Response } from "express";
import {createBook,getAll,getById,updateById,deleteById} from '../services/bookService';


export async function  addBooks(req:Request, res: Response){
    try{ const data = req.body;
     console.log('postman data :'+data);
     const books = await createBook(req.body);
     console.log('Books :'+books);
     res.json(books);
    }catch (error) {
     console.error('error while registering books', error);
     res.status(401).json({error});
     }
 }

 export async function getAllBooksById(req:Request, res:Response) {
    try {
      const id = req.params.id;
      const books = await getById(id);
      res.status(200).json(books);
    } catch(error) {
      console.error('error fetching all books', error);
      res.status(500).json({error: 'internal server error'});
    }
}
  
export async function getAllBooks(req:Request, res:Response) {
    try {
      const books = await getAll();
      res.status(200).json(books);
    } catch(error) {
      console.error('error fetching all books', error);
      res.status(500).json({error: 'internal server error'});
    }
}



export async function updateBookById(req:Request, res:Response) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const book = await updateById(id , updateData);
      res.status(200).json({message:'books updated successfully', book});
    } catch(error) {
      console.error('error updating books', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  
export async function deleteBookById(req:Request, res:Response) {
    try {
      const id = req.params.id;
      const result = await deleteById(id);
      res.status(200).json(result);
    } catch(error) {
      console.error('error deleting books', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  


