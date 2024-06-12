import {registerUser,loginUser } from '../services/userService';
import { Request, Response } from "express";

export async function  addUser(req:Request, res: Response){
   try{ const data = req.body;
    console.log('postman data :'+data);
    const users = await registerUser(req.body);
    console.log('users :'+users);
    res.json(users);
   }catch (error) {
    console.error('error while registering user', error);
    res.status(401).json({error});
    }
}

export async function addLogin(req:Request, res: Response){
    try{const {username , password, email} = req.body;
    const users =  await loginUser(username, password, email);
    res.json({msg:'login successfully..',users});
    }catch (error) {
        console.error('error logging', error);
        res.status(401).json({error: 'invalid email or password'});
     }
}