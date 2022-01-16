import { useQuiz } from "../../contexts/QuizContext";
import styles from "../../styles/Nav.module.css";

const Nav = () => {
  const { quizStarted, timeLeft } = useQuiz();

  return (
    <div className={styles.navigation}>
      <button className={styles.highscore_btn}>
        View Highscore <i className="fas fa-hand-point-left fa-lg"></i>
      </button>
      <div className={styles.time}>
        <span className={styles.time_text}>Time: </span>
        {quizStarted && <span className={styles.time_value}> {timeLeft}s</span>}
      </div>
    </div>
  );
};

export default Nav;
