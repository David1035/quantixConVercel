'use strict';

const { PRODUCT_TABLE, ProductSchema } = require('./../models/productModel')
const { CATEGORY_TABLE, CategorySchema } = require('./../models/categoryModel');
const { ORDER_TABLE, OrderSchema } = require('./../models/orderModel');
const { ORDER_PRODUCT_TABLE, OrderProductSchema } = require('./../models/order-product');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);



  }
};
