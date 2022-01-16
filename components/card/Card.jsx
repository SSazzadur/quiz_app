import { useState } from "react";
import styles from "../../styles/Card.module.css";
import Questions from "./Questions";

import questions from "../data/questions.json";
import { useQuiz } from "../../contexts/QuizContext";

const Card = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [message, setMessage] = useState("");

  const { quizStarted, setQuizStarted, timeHandler, clickedOnOption, setClickedOnOption } =
    useQuiz();

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      timeHandler(50);
    } else {
      // show score
    }

    setMessage("");
    setClickedOnOption(false);
  };

  const startQuizeHandler = () => {
    setQuizStarted(true);
    timeHandler(50);
  };

  return (
    <div className={styles.card}>
      {!quizStarted ? (
        <>
          <h2>Coding Quiz Challenge</h2>
          <p>Try to answer to following code-related questions within the time-limit.</p>
          <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
          <button className={styles.card_btn} onClick={startQuizeHandler}>
            Start Quiz
          </button>
        </>
      ) : (
        <>
          <Questions
            questions={questions}
            question={questions[questionIndex]}
            questionIndex={questionIndex}
            setQuestionIndex={setQuestionIndex}
            setMessage={setMessage}
            clickedOnOption={clickedOnOption}
            setClickedOnOption={setClickedOnOption}
          />

          {clickedOnOption && (
            <>
              <hr style={{ color: "#ccc" }} />
              <div className={styles.footer}>
                <p className={styles.message}>{message}</p>
                <button className={styles.card_btn} onClick={handleNext}>
                  {questionIndex !== questions.length - 1 ? "Next" : "Finish"}
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
