import React from 'react';

const Input = ({ type, name, onChange, ...rest }) => {
  return (
    <input
      className='Rectangle-9'
      type={type}
      name={name}
      {...rest}
      onChange={onChange}
    />
  );
};

export default Input;
