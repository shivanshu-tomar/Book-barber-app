import express from "express";
import authRoute from "./routes/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
var app = express();

//Connect Databas
console.log(process.env.DB_CONNECT);
app.listen(3001, () => {
  console.log("Server is listning on port 3000");
});

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((e) => console.log(e));

//Route
app.use("/api/user", authRoute);
