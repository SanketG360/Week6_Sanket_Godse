import { Sequelize } from "sequelize";
import credentials from "../common/credentials";

const sequelize = new Sequelize({
    database:credentials.postgres.DATABASE,
    username: credentials.postgres.USERNAME,
    password:credentials.postgres.PASSWORD,
    host: credentials.postgres.HOST,
    port: Number(credentials.postgres.PORT),
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

export default sequelize;
