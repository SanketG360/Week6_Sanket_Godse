"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDb/pgConfig"));
const Author_1 = require("../models/Author");
const Review_1 = require("../models/Review");
const Rating_1 = require("../models/Rating");
const Payment_1 = require("../models/Payment");
const User_1 = require("../models/User");
class Books extends sequelize_1.Model {
}
exports.Books = Books;
Books.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    bookCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publishedYear: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    authors: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    externalId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'books',
    timestamps: false
});
// Association   
Books.hasMany(Author_1.Authors, { foreignKey: 'bookId' });
Author_1.Authors.belongsTo(Books, { foreignKey: 'bookId' });
// Review
Books.hasMany(Review_1.Review, { foreignKey: 'bookId' });
Review_1.Review.belongsTo(Books, { foreignKey: 'bookId' });
// Rating
Books.hasMany(Rating_1.Ratings, { foreignKey: 'bookId' });
Rating_1.Ratings.belongsTo(Books, { foreignKey: 'bookId' });
// Payments
Books.hasMany(Payment_1.Payment, { foreignKey: 'bookId' });
Payment_1.Payment.belongsTo(Books, { foreignKey: 'bookId' });
// User --> Review
User_1.User.hasMany(Review_1.Review, { foreignKey: 'userId' });
Review_1.Review.belongsTo(User_1.User, { foreignKey: 'userId' });
// User -- > Rating
User_1.User.hasMany(Rating_1.Ratings, { foreignKey: 'userId' });
Rating_1.Ratings.belongsTo(User_1.User, { foreignKey: 'userId' });
//  Users -- > Payment
User_1.User.hasMany(Payment_1.Payment, { foreignKey: 'userId' });
Payment_1.Payment.belongsTo(User_1.User, { foreignKey: 'userId' });
//# sourceMappingURL=Book.js.map