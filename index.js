require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

const userRouter = require("./routers/user");
const postRouter = require("./routers/post");
const commentRouter = require("./routers/comment");

app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);

app.listen(process.env.SERVER_PORT, function () {
  console.log("listen on port: " + process.env.SERVER_PORT);
});
