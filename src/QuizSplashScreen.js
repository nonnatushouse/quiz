import React from "react";
import "./Quiz.css";

export default function QuizSplashScreen({onQuizRequest}) {

    return (
    <div className="quiz-splash">
        <div className="quiz-splash-title">Välkommen till 2019 års</div>
        <div className="quiz-splash-ctm-title">Påsk-Quiz!</div>
        <div className="quiz-splash-text">Detta är ett quiz där man kan vinna makalösa priser! Men för att vinna måstes man få alla rätt. Men oroa dig inte, det går bra att göra quizet flera gånger, om man inte skulle få alla rätt första gången. Det är bara att ladda om sidan, eller att trycka på "Spela igen"-knappen när quizet är slut.</div>
        <div className="quiz-splash-text">Låt inte namnet lura dig, själva frågorna har inget med påsken att göra utan är väldigt varierade.</div>
        <div className="quiz-splash-text">Notera att det går bra att använda sig utav google samt att fråga andra om hjälp. Eventuellt kan <a target="_blank" href="https://www.imdb.com/search/common/">denna hemsida</a> vara till hjälp.</div>
        <div className="quiz-splash-title">Lycka till!</div>
        <button
          className="quiz-start-button"
          onClick={onQuizRequest}
        >
          Starta Quiz
        </button>
        </div>);
}