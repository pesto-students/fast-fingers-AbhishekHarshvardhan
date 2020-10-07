import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import UserInfo from '../UserInfo';
import allWords from '../../data/dictionary.json';
import Footer from '../Footer';
import showTimeScore from '../utils/showTimeScore';

const DIFFICULTY_LEVEL = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

const GameStart = ({ getPlayerScores }) => {
  const history = useHistory();

  const [word, setWord] = useState('');
  const [wordSpan, setWordSpan] = useState([]);
  const [timerValue, setTimerValue] = useState(null);
  const [score, setScore] = useState(0);
  const playerHistory = getPlayerScores();
  const setNewWord = () => {
    if (!history.location.state) return;
    const word = allWords[getRandomIntInclusive(1, 1700)];
    const wordSpan = word.split('').map((char) => [char, 'white']);
    const timer = word.length / DIFFICULTY_LEVEL[history.location.state.level];
    DIFFICULTY_LEVEL[history.location.state.level] =
      DIFFICULTY_LEVEL[history.location.state.level] + 0.01;
    setWord(word);
    setWordSpan(wordSpan);
    setTimerValue(timer > 2 ? timer.toFixed(0) : 2);
  };

  useEffect(() => {
    if (!history.location.state) {
      history.replace('/');
    }
    setNewWord();
  }, []);

  const onInputChange = (e) => {
    let inputValue = e.currentTarget.value;
    wordSpan.forEach((item, index) => {
      if (inputValue[index] == null) {
        item[1] = '#ffffff';
      } else {
        item[1] = inputValue[index] === item[0] ? '#54ba18' : '#445298';
      }
    });
    if (inputValue === word && timerValue > 0) {
      e.currentTarget.value = '';
      setScore(score + timerValue);
      setNewWord();
    }
  };
  const wordTimer = () => {
    const wordTimeout = setTimeout(() => {
      if (timerValue) setTimerValue(timerValue - 1);
      if (timerValue === 0) stopGame();
    }, 1000);
    return () => clearTimeout(wordTimeout);
  };
  useEffect(wordTimer, [timerValue]);

  if (!history.location.state) {
    return null;
  }
  const stopGame = () => {
    const gameNo = playerHistory.length === 0 ? 1 : playerHistory.length + 1;
    localStorage.setItem(
      'userScore',
      JSON.stringify([
        ...playerHistory,
        {
          gameNo: gameNo,
          score: score,
        },
      ])
    );
    history.push({
      pathname: '/end',
      state: {
        gameNo,
        score,
        userName: history.location.state.userName,
        level: history.location.state.level,
      },
    });
  };
  return (
    <div>
      <div className='d-flex w-100'>
        <UserInfo
          userName={history.location.state.userName}
          level={history.location.state.level}
        />
        <Header textPlacement='right' />
      </div>

      <div className='d-flex w-100'>
        <div className='score'>
          <div className='Rectangle-10'>
            <div className='SCORE-BOARD'>Score board</div>
            {playerHistory.map(({ gameNo, score }) => (
              <div className='Game-1-114' key={gameNo}>
                GAME {gameNo} : {showTimeScore(score)}
              </div>
            ))}
            <div className='Game-1-114' key={playerHistory.length + 1}>
              GAME {playerHistory.length + 1} : {showTimeScore(score)}
            </div>
          </div>
        </div>
        <div className='game'>
          <div className='text-center'>
            <div className='timer-container'>
              <div className='timer'>{timerValue}</div>
              <img src='timer.svg' alt='...' className='Icon-timer' />
            </div>
            <h1 className='window text-center'>
              {wordSpan.map((item, index) => (
                <span style={{ color: item[1] }} key={index}>
                  {item[0]}
                </span>
              ))}
            </h1>
            <input
              onChange={onInputChange}
              className='Rectangle-9'
              type='text'
            />
          </div>
        </div>
      </div>
      <Footer isGameRunning={true} handleStop={stopGame} />
    </div>
  );
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default GameStart;
