import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer';

import Header from '../Header';
import UserInfo from '../UserInfo';
import showTimeScore from '../utils/showTimeScore';

const GameEnd = ({ getPlayerScores }) => {
  const [isNewScore, setIsNewScore] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!history.location.state) {
      history.replace('/');
    }
  }, []);

  if (!history.location.state) {
    return null;
  }
  const { userName, gameNo, score, level } = history.location.state;
  const playerHistory = getPlayerScores();
  for (const { score: itemValue } of playerHistory) {
    if (score < itemValue && isNewScore) {
      setIsNewScore(false);
    }
  }
  return (
    <div>
      <div className='d-flex w-100'>
        <UserInfo userName={userName} level={level} />
        <Header textPlacement='right' />
      </div>

      <div className='d-flex w-100'>
        <div className='game'>
          <div className='text-center'>
            <div className='SCORE-GAME-5'>Score: Game {gameNo}</div>
            <div className='time text-center mt-1'>{showTimeScore(score)}</div>
            {isNewScore ? (
              <div className='New-High-Score text-center mt-1 '>
                New high score
              </div>
            ) : null}
            <div className='PLAY-AGAIN mt-1 w-100'>
              <Link to={{ pathname: '/game', state: { level, userName } }}>
                <img src='reload.svg' alt='... ' className='Icon-open-reload' />
                &nbsp;Play again
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameEnd;
