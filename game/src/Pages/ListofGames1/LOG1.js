import React from 'react';
import styles from "./LOG1.css";
import wallpaper from "../../images/LOG1WALL.jpg";

function Header() {
  return (
    <header>
      <nav>
        <ul className="header-buttons">
          <li><button className="sign-in-button">Sign In</button></li>
          <li><button className="sign-up-button">Sign Up</button></li>
        </ul>
      </nav>
    </header>
  );
}

function GameButton({ title, imageUrl }) {
  return (
    <div className={styles.gameButton}>
      <button>
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
      </button>
    </div>
  );
}
function LOG1() {
  
  const games = [
    'Game 1',
    'Game 2',
    'Game 3',
    'Game 4',
    'Game 5',
    'Game 6',
    'Game 7',
    'Game 8',
    'Game 9',
  ];

 


  return (
    <div
      className={styles.imageContainer}
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
        
      }}
    >
      <Header />
      
      <div>
      <h2
          style={{
            textAlign: 'center',
            margin: '20px 0',
            fontSize: '3em',
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        >
          LIST OF GAMES
        </h2>
        <div className={styles.gameGrid}>
          {games.map((game, index) => (
            <GameButton key={index} title={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LOG1;

