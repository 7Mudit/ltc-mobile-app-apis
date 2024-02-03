// controllers/nptelQPController.js
const nptelQP = require("../models/nptelQP");
const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.createNptelQP = async (req, res) => {
  const { name } = req.body;
  const { mdxFile } = req.files;

  if (!name || !mdxFile) {
    return res.status(400).json({ message: "Name and MDX file are required" });
  }

  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(mdxFile.tempFilePath, {
      resource_type: "raw",
      folder: "nptelQP", // Optional: specify a folder in Cloudinary to organize files
    });

    // Create a new document in MongoDB with the name and Cloudinary URL
    const newNptelQP = new nptelQP({
      name,
      mdx: result.secure_url, // Save the Cloudinary URL
    });

    await newNptelQP.save();
    res.status(201).json(newNptelQP);
  } catch (error) {
    console.error("Error creating new document:", error);
    res.status(500).json({ message: "Failed to create new document" });
  }
};

exports.getAllNptelQPs = async (req, res) => {
  try {
    const nptelQPs = await nptelQP.find({});
    res.status(200).json(nptelQPs);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ message: "Failed to fetch documents" });
  }
};
