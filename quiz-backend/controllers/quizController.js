const axios = require("axios");

const getQuizQuestions = async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz data" });
  }
};

const submitQuiz = (req, res) => {
  const { answers } = req.body;

  let score = 0;
  answers.forEach(q => {
    if (q.selectedOption === q.correctAnswer) {
      score+=10; 
    }
  });

  res.json({ message: "Quiz submitted successfully", score });
};

module.exports = { getQuizQuestions, submitQuiz };
