import React from 'react';
import './NumberInput.css';

function NumberInput(props) {
  return (
    <div className="NumberInput">
      <label htmlFor="guess">Guess lucky number</label>
      <input type="number" id="guess" min="1" max="100" value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default NumberInput;
