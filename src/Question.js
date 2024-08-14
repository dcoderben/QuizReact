import React from 'react';
import './App.css';
const Question = ({ question, answers, correctAnswer, handleAnswer }) => {
  return (
    <div className='quiz-div'>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <input
              type="radio"
              name="answer"
              value={answer}
              onClick={() => handleAnswer(answer)}
            />
            <span>{answer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;