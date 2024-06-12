import { User } from "../models/User";
import bcrypt from 'bcrypt';
import  Jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const secret_key = process.env.JWT_SecretKey || 'fhrbdhasd';

export async function registerUser(userData:any) 
{
    try{
            const hashPassword =  await bcrypt.hash(userData.password,10);
            const user = await User.create({...userData,password:hashPassword});
            const token =  Jwt.sign({id:user.id,email:user.email,password:user.password},secret_key);
            const result={
                Users:user,
                Token:token
            }
            return result;
      }catch(error)
      {
        console.error('error while registering', error);
        throw error;
      }    
}

export async function loginUser(username:string,password:string,email:string) {
    try{
            const users =  await User.findOne({where:{username}});
            if (!users) throw new Error('invalid username or password');
            const isPasswordValid =  await bcrypt.compare(password,users.password);
            if (!isPasswordValid) throw new Error('invalid username or password');
            const token = Jwt.sign({username:users.username,pwd:users.password,email:users.email},secret_key);
            const result = {
                Users:users,
                Token:token
            }
            return result;
    }catch(error){
        console.error('logging error', error);
        throw error;
    }
}