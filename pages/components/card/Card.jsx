import { useState } from "react";
import styles from "../../../styles/Card.module.css";
import Questions from "./Questions";

const Card = () => {
  const [questionCard, setQuestionCard] = useState(false);

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
        <Questions />
      )}
    </div>
  );
};

export default Card;
