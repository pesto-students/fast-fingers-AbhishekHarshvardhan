import React from 'react';
import Info from './Info';
const UserInfo = () => {
  return (
    <div className='user-info d-flex flex-col'>
      <div>
        <Info icon='user' value='player name' />
      </div>
      <div>
        <Info icon='game' value='level' />
      </div>
    </div>
  );
};

export default UserInfo;
