import React from "react";
import classNames from "classnames";
import "./Quiz.css";

export default function QuizAnswersBreakdown({
  questions,
  givenAnswers,
  questionOrder
}) {
  const rows = questionOrder.map(questionId => {
    const question = questions[questionId];
    const givenAnswer = givenAnswers.find(a => a.questionId === questionId);
    const answers = question.answers.map(answer => {
      const cls = classNames("breakdown-answer", {
        "correct-answer": answer.isCorrect,
        "given-answer": givenAnswer.answerId === answer.id
      });
      const isCorrect = answer.isCorrect ? " - ✓" : "";
      return (
        <div className={cls} key={answer.id}>
          {answer.answer} {isCorrect}
        </div>
      );
    });

    const cls = classNames("breakdown-segment", {
      "final-segment": questionId === questionOrder[questionOrder.length - 1]
    });
    return (
      <><div className={cls}>
        <div key={questionId} className="breakdown-question">
          {questionOrder.indexOf(questionId) + 1}: {question.question}
        </div>
        <div className="breakdown-answers"> {answers} </div>
        </div>
      </>
    );
  });

  return (<><div className="quiz-breakdown-text">For each question the correct answer is marked with "✓", and your given answer is marked with a <span style={{backgroundColor:"#F7C66A"}}>yellow background</span>. </div>
  <div className="quiz-breakdown">{rows}</div></>);
}
