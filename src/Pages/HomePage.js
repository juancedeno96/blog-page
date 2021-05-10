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
          <span> Juan Cedeno</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          maximus arcu. Phasellus et elit elit. Maecenas sed sodales dolor,
          placerat scelerisque eros. Proin non venenatis lacus. Aliquam blandit
          egestas arcu, in molestie justo bibendum ac. Maecenas cursus rutrum
          odio, ut iaculis sapien. Nam sit amet ultrices nibh, at congue magna.
          Fusce et pretium elit.
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
