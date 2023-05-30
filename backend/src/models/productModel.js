const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter product Name"],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: [true, "Please Enter Category Name"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter product Description"],
    },
    productImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
