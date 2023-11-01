"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
   
    static associate({ Messenger, User }) {
      // define association here
      // Conversation.hasMany(Messenger, { foreignKey: "idConversation" });
      // Conversation.belongsTo(User, { foreignKey: "user1Id" });
      // Conversation.belongsTo(User, { foreignKey: "user2Id" });
    }
  }
  Conversation.init(
    {
      user1Id: DataTypes.STRING,
      user2Id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Conversation",
    }
  );
  // Conversation.sync({ alter: true });
  return Conversation;
};
