import { Books } from "../models/Book";
import dotenv from 'dotenv';
dotenv.config();

export async function createBook(bookData:any)
{
    try{
        const book =  await Books.create(bookData);
        return book;
    }catch(error)
    {
        console.error('error adding book', error);
        throw error;
    }
}

export async function getAll() {
    try{
        const book =  await Books.findAll();
        return book;
    }catch(error){
        console.error('error getting all books', error);
        throw error;
    }
}

export async function getById(id:string) {
    try{
        const book =  await Books.findByPk(id);
        if(!book) throw new Error('Book not Found');
        return book;
    }catch(error){
        console.error('error getting book', error);
        throw error;
    }
}

export async function updateById(id:string,updateData:any) {
    try
    {
        const book = await Books.findByPk(id);
        if (!book) {
         throw new Error('book not found');
    }
    await book.update(updateData);
    return book;
    }catch (error) {
        console.error('error updating book details', error);
        throw error;
    }
}
export async function deleteById(id: string) {
    try {
      const book = await Books.findByPk(id);
      if (!book) {
        throw new Error('book not found');
      }
      await book.destroy();
      return { message: 'book deleted successfully' };
    } catch (error) {
      console.error('error deleting book', error);
      throw error;
    }
  }