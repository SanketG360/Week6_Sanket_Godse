"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
const paymentOrderRoutes_1 = __importDefault(require("./routes/paymentOrderRoutes"));
const ratingRoutes_1 = __importDefault(require("./routes/ratingRoutes"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log('Hello....');
});
app.use('/api/books', bookRoutes_1.default);
app.use('/api/authors', authorRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/reviews', reviewRoutes_1.default);
app.use('/api/ratings', ratingRoutes_1.default);
app.use('/api/payment', paymentOrderRoutes_1.default);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
//# sourceMappingURL=app.js.map