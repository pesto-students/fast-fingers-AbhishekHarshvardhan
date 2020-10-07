import React from 'react';

const Select = ({ data, onChange, ...rest }) => {
  return (
    <select className='Rectangle-5' onChange={onChange} {...rest}>
      {data.map((d) => (
        <option key={d.value} value={d.value}>
          {d.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
