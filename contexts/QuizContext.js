import { createContext, useContext, useEffect, useState } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [isScoreCard, setIsScoreCard] = useState(false);
  const [showHighScore, setShowHighScore] = useState(false);
  const [clickedOnOption, setClickedOnOption] = useState(false);
  const [timeLeft, setTimeLeft] = useState();
  const [startTimer, setStartTimer] = useState(null);
  const [timeEnded, setTimeEnded] = useState(false);

  const [totalScore, setTotalScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const jsonValue = localStorage.getItem("highScores");
    if (jsonValue !== null) {
      setHighScores(JSON.parse(jsonValue));
    } else localStorage.setItem("highScores", JSON.stringify(highScores));
  }, []);

  const addScore = score => {
    setTotalScore(prevTotalScore => prevTotalScore + score);
  };

  const addHighScore = initial => {
    if (highScores.length === 0) {
      setHighScores([{ initial, score: totalScore }]);

      localStorage.setItem("highScores", JSON.stringify([{ initial, score: totalScore }]));
    } else {
      highScores.map(hs => {
        if ((initial === hs.initial && totalScore > hs.score) || initial !== hs.initial) {
          const newHighScores = [...highScores, { initial, score: totalScore }];

          localStorage.setItem("highScores", JSON.stringify(newHighScores));
          setHighScores(newHighScores);
        }
      });
    }
  };
  const removeHighScore = () => {
    setHighScores([]);
    localStorage.removeItem("highScores");
  };

  // timer
  const timeHandler = time => {
    setTimeLeft(time);
    setStartTimer(
      setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000)
    );
  };
  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(startTimer);
      setTimeEnded(true);
    }
  }, [timeLeft]);
  const resetTime = () => {
    clearInterval(startTimer);
  };

  return (
    <QuizContext.Provider
      value={{
        quizStarted,
        setQuizStarted,
        timeLeft,
        resetTime,
        timeHandler,
        clickedOnOption,
        setClickedOnOption,
        totalScore,
        highScores,
        addScore,
        addHighScore,
        removeHighScore,
        isScoreCard,
        setIsScoreCard,
        setTotalScore,
        showHighScore,
        setShowHighScore,
        timeEnded,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
