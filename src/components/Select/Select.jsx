import React from 'react';
import SelectComponent from './SelectComponent';

const options = [
  { value: 'mexico', label: 'Mexico' },
  { value: 'usa', label: 'USA' },
];

const MyComponent = () => {
  const handleSelectChange = (selectedValue) => {
    //console.log('Selected value:', selectedValue);
  };

  return (
    <div>
      <h1>Select</h1>
      <SelectComponent options={options} onChange={handleSelectChange} />
    </div>
  );
};

export default MyComponent;

