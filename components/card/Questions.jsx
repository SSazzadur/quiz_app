import { useEffect, useState } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "../../styles/Card.module.css";

const Questions = ({ question, setMessage, clickedOnOption, setClickedOnOption }) => {
  const { addScore, resetTime, timeEnded } = useQuiz();

  useEffect(() => {
    if (timeEnded) {
      setMessage("Time's up!");
      addScore(-0.5);
      setClickedOnOption(true);
    }
  }, [timeEnded]);

  const answerHandler = option => {
    if (option === question.answer) {
      addScore(1);
      setMessage("Correct!");
    } else {
      addScore(-0.5);
      setMessage("Incorrect!");
    }

    setClickedOnOption(true);
    resetTime();
  };

  return (
    <>
      <h2>{question.questionText}</h2>

      {question.options.map((option, index) => (
        <button
          key={index}
          className={`${styles.option_btn} ${clickedOnOption ? styles.option_clicked : ""}`}
          onClick={() => answerHandler(option)}
          disabled={clickedOnOption}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default Questions;
