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
exports.getOrderByIdController = exports.createOrderController = void 0;
const paymentOrderService_1 = require("../services/paymentOrderService");
function createOrderController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const author = yield (0, paymentOrderService_1.createOrder)(req.body);
            res.status(201).json(author);
        }
        catch (error) {
            console.error('error creating order', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createOrderController = createOrderController;
function getOrderByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const author = yield (0, paymentOrderService_1.getOrderById)(id);
            res.status(200).json(author);
        }
        catch (error) {
            console.error('error finding order by id', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getOrderByIdController = getOrderByIdController;
//# sourceMappingURL=paymentOrderController.js.map