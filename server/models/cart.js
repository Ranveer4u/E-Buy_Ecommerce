"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
   
    static associate({ User, Product }) {
      // define association here
      Cart.belongsTo(User, { foreignKey: "idUser" });
      Cart.belongsTo(Product, { foreignKey: "idProduct" });
    }
  }
  Cart.init(
    {
      idUser: DataTypes.INTEGER,
      idProduct: DataTypes.INTEGER,
      nameProduct: DataTypes.STRING,
      priceProduct: DataTypes.STRING,
      count: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  // Cart.sync({ alter: true });
  return Cart;
};
