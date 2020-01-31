const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Quiz = require("../../models/quiz");
const Admin = require("../../models/admin");

// finding all Quiz

router.get("/", (req, res) => {
  Quiz.find({}, (err, quizzes) => {
    if (err) return res.json({ err });
    res.json({ quizzes, success: true });
  });
});

//  create a quiz

router.post("/create", (req, res) => {
  Quiz.create(req.body, (err, createdQuiz) => {
    if (err) return res.json({ err });
    res.json({ createdQuiz, success: true, message: "Quiz Created Succesfully"});
  });
});

//  find one Quiz

router.get("/:id", (req, res) => {
  Quiz.findById({ _id: req.params.id }, (err, quiz) => {
    if (err) return next({ err });
    res.json({ quiz, success: true });
  });
});

// edit Quiz

router.put("/update", (req, res) => {
  const quizId = req.body.quizId;
  Quiz.findById(quizId, (err, quiz) => {
    if (err) return next({ err });
    const questionSet = [...quiz.questionSet, req.body.question._id];
    const totalScore = quiz.totalScore + 1;

    Quiz.findByIdAndUpdate(
      quizId,
      { questionSet, totalScore },
      { new : true },
      (err, updatedQuiz) => {
        if (err) return next({err});
        // console.log(updatedQuiz);
        res.json({
          updatedQuiz,
          success: true,
          message: "Quiz updated Succesfully"
        });
      }
    );
  });
});

// delete Quiz

router.delete("/:id", (req, res) => {
  Quiz.findByIdAndDelete(req.params.id, (err, deletedQuiz) => {
    if (err) return res.json({ err });
    res.json({
      deletedQuiz,
      success: true,
      message: "Quiz Deleted Succesfully"
    });
  });
});

module.exports = router;