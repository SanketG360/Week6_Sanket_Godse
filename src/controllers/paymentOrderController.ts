import { Request, Response } from "express";
import {createOrder , getOrderById} from '../services/paymentOrderService';

export async function createOrderController(req: Request, res: Response) {
    try {
      const author = await createOrder(req.body);
      res.status(201).json(author);
    } catch (error) {
      console.error('error creating order', error);
      res.status(500).json({error:'internal server error'});
    }
  }
  

  
export async function getOrderByIdController(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const author = await getOrderById(id);
      res.status(200).json(author);
    } catch (error) {
      console.error('error finding order by id', error);
      res.status(500).json({error:'internal server error'});
    }
  
}
  


  
  
  
  
