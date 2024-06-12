import  Jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
import express ,{NextFunction, Request,Response} from "express";
import {User} from '../models/User';

const secret_key = process.env.JWT_SecretKey || 'fhrbdhasd';

const auth = (req:Request,res:Response,next:NextFunction)=>{
    try{
            let token = req.headers.authorization;
            if(token){
                token =  token.split(" ")[1];
                let decoded = Jwt.verify(token,secret_key);
                (req as any).user = decoded;
                next();
            }else{
                res.status(401).json({message:"Unauthorized user"});
            }
    }catch(error)
    {
            console.log(error);
            res.status(401).json({message:"Unauthorized user"});
    }
}

export default auth;
