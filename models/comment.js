const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

module.exports = sequelize.define("comments", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 1000],
    },
  },
  reations: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
