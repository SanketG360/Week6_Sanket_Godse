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
exports.getOrderById = exports.createOrder = void 0;
const Payment_1 = require("../models/Payment");
function createOrder(orderData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rating = yield Payment_1.Payment.create(orderData);
            return rating;
        }
        catch (error) {
            console.error("error adding order", error);
            throw error;
        }
    });
}
exports.createOrder = createOrder;
function getOrderById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rating = yield Payment_1.Payment.findOne({ where: { bookId: id } });
            if (!rating)
                throw new Error("order not found");
            return rating;
        }
        catch (error) {
            console.error("error getting order ", error);
            throw error;
        }
    });
}
exports.getOrderById = getOrderById;
//# sourceMappingURL=paymentOrderService.js.map