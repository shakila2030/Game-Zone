import React from "react";
import styles from "./HomePage.module.css";
import astronautImg from '../../images/astronaut.jpg';
import earth from '../../images/earth.jpg';



function HomePage() {
  return (
    <div>
      <div id="adbox"></div>
      <div id="footer">
        <ul id="featured" className="wrapper clearfix">
          <li>
          <img src={astronautImg} alt="Astronaut" />
            <h3><a href="blog.html">Category 1</a></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi tortor. Phasellus commodo semper vehicula.
            </p>
          </li>
          <li>
            <img src={earth} alt="Img" height="204" width="220" />
            <h3><a href="blog.html">Category 2</a></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi tortor. Phasellus commodo semper vehicula.
            </p>
          </li>
          <li>
            <img src="images/spacecraft-small.jpg" alt="Img" height="204" width="220" />
            <h3><a href="blog.html">Category 3</a></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi tortor. Phasellus commodo semper vehicula.
            </p>
          </li>
          <li>
            <img src="images/space-shuttle.jpg" alt="Img" height="204" width="220" />
            <h3><a href="blog.html">Category 4</a></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi tortor. Phasellus commodo semper vehicula.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
