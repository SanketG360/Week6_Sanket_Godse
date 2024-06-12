"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.getById = exports.getAll = exports.createBook = void 0;
const Book_1 = require("../models/Book");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function createBook(bookData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Book_1.Books.create(bookData);
            return book;
        }
        catch (error) {
            console.error('error adding book', error);
            throw error;
        }
    });
}
exports.createBook = createBook;
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Book_1.Books.findAll();
            return book;
        }
        catch (error) {
            console.error('error getting all books', error);
            throw error;
        }
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Book_1.Books.findByPk(id);
            if (!book)
                throw new Error('Book not Found');
            return book;
        }
        catch (error) {
            console.error('error getting book', error);
            throw error;
        }
    });
}
exports.getById = getById;
function updateById(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Book_1.Books.findByPk(id);
            if (!book) {
                throw new Error('book not found');
            }
            yield book.update(updateData);
            return book;
        }
        catch (error) {
            console.error('error updating book details', error);
            throw error;
        }
    });
}
exports.updateById = updateById;
function deleteById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Book_1.Books.findByPk(id);
            if (!book) {
                throw new Error('book not found');
            }
            yield book.destroy();
            return { message: 'book deleted successfully' };
        }
        catch (error) {
            console.error('error deleting book', error);
            throw error;
        }
    });
}
exports.deleteById = deleteById;
//# sourceMappingURL=bookService.js.map