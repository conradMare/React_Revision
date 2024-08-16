import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg"
import img3 from "./assets/images/img3.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading">Random images:</h1>
    <div className="images">
      <img className="img1" src={img1} alt="random image 1" />
      <img className="img2" src={img2} alt="random image 2" />
      <img className="img3" src={img3} alt="random image 3" />
    </div>
  </div>,
  document.getElementById('root')
);