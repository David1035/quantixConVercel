const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      min: 10,
    }
  },
  description: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
}

class Product extends Model {
  static associate(models) {
    // Aquí podrías agregar relaciones más adelante
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
}


