import React from 'react';
const Info = ({ icon, value }) => {
  return (
    <div className='d-flex'>
      <span>{icon}</span> &nbsp;
      <span>{value}</span>
    </div>
  );
};

export default Info;
