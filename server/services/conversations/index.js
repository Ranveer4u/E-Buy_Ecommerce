const { Conversation } = require("../../models");

const createConversation = async (data) => {
  try {
    const newConversation = await Conversation.create(data);
    return newConversation;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createConversation,
};
