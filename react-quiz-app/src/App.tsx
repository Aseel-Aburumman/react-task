import reactLogo from "./assets/react.svg";
import "./App.css";

import React, { useState } from "react";

interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const quizQuestions: Question[] = [
  {
    questionText: "What is Aseel favorite color?",
    options: ["black", "yellow", "baby pink", "blue"],
    correctAnswer: "baby pink",
  },
  {
    questionText: "Which genre Aseel prefer to play?",
    options: ["Action ", "Shooter ", "Survival ", "Role-playing"],
    correctAnswer: "Role-playing",
  },
  {
    questionText: "Which month Aseel was born?",
    options: ["Jan", "Oct", "Sep", "March"],
    correctAnswer: "Mercury",
  },
  {
    questionText: "Which language is used for web development?",
    options: ["Python", "HTML", "Java", "C++"],
    correctAnswer: "HTML",
  },
];


const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerOptionClick = (selectedOption: string) => {
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
};

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        {showScore ? (
          <div className="text-center">
            <h3>
              Your Score: {score}/{quizQuestions.length}
            </h3>
          </div>
        ) : (
          <div>
            <h3>
              Question {currentQuestion + 1}/{quizQuestions.length}
            </h3>
            <p>{quizQuestions[currentQuestion].questionText}</p>

            <div>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="btn btn-dark btn-block mb-2"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
