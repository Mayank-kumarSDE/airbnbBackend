import Sequelize from 'sequelize';
import Hotel from './hotel.js';
import { sequelize } from './sequelize.js';

// Initialize the model
const HotelModel = Hotel(sequelize, Sequelize.DataTypes);

// ✅ Correct export syntax
export { sequelize, HotelModel as Hotel };
export default sequelize;