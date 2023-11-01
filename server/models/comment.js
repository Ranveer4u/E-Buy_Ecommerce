"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate({ User, Product }) {
      // define association here
      Comment.belongsTo(User, {
        foreignKey: "idUser",
      });
      Comment.belongsTo(Product, {
        foreignKey: "idProduct",
      });
    }
  }
  Comment.init(
    {
      idProduct: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      fullname: DataTypes.STRING,
      content: DataTypes.STRING,
      star1: DataTypes.STRING,
      star2: DataTypes.STRING,
      star3: DataTypes.STRING,
      star4: DataTypes.STRING,
      star5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  // Comment.sync({ alter: true });
  return Comment;
};
