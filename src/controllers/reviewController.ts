import { Request, Response } from "express";
import {createReview, deleteReview, getReviewById} from '../services/reviewService';

export async function createReviewController(req: Request, res: Response) {
    try {
      const author = await createReview(req.body);
      res.status(201).json(author);
    } catch (error) {
      console.error('error creating review', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  

  
export async function getReviewByIdController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const author = await getReviewById(id);
      res.status(200).json(author);
    } catch (error) {
      console.error('error finding review by id', error);
      res.status(500).json({error:'internal server error'});
    }
  
  }
  

export  async function deleteReviewController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await deleteReview(id);
      res.status(200).json(result);
    } catch (error) {
      console.error('error deleting review', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  
  
  
  
