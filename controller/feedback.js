const Feedback = require("../models/feedback");
exports.createFeedback = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }

  try {
    // Create a new document in MongoDB with the name and Cloudinary URL
    const FeedbackDocument = new Feedback({
      message,
    });

    await FeedbackDocument.save();
    res.status(201).json(FeedbackDocument);
  } catch (error) {
    console.error("Error creating new document:", error);
    res.status(500).json({ message: "Failed to create new document" });
  }
};
