// controllers/nptelQPController.js
const upsolveCodechef = require("../models/upsolveCodechef");
const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.createCodeChefBlogs = async (req, res) => {
  const { name } = req.body;
  const { mdxFile } = req.files;

  if (!name || !mdxFile) {
    return res.status(400).json({ message: "Name and MDX file are required" });
  }

  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(mdxFile.tempFilePath, {
      resource_type: "raw",
      folder: "codechef", // Optional: specify a folder in Cloudinary to organize files
    });

    // Create a new document in MongoDB with the name and Cloudinary URL
    const upsolveFile = new upsolveCodechef({
      name,
      mdx: result.secure_url, // Save the Cloudinary URL
    });

    await upsolveFile.save();
    res.status(201).json(upsolveFile);
  } catch (error) {
    console.error("Error creating new document:", error);
    res.status(500).json({ message: "Failed to create new document" });
  }
};

exports.getAllUpsolving = async (req, res) => {
  try {
    const nptelQPs = await upsolveCodechef.find({});
    res.status(200).json(nptelQPs);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ message: "Failed to fetch documents" });
  }
};
