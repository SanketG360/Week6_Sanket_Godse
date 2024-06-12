"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_key = process.env.JWT_SecretKey || 'fhrbdhasd';
const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let decoded = jsonwebtoken_1.default.verify(token, secret_key);
            req.user = decoded;
            next();
        }
        else {
            res.status(401).json({ message: "Unauthorized user" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized user" });
    }
};
exports.default = auth;
//# sourceMappingURL=authMiddleware.js.map