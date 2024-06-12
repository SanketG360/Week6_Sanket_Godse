"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentOrderController_1 = require("../controllers/paymentOrderController");
const authMiddleware_1 = __importDefault(require("../middlware/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/createOrder', authMiddleware_1.default, paymentOrderController_1.createOrderController);
router.get('/getOrder/:id', paymentOrderController_1.getOrderByIdController);
exports.default = router;
//# sourceMappingURL=paymentOrderRoutes.js.map