import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState(null);

  const clearDisplay = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation(null);
  };

  const addNumber = (number) => {
    setCurrentNumber(currentNumber + number);
  };

  const handleOperation = (op) => {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculateResult();
    setOperation(op);
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
  };

  const calculateResult = () => {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    let result;
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    setCurrentNumber(`${result}`);
    setPreviousNumber('');
    setOperation(null);
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">React Calculator</h1>
      <div className="calculator">
        <div className="display">
          {currentNumber} {operation} {previousNumber}
        </div>
        <div className="buttons">
          <button onClick={() => addNumber(7)}>7</button>
          <button onClick={() => addNumber(8)}>8</button>
          <button onClick={() => addNumber(9)}>9</button>
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={() => addNumber(4)}>4</button>
          <button onClick={() => addNumber(5)}>5</button>
          <button onClick={() => addNumber(6)}>6</button>
          <button onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => addNumber(1)}>1</button>
          <button onClick={() => addNumber(2)}>2</button>
          <button onClick={() => addNumber(3)}>3</button>
          <button onClick={() => handleOperation('*')}>*</button>
          <button onClick={clearDisplay}>C</button>
          <button onClick={() => addNumber(0)}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleOperation('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
