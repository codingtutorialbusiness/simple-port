import React from "react";
import "./Portfolio.css";

import port1 from "../img/1.jpg";
import port2 from "../img/2.jpg";
import port3 from "../img/3.jpg";
import port4 from "../img/4.jpg";
import port5 from "../img/5.jpg";
import port6 from "../img/6.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio-area">
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        <div className="single-portfolio">
          <img src={port1} alt="Portfolio 1" />
        </div>
        <div className="single-portfolio">
          <img src={port2} alt="Portfolio 2" />
        </div>
        <div className="single-portfolio">
          <img src={port3} alt="Portfolio 3" />
        </div>
        <div className="single-portfolio">
          <img src={port4} alt="Portfolio 4" />
        </div>
        <div className="single-portfolio">
          <img src={port5} alt="Portfolio 5" />
        </div>
        <div className="single-portfolio">
          <img src={port6} alt="Portfolio 6" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
