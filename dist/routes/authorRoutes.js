"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorController_1 = require("../controllers/authorController");
const authMiddleware_1 = __importDefault(require("../middlware/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/createAuthor', authMiddleware_1.default, authorController_1.createAuthorController);
router.get('/getAllAuthor', authorController_1.getAllAuthorController);
router.get('/getAuthorById/:id', authorController_1.getAuthorByIdController);
router.put('/updateAuthor/:id', authMiddleware_1.default, authorController_1.updateAuthorController);
router.delete('/deleteAuthor/:id', authMiddleware_1.default, authorController_1.deleteAuthorController);
exports.default = router;
//# sourceMappingURL=authorRoutes.js.map