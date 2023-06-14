import React, { useState } from 'react';
import axios from 'axios';

const InputBox = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the /names URL to save the name
      await axios.post('/names', { name });
      setName('Submitted!'); // Clear the input field after submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputBox;
