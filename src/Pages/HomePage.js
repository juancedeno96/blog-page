import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
