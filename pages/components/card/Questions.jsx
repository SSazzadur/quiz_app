import { useState } from "react";
import styles from "../../../styles/Card.module.css";

const Questions = ({
  questions,
  question,
  questionIndex,
  setQuestionIndex,
  setMessage,
  clicked,
  setClicked,
}) => {
  const [correctAnswer, setCorrectAnswer] = useState(false);

  const answerHandler = option => {
    if (option === question.answer) setMessage("Correct!");
    else setMessage("Incorrect!");

    setClicked(true);
  };

  return (
    <>
      <h2>{question.questionText}</h2>

      {question.options.map((option, index) => (
        <button
          key={index}
          className={`${styles.option_btn} ${clicked ? styles.option_clicked : ""}`}
          onClick={() => answerHandler(option)}
          disabled={clicked}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default Questions;
