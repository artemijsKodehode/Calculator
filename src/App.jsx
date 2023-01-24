import './App.css'
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    setInput(input + e.target.value);
  }

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult('Error');
    }
  }

  const clear = () => {
    setInput('');
    setResult(0);
  }

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="+" onClick={handleClick}>+</button>
      <br />
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick}>-</button>
      <br />
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="*" onClick={handleClick}>*</button>
      <br />
      <button value="c" onClick={clear}>C</button>
      <button value="0" onClick={handleClick}>0</button>
      <button value="=" onClick={calculate}>=</button>
      <button value="/" onClick={handleClick}>/</button>
      <br />
      <input type="text" value={result} readOnly />
    </div>
  );
}

export default Calculator;
