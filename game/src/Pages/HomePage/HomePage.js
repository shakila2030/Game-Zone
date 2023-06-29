import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <header>
        <div className={styles.wrapperclearfix}>
          <div id="logo">
            <a href="index.html">
              <img src="images/logo.png" alt="LOGO" />
            </a>
          </div>
          {/* <ul id="navigation">
            <li className="selected">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="gallery.html">Gallery</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul> */}
        </div>
      </header>
      <div id="contents">
        <div id="adbox">
          <div className={styles.wrapperclearfix}>
            <div className="info">
              <h1>Sonsectetur adipiscing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vitae quam et tortor consequat porta. Sed faucibus, ligula quis
                mollis lobortis, diam felis tempus enim, a vestibulum eros quam
                ac magna. Vestibulum varius porttitor elit, et vulputate odio
                egestas sit amet.
              </p>
            </div>
          </div>
          <div className={styles.highlight}>
            <h2>
              Lorem ipsum dolor sit amet - <i>consectetur adipiscing elit.</i>
            </h2>
          </div>
        </div>
        <div className={styles.bodyclearfix}>
          <div className={styles.clickhere}>
            <h1>Lorem Ipsum Dolor!</h1>
            <a href="index.html" className={styles.btn2}>
              Click Here!
            </a>
          </div>
          <p style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            mi tortor. Phasellus commodo semper vehicula. Praesent aliquam
            semper massa et scelerisque. Suspendisse dapibus interdum diam, non
            varius nisl laoreet at. Pellentesque imperdiet molestie
            sollicitudin. Sed nec magna nibh, sed interdum nisi. Mauris vel
            pretium nibh. Morbi congue velit quis eros imperdiet ac el eifend
            elit condimentum. Nulla vestibulum dictum tellus quis iaculis. Duis
            a diam vitae sem tristique vestibulum. Praesent dapibus, tortor nec
            hendrerit pulvinar, lectus tortor viverra ante,
          </p>
        </div>
      </div>
      <footer>
        <div className={styles.wrapperclearfix}>
          <ul id="featured" className={styles.clearfix}>
            <li>
              <img
                src="images/astronaut.jpg"
                alt="Img"
                height="204"
                width="220"
              />
              <h3>
                <a href="blog.html">Category 1</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nec mi tortor. Phasellus commodo semper vehicula.
              </p>
            </li>
            <li>
              <img src="images/earth.jpg" alt="Img" height="204" width="220" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
