import { useState } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "../../styles/Card.module.css";

const Questions = ({ question, setMessage, clickedOnOption, setClickedOnOption }) => {
  const { resetTime } = useQuiz();

  const answerHandler = option => {
    if (option === question.answer) setMessage("Correct!");
    else setMessage("Incorrect!");

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
