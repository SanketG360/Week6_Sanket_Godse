import { Request, Response } from "express";
import {createRating, getRatingById} from '../services/ratingService';

export async function createRatingController(req: Request, res: Response) {
    try {
      const rating = await createRating(req.body);
      res.status(201).json(rating);
    } catch (error) {
      console.error('error creating rating', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  

  
export async function getRatingByIdController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const rating = await getRatingById(id);
      res.status(200).json(rating);
    } catch (error) {
      console.error('error finding rating by id', error);
      res.status(500).json({error:'internal server error'});
    }
  
}
  


  
  
  
  
