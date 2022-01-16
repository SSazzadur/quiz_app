import { createContext, useContext, useEffect, useState } from "react";

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [clickedOnOption, setClickedOnOption] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTimer, setStartTimer] = useState(null);

  const [totalScore, setTotalScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const jsonValue = localStorage.getItem("highScores");
    if (jsonValue !== null) setHighScores(JSON.parse(jsonValue));
    else localStorage.setItem("highScores", JSON.stringify(highScores));
  }, []);

  const addScore = score => {
    setTotalScore(prevTotalScore => prevTotalScore + score);
  };

  const addHighScore = ({ initial }) => {
    if (highScores.length === 0) {
      setHighScores([{ initial, score: totalScore }]);

      localStorage.setItem("highScores", JSON.stringify({ initial, score: totalScore }));
    } else {
      highScores.map(hm => {
        if (initial === hm.initial && totalScore > hm.score) {
          setHighScores(prevHMarks => [...prevHMarks, { initial, score: totalScore }]);
          const sortedHMarks = [...highScores].sort((a, b) => b.score - a.score);
          localStorage.setItem("highScores", JSON.stringify(sortedHMarks));
        }
      });
    }
  };

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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
