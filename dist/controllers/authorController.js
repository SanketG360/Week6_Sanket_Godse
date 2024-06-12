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
exports.deleteAuthorController = exports.updateAuthorController = exports.getAuthorByIdController = exports.getAllAuthorController = exports.createAuthorController = void 0;
const authorService_1 = require("../services/authorService");
function createAuthorController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, authorService_1.createAuthor)(req.body);
            res.status(201).json(author);
        }
        catch (error) {
            console.error('error creating author', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createAuthorController = createAuthorController;
function getAllAuthorController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, authorService_1.getAllAuthor)();
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error getting author', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAllAuthorController = getAllAuthorController;
function getAuthorByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const author = yield (0, authorService_1.getAuthorById)(id);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error finding author by id', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getAuthorByIdController = getAuthorByIdController;
function updateAuthorController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const author = yield (0, authorService_1.updateAuthorById)(id, updateData);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error updating author details', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateAuthorController = updateAuthorController;
function deleteAuthorController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, authorService_1.deleteAuthorById)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting author', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteAuthorController = deleteAuthorController;
//# sourceMappingURL=authorController.js.map