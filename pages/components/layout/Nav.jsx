import styles from "../../../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <button className={styles.highscore_btn}>
        View Highscore <i className="fas fa-hand-point-left fa-lg"></i>
      </button>
      <div className={styles.time}>
        <span className={styles.time_text}>Time: </span>
        <span className={styles.time_value}> __s</span>
      </div>
    </div>
  );
};

export default Nav;
