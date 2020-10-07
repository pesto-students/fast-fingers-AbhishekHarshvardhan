import React from 'react';

const Select = ({ data, onChange, ...rest }) => {
  return (
    <select onChange={onChange} {...rest}>
      {data.map((d) => (
        <option key={d.value} value={d.value}>
          {d.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
