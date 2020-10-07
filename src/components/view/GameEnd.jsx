import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Header from '../Header';
import UserInfo from '../UserInfo';

const GameEnd = ({ score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!history.location.state) {
      history.replace('/');
    }
  }, []);

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
        <div className='game'>
          <div className='text-center'>
            <div className='SCORE-GAME-5'>Score: Game 1</div>
            <div className='time text-center mt-1'>
              {history.location.state.score}
            </div>
            <div className='New-High-Score text-center mt-1 '>
              New high score
            </div>
            <div className='PLAY-AGAIN mt-1 w-100'>
              <Link to='/game'>
                <img src='reload.svg' alt='... ' className='Icon-open-reload' />
                &nbsp;Play again
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameEnd;
