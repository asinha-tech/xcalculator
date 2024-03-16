/* eslint-disable no-eval */
import "./Calculator.css";
import React, { useState } from "react";

function App() {
  const [inputDisplay, setInputDisplay] = useState("");
  const [resultDisplay, setResultDisplay] = useState("");

  const handleInput = (value) => {
    setInputDisplay((prevInputDisplay) => prevInputDisplay + value);
  };

  const clearDisplay = () => {
    setInputDisplay("");
    setResultDisplay("");
  };

  const calculateResult = () => {
    try {
      const result = eval(inputDisplay);
      setResultDisplay(result.toString());
    } catch (error) {
      setResultDisplay("Error");
    }
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={inputDisplay} readOnly />
      <div className="dislay">{resultDisplay}</div>
      <div className="calculator">
        <div className="keys">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("+")}>+</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("")}></button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => handleInput("/")}>/</button>
          <button onClick={() => clearDisplay()}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './Calculator.css';

// const Calculator = () => {
//   const [currentNumber, setCurrentNumber] = useState('');
//   const [previousNumber, setPreviousNumber] = useState('');
//   const [operation, setOperation] = useState(null);

//   const clearDisplay = () => {
//     setCurrentNumber('');
//     setPreviousNumber('');
//     setOperation(null);
//   };

//   const addNumber = (number) => {
//     setCurrentNumber(currentNumber + number);
//   };

//   const handleOperation = (op) => {
//     if (currentNumber === '') return;
//     if (previousNumber !== '') calculateResult();
//     setOperation(op);
//     setPreviousNumber(currentNumber);
//     setCurrentNumber('');
//   };

//   const calculateResult = () => {
//     const prev = parseFloat(previousNumber);
//     const current = parseFloat(currentNumber);
//     if (isNaN(prev) || isNaN(current)) return;
//     let result;
//     switch (operation) {
//       case '+':
//         result = prev + current;
//         break;
//       case '-':
//         result = prev - current;
//         break;
//       case '*':
//         result = prev * current;
//         break;
//       case '/':
//         result = prev / current;
//         break;
//       default:
//         return;
//     }
//     setCurrentNumber(`${result}`);
//     setPreviousNumber('');
//     setOperation(null);
//   };

//   return (
//     <div className="calculator">
//       <h1 className="calculator-title">React Calculator</h1>
//         <div className="display-container">
//           <div className="input">{previousNumber} {operation} {currentNumber}</div>
//         <div className="output">{calculateResult}</div>
//         </div>
//         <div className="buttons">
//           <button onClick={() => addNumber(7)}>7</button>
//           <button onClick={() => addNumber(8)}>8</button>
//           <button onClick={() => addNumber(9)}>9</button>
//           <button onClick={() => handleOperation('+')}>+</button>
//           <button onClick={() => addNumber(4)}>4</button>
//           <button onClick={() => addNumber(5)}>5</button>
//           <button onClick={() => addNumber(6)}>6</button>
//           <button onClick={() => handleOperation('-')}>-</button>
//           <button onClick={() => addNumber(1)}>1</button>
//           <button onClick={() => addNumber(2)}>2</button>
//           <button onClick={() => addNumber(3)}>3</button>
//           <button onClick={() => handleOperation('*')}>*</button>
//           <button onClick={clearDisplay}>C</button>
//           <button onClick={() => addNumber(0)}>0</button>
//           <button onClick={calculateResult}>=</button>
//           <button onClick={() => handleOperation('/')}>/</button>
//         </div>
//       </div>
//   );
// };

// export default Calculator;


// // /* eslint-disable no-eval */
// // import React, { useState } from "react";

// // const Calculator = () => {
// //   const [input, setInput] = useState("");
// //   const [result, setResult] = useState("");

// //   const handleInputChange = (event) => {
// //     setInput(event.target.value);
// //   };

// //   const handleButtonClick = (buttonValue) => {
// //     if (buttonValue === "C") {
// //       setInput("");
// //       setResult("");
// //     } else if (buttonValue === "=") {
// //       try {
// //         const evaluatedResult = eval(input);
// //         setResult(evaluatedResult);
// //       } catch (error) {
// //         setResult("Error");
// //       }
// //     } else {
// //       setInput(input + buttonValue);
// //     }
// //   };

// //   return (
// //     <div className="calculator">
// //       <input type="text" value={input} onChange={handleInputChange} />
// //       <div className="buttons">
// //         <button onClick={() => handleButtonClick("7")}>7</button>
// //         <button onClick={() => handleButtonClick("8")}>8</button>
// //         <button onClick={() => handleButtonClick("9")}>9</button>
// //         <button onClick={() => handleButtonClick("+")}>+</button>
// //         <button onClick={() => handleButtonClick("4")}>4</button>
// //         <button onClick={() => handleButtonClick("5")}>5</button>
// //         <button onClick={() => handleButtonClick("6")}>6</button>
// //         <button onClick={() => handleButtonClick("-")}>-</button>
// //         <button onClick={() => handleButtonClick("1")}>1</button>
// //         <button onClick={() => handleButtonClick("2")}>2</button>
// //         <button onClick={() => handleButtonClick("3")}>3</button>
// //         <button onClick={() => handleButtonClick("*")}>*</button>
// //         <button onClick={() => handleButtonClick("C")}>C</button>
// //         <button onClick={() => handleButtonClick("0")}>0</button>
// //         <button onClick={() => handleButtonClick("=")}>=</button>
// //         <button onClick={() => handleButtonClick("/")}>/</button>
// //       </div>
// //       {result && <p>{result}</p>}
// //     </div>
// //   );
// // };
