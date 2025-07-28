import React, { useState } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [sum, setSum] = useState(0);

  const handleAddNumber = () => {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
      const updatedNumbers = [...numbers, num];
      setNumbers(updatedNumbers);
      const total = updatedNumbers.reduce((acc, val) => acc + val, 0);
      setSum(total);
      setCurrentInput('');
    }
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={currentInput}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && handleAddNumber()}
        placeholder="Enter a number"
        style={styles.input}
      />
      <button onClick={handleAddNumber} style={styles.button}>
        Add Number
      </button>

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
    marginRight: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default SumCalculator;
