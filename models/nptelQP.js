const { Schema, model, models } = require("mongoose");

const nptelQPSchema = new Schema({
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

const nptelQP = models.nptelQP || model("nptelQP", nptelQPSchema);
module.exports = nptelQP;
