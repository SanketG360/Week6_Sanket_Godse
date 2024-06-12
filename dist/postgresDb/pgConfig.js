"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const credentials_1 = __importDefault(require("../common/credentials"));
const sequelize = new sequelize_1.Sequelize({
    database: credentials_1.default.postgres.DATABASE,
    username: credentials_1.default.postgres.USERNAME,
    password: credentials_1.default.postgres.PASSWORD,
    host: credentials_1.default.postgres.HOST,
    port: Number(credentials_1.default.postgres.PORT),
    dialect: 'postgres',
});
sequelize.authenticate()
    .then(() => {
    console.log('Database connection established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
sequelize.sync()
    .then(() => {
    console.log('Models synchronized with the database.');
})
    .catch((err) => {
    console.error('Unable to synchronize models with the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map