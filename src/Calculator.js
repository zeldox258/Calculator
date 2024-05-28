import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css'; 

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleEvaluate = () => {
    try {
      setExpression(evaluate(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{expression}</div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === '=') {
                handleEvaluate();
              } else {
                handleButtonClick(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
