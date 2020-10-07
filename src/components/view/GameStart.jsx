import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import UserInfo from '../UserInfo';
import allWords from '../../data/dictionary.json';

const DIFFICULTY_LEVEL = {
  easy: 1,
  medium: 1.5,
  hard: 2,
};

const GameStart = () => {
  const history = useHistory();

  const [word, setWord] = useState('');
  const [timerValue, setTimerValue] = useState(null);
  const [score, setScore] = useState(0);

  const setNewWord = () => {
    const word = allWords[getRandomIntInclusive(1, 1700)];
    const timer = word.length / DIFFICULTY_LEVEL.easy;
    setWord(word);
    setTimerValue(timer);
  };

  useEffect(() => {
    if (!history.location.state) {
      history.replace('/');
    }
    setNewWord();
  }, []);

  const onInputChange = (e) => {
    if (e.currentTarget.value === word && timerValue > 0) {
      e.currentTarget.value = '';
      setScore(score + timerValue);
      setNewWord();
    }
  };

  setTimeout(() => {
    if (timerValue) setTimerValue(timerValue - 1);
    if (timerValue === 0)
      history.push({
        pathname: '/end',
        state: {
          score,
          userName: history.location.state.userName,
          level: history.location.state.level,
        },
      });
  }, 1000);

  if (!history.location.state) {
    return null;
  }

  return (
    <div>
      <div className='d-flex w-100'>
        <UserInfo
          userName={history.location.state.userName}
          level={history.location.state.level}
        />
        <Header />
      </div>

      <div className='d-flex w-100'>
        <div className='score'>
          <div className='Rectangle-10'>
            <div className='SCORE-BOARD'>Score board</div>
            <div className='Game-1-114'>GAME 1: {score}</div>
          </div>
        </div>
        <div className='game'>
          <div className='text-center'>
            <div className='timer'>{timerValue}</div>
            <h1 className='window text-center'>{word}</h1>
            <input
              onChange={onInputChange}
              className='Rectangle-9'
              type='text'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default GameStart;
