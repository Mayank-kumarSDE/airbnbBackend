import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      // Define associations here (we'll add this later)
      // Example: Hotel.hasMany(models.Room, { foreignKey: 'hotelId' });
    }
  }

  Hotel.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true,
    },
    rating_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Hotel',
    tableName: 'hotels',
    timestamps: false,  // We're using custom created_at/updated_at
    underscored: true,  // Use snake_case column names
  });

  return Hotel;
};