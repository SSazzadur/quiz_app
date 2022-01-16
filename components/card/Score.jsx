import { useState } from "react";
import { useQuiz } from "../../contexts/QuizContext";

import styles from "../../styles/Card.module.css";

const Score = ({ setQuestionIndex }) => {
  const [initials, setInitials] = useState("");

  const { setIsScoreCard, setQuizStarted, totalScore, addHighScore, setTotalScore } = useQuiz();

  const submitHandler = e => {
    e.preventDefault();
    addHighScore(initials);

    setInitials("");
    setQuizStarted(false);
    setIsScoreCard(false);
    setTotalScore(0);
    setQuestionIndex(0);
  };

  return (
    <div>
      <h2>All Done!</h2>
      <p>Your final score is {totalScore}.</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="initials">Enter initials: </label>
        <input
          type="text"
          value={initials}
          onChange={e => setInitials(e.target.value)}
          className={styles.input}
          required
        />{" "}
        <button type="submit" className={styles.card_btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Score;
