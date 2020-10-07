import React from 'react';
import Info from './Info';
const UserInfo = ({ userName, level }) => {
  return (
    <div className='user-info d-flex flex-col'>
      <div>
        <Info icon='user' value={userName} />
      </div>
      <div>
        <Info icon='game' value={'LEVEL : ' + level} />
      </div>
    </div>
  );
};

export default UserInfo;
