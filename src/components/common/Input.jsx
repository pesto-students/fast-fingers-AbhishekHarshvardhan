import React from 'react';

const Input = ({ type, name, onChange, ...rest }) => {
  return <input type={type} name={name} {...rest} onChange={onChange} />;
};

export default Input;
