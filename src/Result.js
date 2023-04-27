import React from 'react';
import './Result.css';

function Result(props) {
  return (
    <div className="Result">{props.message}</div>
  );
}

export default Result;
