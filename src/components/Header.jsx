import React from 'react';

const Header = ({ textPlacement }) => {
  return (
    <div
      style={{ textAlign: textPlacement }}
      className='fast-fingers w-100 m-header '
    >
      Fast fingers
    </div>
  );
};

export default Header;
