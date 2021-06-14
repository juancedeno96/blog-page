import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Juan Cedeno </span>
          and I am a web developer
        </h1>
        <p className="h-sub-text">
        I am a web developer with knowledge in several technologies including ReactJs, Express, Nodejs, PostgresQL, HTML, CSS, SCSS, Bcryptjs, Massive, Redux and Axios among others.
        </p>
        <div className="icons">
          <a
            className="icon-holder"
            href="https://www.instagram.com/juancede25/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </a>
          <a
            className="icon-holder"
            href="https://github.com/juancedeno96"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-holder"
            href="https://www.linkedin.com/in/juan-cedeno/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
