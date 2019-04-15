import React from "react";
import "./Quiz.css";

export default function QuizSplashScreen({onQuizRequest}) {

    return (
    <div className="quiz-splash">
        <div className="quiz-splash-title">Välkommen till 2019 års</div>
        <div className="quiz-splash-ctm-title">Påsk-Quiz!</div>
        <div className="quiz-splash-text">Detta är ett quiz där man kan vinna makalösa priser! Eller okej kanske inte makalösa, men ett pris kan man vinna i alla fall.</div>
        <div className="quiz-splash-text">Reglerna är enkla, det enda man behöver göra för att vinna är att svara rätt på alla frågor i quizet. Men oroa dig inte, skulle något bli fel så går det bra att spela igen.</div>
        <div className="quiz-splash-text">Låt inte namnet på quizet lura dig, själva frågorna har inget med påsken (förutom en... typ).</div>
        <div className="quiz-splash-text">Notera att det går bra att använda sig utav google samt att fråga andra om hjälp. Eventuellt kan <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/search/common/">denna hemsida</a> komma till användning.</div>
        <div className="quiz-splash-text">För att starta quizet är det bara att klicka på knappen nedan.</div>
        <div className="quiz-splash-title">Lycka till!</div>
        <button
          className="quiz-start-button"
          onClick={onQuizRequest}
        >
          Starta Quiz
        </button>
        </div>);
}