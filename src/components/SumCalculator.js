import React, { useState } from 'react';

const SumCalculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      const prevValue = inputValue;
      const diff = newValue - prevValue;

      // If value increased → add newValue to sum
      if (diff > 0) {
        setSum((prevSum) => prevSum + newValue);
      }
      // If value decreased → subtract newValue from sum
      else if (diff < 0) {
        setSum((prevSum) => prevSum - newValue);
      }

      setInputValue(newValue);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        style={styles.input}
      />
      <p>{`Sum: ${sum}`}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '40px auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  input: {
    padding: '10px',
    width: '60%',
    fontSize: '16px',
  },
};

export default SumCalculator;
