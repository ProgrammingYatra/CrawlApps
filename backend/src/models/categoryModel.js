const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a Category Name"],
    unique: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
