import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [sum, setSum] = useState(0);

  // Async sum calculation using useEffect
  useEffect(() => {
    const calculateSum = async () => {
      const total = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(numbers.reduce((acc, val) => acc + val, 0));
        }, 0); // Minimal delay to simulate async without UI blocking
      });
      setSum(total);
    };

    if (numbers.length > 0) {
      calculateSum();
    } else {
      setSum(0);
    }
  }, [numbers]);

  const handleAddNumber = () => {
    const num = parseInt(currentInput);
    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
      setCurrentInput('');
    }
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={currentInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
        style={styles.input}
      />
      <button onClick={handleAddNumber} style={styles.button}>
        Add Number
      </button>

      <h3>Numbers: {numbers.join(', ')}</h3>
      <h3>Total Sum: {sum}</h3>
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
