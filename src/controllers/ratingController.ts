import { Request, Response } from "express";
import {createRating, getRatingById} from '../services/ratingService';

export async function createRatingController(req: Request, res: Response) {
    try {
      const author = await createRating(req.body);
      res.status(201).json(author);
    } catch (error) {
      console.error('error creating review', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  

  
export async function getRatingByIdController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const author = await getRatingById(id);
      res.status(200).json(author);
    } catch (error) {
      console.error('error finding review by id', error);
      res.status(500).json({error:'internal server error'});
    }
  
}
  


  
  
  
  
