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
exports.addLogin = exports.addUser = void 0;
const userService_1 = require("../services/userService");
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log('postman data :' + data);
            const users = yield (0, userService_1.registerUser)(req.body);
            console.log('users :' + users);
            res.json(users);
        }
        catch (error) {
            console.error('error while registering user', error);
            res.status(401).json({ error });
        }
    });
}
exports.addUser = addUser;
function addLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password, email } = req.body;
            const users = yield (0, userService_1.loginUser)(username, password, email);
            res.json({ msg: 'login successfully..', users });
        }
        catch (error) {
            console.error('error logging', error);
            res.status(401).json({ error: 'invalid email or password' });
        }
    });
}
exports.addLogin = addLogin;
//# sourceMappingURL=userController.js.map