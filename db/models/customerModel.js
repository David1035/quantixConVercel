const { USER_TABLE } = require('./userModel')
const { Model, DataTypes, Sequelize } = require("sequelize");

const CUSTOMER_TABLE = 'customer'; // nombre de la tabla en mi motor de bd

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {
  static associate(models) {
    //aquí van las asociaciones - o relaciones
    this.belongsTo(models.User, {as: 'user'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer', // nombre con el que vamos a trabar en service, cuando busquemos Models.Customer
      timestamps: false
    }
  }
}


module.exports = {
  CUSTOMER_TABLE,
  CustomerSchema,
  Customer
}
