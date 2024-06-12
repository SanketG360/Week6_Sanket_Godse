import { Request, Response } from "express";
import {createAuthor,getAllAuthor,getAuthorById,updateAuthorById,deleteAuthorById} from '../services/authorService';

export async function createAuthorController(req: Request, res: Response) {
    try {
      const author = await createAuthor(req.body);
      res.status(201).json(author);
    } catch (error) {
      console.error('error creating author', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  
export async function getAllAuthorController(req: Request, res: Response ) {
    try {
      const author = await getAllAuthor();
      res.status(200).json(author);
    } catch (error) {
      console.error('error getting author', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  
export async function getAuthorByIdController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const author = await getAuthorById(id);
      res.status(200).json(author);
    } catch (error) {
      console.error('error finding author by id', error);
      res.status(500).json({error:'internal server error'});
    }
  
  }
  
export async function updateAuthorController(req: Request, res:Response) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const author = await updateAuthorById(id, updateData);
      res.status(200).json(author);
    } catch (error) {
      console.error('error updating author details', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  
export  async function deleteAuthorController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await deleteAuthorById(id);
      res.status(200).json(result);
    } catch (error) {
      console.error('error deleting author', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  
  
  
  
