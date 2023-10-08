const { connect, sync } = require("./models/connection");
const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");
exports.initDatabase = async function () {
  User.hasMany(Post);
  Post.belongsTo(User);

  Post.hasMany(Comment);
  Comment.belongsTo(Post);

  User.hasMany(Comment);
  Comment.belongsTo(User);
  await connect();
  await sync();
};
