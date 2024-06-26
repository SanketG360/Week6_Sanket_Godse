"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = __importDefault(require("../middlware/authMiddleware"));
router.post('/register', authMiddleware_1.default, userController_1.addUser);
router.post('/login', authMiddleware_1.default, userController_1.addLogin);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map