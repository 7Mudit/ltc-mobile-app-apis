const { Schema, model, models } = require("mongoose");

const upsolveCodechefSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mdx: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const upsolveCodechef =
  models.upsolveCodechef || model("upsolveCodechef", upsolveCodechefSchema);
module.exports = upsolveCodechef;
