import React from "react";
import QuizAnswerItem from './QuizAnswerItem';
import './Quiz.css';

export default function QuizAnswerList({answers, onAnswerClick }) {
  return (
    <ul className="quiz-answer-list">
      {answers.map(answer => (
        <QuizAnswerItem
          answer={answer}
          key={answer.id}
          onAnswerClick={(answer) => onAnswerClick(answer)}
        />
      ))}
    </ul>
  );
}

