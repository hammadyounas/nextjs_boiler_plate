import React, { useState } from 'react';
import Button from '../atoms/Button';

const SimpleForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-4 py-2 border rounded"
      />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default SimpleForm;
