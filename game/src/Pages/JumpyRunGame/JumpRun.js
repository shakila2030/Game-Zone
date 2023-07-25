// import React, { useEffect, useState } from "react";
// import './JumpRun.css';

// const Background = ({ game, type }) => {
//   if (typeof type === 'undefined') {
//     type = 'grass';
//   }

//   useEffect(() => {
//     game.stage.backgroundColor = '#d0f4f7';
//     const cloudsSecond = game.add.tileSprite(0, game.height - 320, 967, 177, 'bg_clouds_2');
//     cloudsSecond.autoScroll(-20, 0);

//     const cloudsFirst = game.add.tileSprite(-200, game.height - 250, 967, 177, 'bg_clouds_1');
//     cloudsFirst.autoScroll(-40, 0);

//     const front = game.add.tileSprite(0, game.height - 264, 967, 264, `bg_${type}`);
//   }, [game, type]);

//   const scroll = (x) => {
//     front.autoScroll(x, 0);
//   };

//   const scrollClouds = (x1, x2) => {
//     cloudsFirst.autoScroll(x1, 0);
//     cloudsSecond.autoScroll(x2, 0);
//   };

//   const change = (newType) => {
//     front.loadTexture(`bg_${newType}`);
//     // SO WRONG...
//     setTimeout(() => {
//       front.loadTexture(`bg_${newType}`);
//     }, 25);
//   };

//   return null;
// };

// const Enemies = ({ game }) => {
//   // ... (remaining code for the Enemies component)
//   return null;
// };

// const Enemy = ({ game, type }) => {
//   // ... (remaining code for the Enemy component)
//   return null;
// };

// const Ground = ({ game, type }) => {
//   // ... (remaining code for the Ground component)
//   return null;
// };

// const Board = ({ game, config }) => {
//   // ... (remaining code for the Board component)
//   return null;
// };

// const Player = ({ game, x, y, key, type, sound }) => {
//   // ... (remaining code for the Player component)
//   return null;
// };


// const JumpRun = () => {
  
//   return <div id="game_cont"></div>;
// };

// export default JumpRun;
