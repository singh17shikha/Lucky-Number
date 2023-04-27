import React, { useState } from 'react';
import './App.css';
import NumberInput from './NumberInput';
import Button from './Button';
import Result from './Result';

function App() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const guessInt = parseInt(guess);
    if (guessInt === luckyNumber) {
      setMessage(`Congratulations! You guessed the right number in ${attempts} attempts.`);
    } else if (guessInt < luckyNumber) {
      setMessage(`You guessed a smaller number.`);
    } else {
      setMessage(`You guessed a bigger number.`);
    }
    setGuess('');
  };

  const handleReset = () => {
    setLuckyNumber(Math.floor(Math.random() * 100) + 1);
    setMessage('');
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div className="App">
      <h1>Lucky Number Guessing Game</h1>
      <NumberInput value={guess} onChange={handleChange} />
      <Button label="Guess" onClick={handleGuess} />
      <Button label="Reset" onClick={handleReset} />
      <Result message={message} />
    </div>
  );
}

export default App;

