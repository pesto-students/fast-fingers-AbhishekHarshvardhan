import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import UserInfo from '../UserInfo';

const GameStart = () => {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <div className='d-flex w-100'>
        <UserInfo />
        <Header />
      </div>

      <div className='d-flex w-100'>
        <div className='score'>
          <div className='Rectangle-10'>
            <div className='SCORE-BOARD'>Score board</div>
            <div className='Game-1-114'>GAME 1: 112</div>
          </div>
        </div>
        <div className='game'>
          <div className='text-center'>
            <img src='timer.svg' alt='...' className='timer' />
            <h1 className='window text-center'>Welcome</h1>
            <form action=''>
              <input className='Rectangle-9' type='text' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStart;
