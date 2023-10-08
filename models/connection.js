const { Sequelize } = require("sequelize");
const { DB_DIALECT, DB_HOST, DB_USER, DB_PASSWD, DB_NAME, UPDATE_DB} = process.env;
console.log(DB_USER);
const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWD,
  database: DB_NAME,
});
exports.sequelize = sequelize;

exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log("> Connected database");
  } catch (error) {
    console.error("> Failed to connect database");
    console.error(error);
  }
};

exports.sync = async function () {
  try {
    await sequelize.sync({ force: UPDATE_DB ==='yes' });
    console.log(">updated database");
  } catch (error) {
    console.error("> Failed to update database");
    console.error(error);
  }
};
