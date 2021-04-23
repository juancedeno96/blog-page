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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          maximus arcu. Phasellus et elit elit. Maecenas sed sodales dolor,
          placerat scelerisque eros.
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
        <button className='btn'>Download CV</button>

      </div>
    </div>
  );
}

export default ImageSection;
