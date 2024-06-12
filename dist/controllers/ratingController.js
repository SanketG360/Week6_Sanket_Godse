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
exports.getRatingByIdController = exports.createRatingController = void 0;
const ratingService_1 = require("../services/ratingService");
function createRatingController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, ratingService_1.createRating)(req.body);
            res.status(201).json(author);
        }
        catch (error) {
            console.error('error creating review', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createRatingController = createRatingController;
function getRatingByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const author = yield (0, ratingService_1.getRatingById)(id);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error finding review by id', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getRatingByIdController = getRatingByIdController;
//# sourceMappingURL=ratingController.js.map