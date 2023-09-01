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
        // width: "100%", 
        // height: "100%",
        backgroundImage: `url(${wallpaper})`,
        marginTop: '0',
         padding: '0 0 800px 0',
        backgroundPosition: 'top center', 
        backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
    
      }}
    >
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1>game zone</h1>
<div style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          marginTop: "-30px",
          // height: "100vh", // Adjust the height as needed
        }}>
<div className={styles.animatedButton} >
</div></div>
 
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