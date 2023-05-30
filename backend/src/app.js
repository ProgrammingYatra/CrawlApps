const express = require("express");
const multer = require("multer");
const Category = require("./routes/categoryRoute");
const Product = require("./routes/productRoute");
const ErrorHandler = require("./middlewares/error");
const app = express();

app.use(express.json());
const upload = multer();
app.use(upload.any());

app.use(Category);
app.use(Product);

app.use(ErrorHandler);
module.exports = app;
