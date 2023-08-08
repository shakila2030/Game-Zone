import React from "react";
import './App.css';

import HomePage from "./Pages/HomePage/HomePage";
import TicTacToe from "./Pages/TicTacToe/TicTacToe";
import MemoryGame from "./Pages/MemoryGame/MemoryGame";

import JumpRun from "./Pages/JumpyRunGame/JumpRun";
import FallingBallGame from "./Pages/FallingBallGame/FallingBallGame";

function App() {
  return (
    <div>
     {/* <HomePage/> */}
     {/* <TicTacToe/> */}
     {/* <MemoryGame/> */}

     {/* <JumpRun/> */}
     <FallingBallGame/>
     {/* <JumpRun/> */}
    </div>
  );
}

export default App;
