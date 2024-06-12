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
exports.deleteReviewController = exports.getReviewByIdController = exports.createReviewController = void 0;
const reviewService_1 = require("../services/reviewService");
function createReviewController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, reviewService_1.createReview)(req.body);
            res.status(201).json(author);
        }
        catch (error) {
            console.error('error creating review', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createReviewController = createReviewController;
function getReviewByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const author = yield (0, reviewService_1.getReviewById)(id);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error finding review by id', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getReviewByIdController = getReviewByIdController;
function deleteReviewController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, reviewService_1.deleteReview)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error deleting review', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteReviewController = deleteReviewController;
//# sourceMappingURL=reviewController.js.map