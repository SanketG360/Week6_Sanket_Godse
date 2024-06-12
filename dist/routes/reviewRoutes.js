"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviewController_1 = require("../controllers/reviewController");
const authMiddleware_1 = __importDefault(require("../middlware/authMiddleware"));
const router = (0, express_1.Router)();
router.post('bookReview/:bookId/createReview', authMiddleware_1.default, reviewController_1.createReviewController);
router.get('bookReview/:bookId/getReviewById/:id', reviewController_1.getReviewByIdController);
router.delete('/deleteReview/:id', authMiddleware_1.default, reviewController_1.deleteReviewController);
exports.default = router;
//# sourceMappingURL=reviewRoutes.js.map