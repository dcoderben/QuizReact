import React, { useState } from 'react';
import Question from './Question';
import questions from './questions.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          answers={questions[currentQuestion].answers}
          correctAnswer={questions[currentQuestion].correctAnswer}
          handleAnswer={handleAnswer}
        />
      ) : (
        <h2>Quiz complete! Your score is {score}/{questions.length}</h2>
      )}
    </div>
  );
};

export default Quiz;