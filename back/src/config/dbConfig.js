require("dotenv").config();

const mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.khcxe.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`
  );
};

module.exports = {
  dbConnection,
};
