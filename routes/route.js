const express = require("express");
const router = express.Router();

const { createNptelQP, getAllNptelQPs } = require("../controller/nptel-notes");
const {
  createCodeChefBlogs,
  getAllUpsolving,
} = require("../controller/upsolving-codechef");
const { createFeedback } = require("../controller/feedback");

router.post("/create-nptel-notes", createNptelQP);
router.post("/create-codechef-blogs", createCodeChefBlogs);
router.get("/get-notes-qp", getAllNptelQPs);
router.get("/get-codechef-blogs", getAllUpsolving);
router.post("/add-feedback", createFeedback);

module.exports = router;
