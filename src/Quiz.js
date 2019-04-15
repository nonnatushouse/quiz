import React, { useReducer } from "react";
import QuizAnswerList from "./QuizAnswerList";
import QuizScore from "./QuizScore";
import getQuestions from "./Questions";
import "./Quiz.css";
import QuizSplashScreen from "./QuizSplashScreen";
import QuizAnswersBreakdown from "./QuizAnswersBreakdown";

const initialState = {
  gameState: "splash",
  givenAnswers: [],
  currentQuestion: null,
  questions: getQuestions(),
  questionOrder: []
};

export default function Quiz() {
  const [state, dispatch] = useReducer(reducer, initialState);
  if (state.gameState === "splash") {
    return (
      <QuizSplashScreen
        onQuizRequest={quizType =>
          dispatch({ type: "START_GAME", quizType: quizType })
        }
      />
    );
  } else if (state.gameState === "quiz") {
    const questionIndex = state.questionOrder.indexOf(state.currentQuestion);
    const progress = questionIndex / state.questionOrder.length;
    return (
      <div>
        <div className="quiz-score-container">
          <div className="quiz-title">Fråga #{questionIndex + 1}</div>
          <div className="quiz-progress-bar">
            <div
              className="quiz-current-progress"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
        <div className="quiz-question-container">
          <div className="quiz-question">
            {state.questions[state.currentQuestion].question}
          </div>

          <QuizAnswerList
            answers={state.questions[state.currentQuestion].answers}
            onAnswerClick={answer =>
              dispatch({ type: "ANSWER_CLICK", answer: answer })
            }
          />
        </div>
      </div>
    );
  } else if (state.gameState === "final-scores") {
    let correctAnswers = 0;
    state.givenAnswers.forEach(function({ questionId, answerId }) {
      const question = state.questions[questionId];

      const answer = question.answers.find(answer => answer.id === answerId);
      if (answer.isCorrect) {
        correctAnswers += 1;
      }
    });

    return correctAnswers === state.givenAnswers.length ? (
      <div className="quiz-over-container">
        <QuizScore
          questions={state.questions}
          givenAnswers={state.givenAnswers}
          questionOrder={state.questionOrder}
        />
        <div className="quiz-score-info">
          Grattis! Du fick alla rätt! Alltså har du klarat av quizet, och nu är det dags för din belöning!
        </div>
        <div className="quiz-score-info">
          För att få belöningen måste du meddela den hemliga koden till pappa.
        </div>
        <div className="quiz-score-info"><span style={{backgroundColor:"#F7C66A"}}>Hemlig kod: "Ägg, ägg, mera ägg, ät så får du skägg!"</span></div>
        <div className="quiz-score-info">OBS! Koden måste framföras som en SÅNG, annars blir det inget pris.</div>
        <div className="quiz-score-info">För hjälp med att hitta melodin kan man lyssna på originalet <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9ja4xqW8LOg">här</a></div>
        <div className="quiz-score-info">Scrolla ner för att se dina svar</div>
        <QuizAnswersBreakdown
          questions={state.questions}
          givenAnswers={state.givenAnswers}
          questionOrder={state.questionOrder}
        />
        <button
          className="quiz-reset-button"
          type="button"
          onClick={() => dispatch({ type: "PLAY_AGAIN" })}
        >
          Spela igen
        </button>

      </div>
    ) : (
      <div className="quiz-over-container">
      <QuizScore
        questions={state.questions}
        givenAnswers={state.givenAnswers}
        questionOrder={state.questionOrder}
      />
              <div className="quiz-score-info">Tyvärr räckte det inte hela vägen fram. Men klicka på knappen nedan så får du försöka igen!</div>
      <div>
        <button
          className="quiz-reset-button"
          type="button"
          onClick={() => dispatch({ type: "PLAY_AGAIN" })}
        >
          Spela igen
        </button>
      </div>
      </div>
    );
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      const questionOrder = Object.keys(state.questions);

      return {
        ...state,
        gameState: "quiz",
        questionOrder,
        currentQuestion: questionOrder[0],
        givenAnswers: []
      };
    case "ANSWER_CLICK":
      const isFinalQuestion =
        state.currentQuestion ===
        state.questionOrder[state.questionOrder.length - 1];

      const gameState = isFinalQuestion ? "final-scores" : "quiz";
      const givenAnswers = [
        ...state.givenAnswers,
        { questionId: state.currentQuestion, answerId: action.answer.id }
      ];
      const currentQuestionPos = state.questionOrder.indexOf(
        state.currentQuestion
      );
      const currentQuestion = isFinalQuestion
        ? null
        : state.questionOrder[currentQuestionPos + 1];

      return {
        ...state,
        gameState,
        currentQuestion,
        givenAnswers
      };
    case "PLAY_AGAIN":
      return {
        ...state,
        gameState: "splash"
      };
    default:
      return state;
  }
}
