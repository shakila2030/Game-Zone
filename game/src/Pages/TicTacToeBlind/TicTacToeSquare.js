import React from 'react';

const TicTacToeSquare = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default TicTacToeSquare;
