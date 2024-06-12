"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authors = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDb/pgConfig"));
const Book_1 = require("../models/Book");
class Authors extends sequelize_1.Model {
}
exports.Authors = Authors;
Authors.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IsSystemUser: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    bookId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: Book_1.Books,
            key: "id",
        },
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'authors',
    timestamps: false
});
//# sourceMappingURL=Author.js.map