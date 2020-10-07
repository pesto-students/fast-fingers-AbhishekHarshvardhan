import React from 'react';
const Info = ({ icon, value }) => {
  return (
    <div className='d-flex info'>
      <img
        src={`${icon + '.svg'}`}
        alt='...'
        className='Icon-material-person'
      />{' '}
      &nbsp;
      <div className='player_name_777 ml-2'>{value}</div>
    </div>
  );
};

export default Info;
