import { dbConfig } from "./index.js";  

const Config = {
  development: {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database || 'test_db',
    host: dbConfig.host || 'localhost',
    dialect: dbConfig.dialect,
  },
};

export default Config