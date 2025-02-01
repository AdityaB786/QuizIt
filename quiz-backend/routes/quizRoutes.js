const express = require("express");
const router = express.Router();
const { getQuizQuestions, submitQuiz } = require("../controllers/quizController.js");

router.get("/", getQuizQuestions);
router.post("/submit", submitQuiz);

module.exports = router;
