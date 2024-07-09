const express = require("express");
const path = require("path");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthCookie } = require("./middlewares/authentication");

mongoose
  .connect("mongodb://127.0.0.1:27017/blogme")
  .then((e) => console.log("MongoDB connected"));

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  // console.log(req.user)
  res.render("home", { user: req.user });
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
