import { useState } from "react";
import styles from "../../styles/Card.module.css";
import Questions from "./Questions";

import questions from "../data/questions.json";

const Card = () => {
  const [questionCard, setQuestionCard] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState("");

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // show score
    }

    setMessage("");
    setClicked(false);
  };

  return (
    <div className={styles.card}>
      {!questionCard ? (
        <>
          <h2>Coding Quiz Challenge</h2>
          <p>Try to answer to following code-related questions within the time-limit.</p>
          <p>Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
          <button className={styles.card_btn} onClick={() => setQuestionCard(true)}>
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
            clicked={clicked}
            setClicked={setClicked}
          />

          {clicked && (
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
