import React from "react";
import styles from "./HomePage.module.css";
import wallpaper from "../../images/i.jpeg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { useState } from "react";

function HomePage() {


  // const [hoveredButton, setHoveredButton] = useState(null);

  // const handleMouseEnter = (buttonName) => {
  //   setHoveredButton(buttonName);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredButton(null);
  // };

  // const isButtonHovered = (buttonName) => {
  //   return hoveredButton === buttonName;
  // };

  return (
    <div
      className={styles.imageContainer}
      style={{
        backgroundImage: `url(${wallpaper})`,
        margin: '0',
        padding: '0',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

    <h2 className={styles.shinyTitle }>game zone</h2>
<div style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          marginTop: "-30px",
          // height: "100vh", // Adjust the height as needed
        }}>

<div className={styles.animatedButton} >
</div>
</div>
 
      {/* <div className={styles.buttonContainer}>
        <Button
          style={{
            color: "white",
            border: "1px solid white",
            marginRight: "30px",
            width: "200px",
            height: "100px",
            background: isButtonHovered("signup") ? "lightblue" : "transparent",
            boxShadow: isButtonHovered("signup") ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          }}
          startIcon={<PersonAddAltIcon />}
          onMouseEnter={() => handleMouseEnter("signup")}
          onMouseLeave={handleMouseLeave}
        >
          Sign Up
        </Button>
        <Button
          style={{
            color: "white",
            border: "1px solid white",
            marginRight: "30px",
            width: "200px",
            height: "100px",
            background: isButtonHovered("login") ? "lightblue" : "transparent",
            boxShadow: isButtonHovered("login") ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          }}
          startIcon={<LoginIcon />}
          onMouseEnter={() => handleMouseEnter("login")}
          onMouseLeave={handleMouseLeave}
        >
          Log In
        </Button>
        <Button
          style={{
            color: "white",
            border: "1px solid white",
            width: "200px",
            height: "100px",
            background: isButtonHovered("guest") ? "lightblue" : "transparent",
            boxShadow: isButtonHovered("guest") ? "0px 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          }}
          startIcon={<LoginIcon />}
          onMouseEnter={() => handleMouseEnter("guest")}
          onMouseLeave={handleMouseLeave}
        >
          Play as Guest
        </Button>
      </div> */}
    </div>
  );
}
export default HomePage;