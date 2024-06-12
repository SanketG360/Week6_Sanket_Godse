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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret_key = process.env.JWT_SecretKey || 'fhrbdhasd';
function registerUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashPassword = yield bcrypt_1.default.hash(userData.password, 10);
            const user = yield User_1.User.create(Object.assign(Object.assign({}, userData), { password: hashPassword }));
            const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, password: user.password }, secret_key);
            const result = {
                Users: user,
                Token: token
            };
            return result;
        }
        catch (error) {
            console.error('error while registering', error);
            throw error;
        }
    });
}
exports.registerUser = registerUser;
function loginUser(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield User_1.User.findOne({ where: { username } });
            if (!users)
                throw new Error('invalid username or password');
            const isPasswordValid = yield bcrypt_1.default.compare(password, users.password);
            if (!isPasswordValid)
                throw new Error('invalid username or password');
            const token = jsonwebtoken_1.default.sign({ username: users.username, pwd: users.password, email: users.email }, secret_key);
            const result = {
                Users: users,
                Token: token
            };
            return result;
        }
        catch (error) {
            console.error('logging error', error);
            throw error;
        }
    });
}
exports.loginUser = loginUser;
//# sourceMappingURL=userService.js.map