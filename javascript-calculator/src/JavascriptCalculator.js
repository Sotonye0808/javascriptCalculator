// JavascriptCalculator.js
import React, { useState } from 'react';
import './App.css';

const JavascriptCalculator = () => {
  const [expression, setExpression] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleKeyPress = (e) => {
    const key = e.target.innerHTML;
    if (key === 'AC') {
      setExpression('');
    } else if (key === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else {
      setExpression((prev) => prev + key);
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`calculator ${isDarkMode ? 'dark-mode' : ''}`}>
      <div id="display" className="text-right p-2">{expression || '0'}</div>
      <div className="d-flex flex-wrap wrapped">
        {buttons.map((button) => (
          <button
            key={button.id}
            id={button.id}
            className={`btn ${button.class}`}
            onClick={handleKeyPress}
          >
            {button.label}
          </button>
        ))}
        <button
          className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
          onClick={toggleMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

const buttons = [
  { id: 'clear', label: 'AC', class: 'btn-secondary' },
  { id: 'divide', label: '/', class: 'btn-info' },
  { id: 'multiply', label: '*', class: 'btn-info' },
  { id: 'seven', label: '7', class: 'btn-light' },
  { id: 'eight', label: '8', class: 'btn-light' },
  { id: 'nine', label: '9', class: 'btn-light' },
  { id: 'four', label: '4', class: 'btn-light' },
  { id: 'five', label: '5', class: 'btn-light' },
  { id: 'six', label: '6', class: 'btn-light' },
  { id: 'three', label: '3', class: 'btn-light' },
  { id: 'two', label: '2', class: 'btn-light' },
  { id: 'one', label: '1', class: 'btn-light' },
  { id: 'zero', label: '0', class: 'btn-light' },
  { id: 'decimal', label: '.', class: 'btn-light' },
  { id: 'equals', label: '=', class: 'btn-primary' },
  { id: 'add', label: '+', class: 'btn-info' },
  { id: 'subtract', label: '-', class: 'btn-info' }, 
];

export default JavascriptCalculator;
