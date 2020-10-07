import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../common/Input';
import Select from '../common/Select';

const Home = () => {
  const history = useHistory();

  const data = [
    { name: 'EASY', value: 'easy' },
    { name: 'MEDIUM', value: 'medium' },
    { name: 'HARD', value: 'Hard' },
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
    <div className='d-flex flex-center flex-col h-100 mn-100'>
      <div className='brand-logo'></div>
      <div className='d-flex flex-col text-center'>
        <div>Fast finger</div>
        <div>The ultimate typing game</div>
      </div>
      <form className='d-flex flex-col' onSubmit={onFormSubmit}>
        <Input value={userName} onChange={onUserNameChange} type='text' />
        <Select onChange={onLevelChange} value={level} data={data} />
        <button>START GAME</button>
      </form>
    </div>
  );
};

export default Home;
