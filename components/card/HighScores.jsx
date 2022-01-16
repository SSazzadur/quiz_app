import { useQuiz } from "../../contexts/QuizContext";

import styles from "../../styles/Card.module.css";

const HighScores = () => {
  const { highScores, setShowHighScore, removeHighScore } = useQuiz();

  return (
    <div>
      <h2>High Scores</h2>
      {highScores.length > 0 ? (
        <ol>
          {highScores.map((score, index) => (
            <li key={index}>
              <p>
                {score.initial} - {score.score}
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No high scores yet!</p>
      )}
      <button className={styles.card_btn} onClick={() => setShowHighScore(false)}>
        Back
      </button>{" "}
      <button className={styles.card_btn} onClick={removeHighScore}>
        Clear HighScores
      </button>
    </div>
  );
};

export default HighScores;
