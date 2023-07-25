import React, { useState, useEffect } from 'react';
import './FallingBallGame.css';

export default function FallingBallGame() {
  const [leftPosition, setLeftPosition] = useState(0);
  const [blockPosition, setBlockPosition] = useState({ top: 0, holeLeft: 0 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveBlocks();
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      moveLeft();
    } else if (event.key === 'ArrowRight') {
      moveRight();
    }
  };

  const moveLeft = () => {
    if (leftPosition > 0) {
      setLeftPosition((prevPosition) => prevPosition - 2);
    }
  };

  const moveRight = () => {
    if (leftPosition < 380) {
      setLeftPosition((prevPosition) => prevPosition + 2);
    }
  };

  const moveBlocks = () => {
    setBlockPosition((prevPosition) => {
      const updatedTop = prevPosition.top - 2;

      if (updatedTop < -20) {
        const newTop = Math.floor(Math.random() * 100) + 400;
        const newHoleLeft = Math.floor(Math.random() * 360);
        setScore((prevScore) => prevScore + 1);
        return { top: newTop, holeLeft: newHoleLeft };
      }

      return { ...prevPosition, top: updatedTop };
    });
  };

  return (
    <div
      className="game-container"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div
        className="character"
        style={{ left: `${leftPosition}px` }}
      ></div>

      <div className="block" style={{ top: `${blockPosition.top}px` }}></div>
      <div
        className="hole"
        style={{ top: `${blockPosition.top}px`, left: `${blockPosition.holeLeft}px` }}
      ></div>

      <div className="score">Score: {score}</div>
    </div>
  );
}