"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ratingController_1 = require("../controllers/ratingController");
const authMiddleware_1 = __importDefault(require("../middlware/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/createBook/:bookId/createRating', authMiddleware_1.default, ratingController_1.createRatingController);
router.get('/createBook/:bookId/getRatingById/:id', ratingController_1.getRatingByIdController);
exports.default = router;
//# sourceMappingURL=ratingRoutes.js.map