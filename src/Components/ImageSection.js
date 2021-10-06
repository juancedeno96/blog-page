import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Juan Cedeno</span>
        </h4>
        <p className="about-text">
        I love finding solutions to complex problems, and building effective and efficient apps. When I'm not coding I love to play sports and jam out with a guitar.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name:</p>
            <p>Age:</p>
            <p>Nationality:</p>
            <p>Languages:</p>
          </div>
          <div className="right-section">
            <p> Juan Jose Cedeno</p>
            <p> 25</p>
            <p> Ecuador</p>
            <p> Spanish, English</p>
          </div>
        </div>
        <button className='btn'>
          <a style={{textDecoration: 'none'}} 
          href='https://docs.google.com/document/d/17EIUyZBOoWYeqGyCbUpOWYMilo-dQcf4Gtv5GueQVac/edit?usp=sharing' target='_blank' >View Resume</a></button>


      </div>
    </div>
  );
}

export default ImageSection;
