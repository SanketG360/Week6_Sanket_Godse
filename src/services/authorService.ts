import { Authors } from "../models/Author";

async function createAuthor(authorData: any) {
  try {
    const author =  await Authors.create(authorData);
    return author;
  } catch (error) {
    console.error('error creating author', error);
    throw error;
  }
}

async function getAllAuthor() {
  try {
    const author = await Authors.findAll();
    return author;
  } catch (error) {
    console.error('error getting list of author', error);
    throw error;
  }
}

async function getAuthorById(id: string) {
  try {
    const author = await Authors.findByPk(id);
    if (!author) throw new Error('author not found');

    return author;
  } catch (error) {
    console.error('error getting author', error);
    throw error;
  }
}

async function updateAuthorById(id: string, authorData: any) {
  try {
    const author = await Authors.findByPk(id);
    if (!author) {
      throw new Error('author not found');
    }
    await author.update(authorData);
    return author;
  } catch (error) {
    console.error('error updating author details', error);
    throw error;
  }
}

async function deleteAuthorById(id: string) {
  try {
    const author = await Authors.findByPk(id);
    if (!author) {
      throw new Error('author not found');
    }
    await author.destroy();
    return { message: 'author deleted successfully' };
  } catch (error) {
    console.error('error deleting author', error);
    throw error;
  }
}



export { createAuthor, getAllAuthor, getAuthorById,updateAuthorById, deleteAuthorById };