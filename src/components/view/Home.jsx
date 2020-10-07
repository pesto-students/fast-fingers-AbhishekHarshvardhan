import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../common/Input';
import Select from '../common/Select';

const Home = () => {
  const history = useHistory();

  const data = [
    { name: 'EASY', value: 'easy' },
    { name: 'MEDIUM', value: 'medium' },
    { name: 'HARD', value: 'hard' },
  ];

  const [userName, setUserName] = useState('');
  const [level, setLevel] = useState('easy');

  const onUserNameChange = (e) => {
    setUserName(e.currentTarget.value);
  };
  const onLevelChange = (e) => {
    setLevel(e.currentTarget.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/game',
      state: { userName, level },
    });
  };

  return (
    <div className='d-flex flex-center flex-col h-100'>
      <div className='brand-logo'></div>
      <div className='d-flex flex-col text-center'>
        <div className='fast-fingers'>Fast finger</div>
        <div className='the-ultimate-typing-game'>The ultimate typing game</div>
      </div>
      <form className='d-flex flex-col' onSubmit={onFormSubmit}>
        <Input
          required
          value={userName}
          onChange={onUserNameChange}
          type='text'
          placeholder='TYPE YOUR NAME'
        />
        <Select onChange={onLevelChange} value={level} data={data} />
        <button className='PLAY-AGAIN mt-1 w-100'>
          <img src='reload.svg' alt='... ' className='Icon-open-reload' />
          &nbsp;START GAME
        </button>
      </form>
    </div>
  );
};

export default Home;
