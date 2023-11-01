"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate({ Cart, Comment }) {
      // define association here
      Product.hasMany(Cart, {
        foreignKey: "idProduct",
        as: "cart",
      });
      Product.hasMany(Comment, {
        foreignKey: "idProduct",
        as: "comments",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      img1: DataTypes.TEXT,
      img2: DataTypes.TEXT,
      img3: DataTypes.TEXT,
      img4: DataTypes.TEXT,
      category: DataTypes.STRING,
      originalPrice: DataTypes.INTEGER,
      promotionPercent: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  // Product.sync({ alter: true });
  return Product;
};
