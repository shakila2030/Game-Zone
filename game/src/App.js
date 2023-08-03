import React from "react";
import styles from './App.css';

import HomePage from "./Pages/HomePage/HomePage";
import TicTacToe from "./Pages/TicTacToe/TicTacToe";
import MemoryGame from "./Pages/MemoryGame/MemoryGame";


import JumpRun from "./Pages/JumpyRunGame/JumpRun";
import FallingBallGame from "./Pages/FallingBallGame/FallingBallGame";
import TicTacToeBlind from "./Pages/TicTacToeBlind/TicTacToeBlind";


function App() {
  return (
    // <div>
    //  {/* <HomePage/> */}
    //  <TicTacToe/>
    //  {/* <MemoryGame/> */}

    //  {/* <JumpRun/> */}
    //  {/* <FallingBallGame/> */}
   
    // </div>

    <div className={styles.container}>

       Tic Tac Toe game
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Indie+Flower');
        </style>
    

      <main className={styles.main}>
        <TicTacToeBlind />
      </main>
    </div>
  );
}

export default App;
