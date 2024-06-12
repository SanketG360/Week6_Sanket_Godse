"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const authMiddleware_1 = __importDefault(require("../middlware/authMiddleware"));
const router = express_1.default.Router();
router.post('/create_books', authMiddleware_1.default, bookController_1.addBooks);
router.get('/getAllBooks', bookController_1.getAllBooks);
router.get('/getAllBooksById/:id', bookController_1.getAllBooksById);
router.put('/updateBookById/:id', authMiddleware_1.default, bookController_1.updateBookById);
router.delete('/deleteBookById/:id', authMiddleware_1.default, bookController_1.deleteBookById);
exports.default = router;
//# sourceMappingURL=bookRoutes.js.map