const { Schema, model, models } = require("mongoose");

const feedbackSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = models.Feedback || model("Feedback", feedbackSchema);
module.exports = Feedback;
