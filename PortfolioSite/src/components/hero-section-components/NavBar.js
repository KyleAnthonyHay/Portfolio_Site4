import "./NavBar.css";
import React from "react";
import { Link } from "react-scroll";


const AboutContainer = () => {
  function scrollToBottom ()  {
    scroll.scrollToBottom();
  };
  return (
    <div className="navbar">
      <div className="links">
        <img className="faceemoji-icon" alt="" src="/faceemoji@2x.png" />
        <div className="navbar-links">About</div>
        <div className="navbar-links">Work</div>
        <div className="navbar-links">Contact</div>
      </div>
      <div className="socialicons">
        <a href="https://www.linkedin.com/in/kyle-anthonyhay/" target="_blank">
          <img className="social-icon" alt="LinkedIn" src="/linkedin.svg" />
        </a>
        <a href="https://twitter.com/KyleAnthonyHay" target="_blank">
          <img className="social-icon" alt="" src="/x.svg" />
        </a>
        <a href="https://github.com/KyleAnthonyHay" target="_blank">
        <img className="social-icon" alt="" src="/github.svg" />
        </a>
        {/* <div className="line" /> */}
        {/* <img className="linkedin-icon" alt="" src="/sun.svg" />
        <div className="whitespace" /> */}
      </div>
    </div>
  );
};

export default AboutContainer;
