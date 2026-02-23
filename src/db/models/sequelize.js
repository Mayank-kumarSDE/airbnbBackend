import Sequelize from 'sequelize';
import config from '../../config/config.js';  // ✅ Correct path (go up 2 levels)

// Initialize Sequelize connection
export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    logging: true,  // Set to console.log to see SQL queries
  }
);
 