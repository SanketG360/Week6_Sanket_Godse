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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookById = exports.updateBookById = exports.getAllBooks = exports.getAllBooksById = exports.addBooks = void 0;
const bookService_1 = require("../services/bookService");
function addBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log('postman data :' + data);
            const books = yield (0, bookService_1.createBook)(req.body);
            console.log('Books :' + books);
            res.json(books);
        }
        catch (error) {
            console.error('error while registering books', error);
            res.status(401).json({ error });
        }
    });
}
exports.addBooks = addBooks;
function getAllBooksById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const books = yield (0, bookService_1.getById)(id);
            res.status(200).json(books);
        }
        catch (error) {
            console.error('error fetching all books', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllBooksById = getAllBooksById;
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield (0, bookService_1.getAll)();
            res.status(200).json(books);
        }
        catch (error) {
            console.error('error fetching all books', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllBooks = getAllBooks;
function updateBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const book = yield (0, bookService_1.updateById)(id, updateData);
            res.status(200).json({ message: 'books updated successfully', book });
        }
        catch (error) {
            console.error('error updating books', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateBookById = updateBookById;
function deleteBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, bookService_1.deleteById)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting books', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteBookById = deleteBookById;
//# sourceMappingURL=bookController.js.map