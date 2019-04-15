import React from "react";

export default function QuizScore({ questions, givenAnswers }) {
  let correctAnswers = 0;
  givenAnswers.forEach(function({ questionId, answerId }) {
    const question = questions[questionId];

    const answer = question.answers.find(answer => answer.id === answerId);
    if (answer.isCorrect) {
      correctAnswers += 1;
    }
  });

  const noQ = givenAnswers.length;
  const perCentage = Math.round((correctAnswers * 100) / noQ);
  const circleFillIn = 820 - 820 * (correctAnswers / noQ);

  return (
<>
<div className="quiz-score-title">Bra jobbat! Ditt slutresultat:</div>
<svg className="circle" viewBox="0 0 350 350">
      <path
        className="score-path-br"
        d="M45,175a130,130 0 1,0 260,0a130,130 0 1,0 -260,0"
        stroke-width="30"
        stroke="#756A56"
        fill="transparent"
      />
      <path
        className="score-path"
        d="M175,45a130,130 0 0,1 0,260a130,130 0 0,1 0,-260"
        stroke-width="31"
        stroke="#F7C66A"
        stroke-opacity="1"
        fill="transparent"
        style={{ strokeDasharray: 820 , strokeDashoffset:820}}
      >
        <animate
          attributeType="CSS"
          attributeName="stroke-dashoffset"
          from="820"
          to={circleFillIn}
          begin="1s"
          dur="3"
          fill="freeze"
          calcMode="spline"
          keySplines="0.26 0.51 0.41 0.84"
        />
      </path>

      <text x="175" y="175" textAnchor="middle" fontSize="70px" dy="25px" dx="10px">
        {perCentage}%
      </text>
    </svg>
    </>
  );
}
