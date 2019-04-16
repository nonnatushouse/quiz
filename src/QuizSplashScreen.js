import React from "react";
import "./Quiz.css";

export default function QuizSplashScreen({ onQuizRequest }) {
  return (
    <div className="quiz-splash">
      <div className="quiz-splash-title">Välkommen till 2019 års</div>
      <div className="quiz-splash-ctm-title">Påsk-Quiz!</div>
      <div className="quiz-splash-text">
        Reglerna är enkla, det enda man behöver göra för att vinna är att svara
        rätt på alla frågor i quizet. Men oroa dig inte, skulle något bli fel så
        går det bra att spela igen. Om man svarar rätt på alla frågor så finns
        ett pris att hämta i slutändan. Men då måste som sagt alla frågor
        besvaras korrekt först.
      </div>
      <div className="quiz-splash-text">
        Som du kommer märka finns inget övergripande tema på quizet, men
        frågorna centreras kring ett fåtal ämnen. Det är inte tänk att man
        nödvändigtvis ska kunna alla frågor utantill, utan man kan behöva
        använda sig utav hjälpmedel, och det går bra.
      </div>
      <div className="quiz-splash-text">
        Det går alltså bra att använda sig utav google samt att fråga andra
        om hjälp. Eventuellt kan{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.imdb.com/search/common/"
        >
          denna hemsida
        </a>{" "}
        komma till användning.
      </div>
      <div className="quiz-splash-text">
        För att starta quizet är det bara att klicka på knappen nedan.
      </div>
      <div className="quiz-splash-title">Lycka till!</div>
      <button className="quiz-start-button" onClick={onQuizRequest}>
        Starta Quiz
      </button>
    </div>
  );
}
