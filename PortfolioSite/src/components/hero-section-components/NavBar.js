import "./NavBar.css";
import React from "react";


const AboutContainer = () => {
  const handleLinkClick = (id) => {
    return () => {
      const anchor = document.getElementById(id);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
        console.log(`${id} anchor clicked`);
      }
    };
  };
  return (
    <div className="navbar">
      <div className="links">
        <img className="faceemoji-icon" alt="" src="/faceemoji@2x.png" />
        {/* <div className="navbar-links">About</div> */}
        <a href="https://medium.com/@haykyle917" className="navbar-links" target="_blank"><div>Blog</div></a>
        {/* <div className="navbar-links" onClick={handleLinkClick("work-anchor")}>Work</div> */}
        <a href="mailto:haykyle917@gmail.com" className="navbar-links"><div>Contact</div></a>

      </div>
      <div className="socialicons">
        <a href="https://www.linkedin.com/in/kyle-anthonyhay/" target="_blank"><img className="social-icon" alt="LinkedIn" src="/linkedin.svg" /></a>
        <a href="https://github.com/KyleAnthonyHay" target="_blank"><img className="social-icon" alt="" src="/github.svg" /></a>
        <a href="https://twitter.com/KyleAnthonyHay" target="_blank"><img className="social-icon" alt="" src="/x.svg" /></a>
        {/* <div className="line" /> */}
        {/* <img className="linkedin-icon" alt="" src="/sun.svg" />
        <div className="whitespace" /> */}
      </div>
    </div>
  );
};

export default AboutContainer;
