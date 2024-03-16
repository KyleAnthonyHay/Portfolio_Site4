import React from 'react';
import './AboutSection.css'; // Importing the CSS file


const AboutSection = () => {
  const aboutText = "K"  

  
  return (
    <div className="about-container" id="about-anchor">
        <div className="text-container">
            <h3 className='about-container-header'>About Me</h3>  
            <p>My name is Kyle-Anthony, and I am a <span>Software</span> <span>Developer</span> based in Brooklyn, NYC. I focus on Swift, Flutter, and Web development. Additionally, I research and implement AI/ML solutions.</p>
            <p>I enjoy making <a href="https://www.instagram.com/annointedbeats/" target="_blank"><span>music</span></a>, <a href="https://www.instagram.com/annointedproductions/" target="_blank"><span>digital content</span></a>, and visually pleasing designs. I am absolutely in love with brands like <a href="https://www.apple.com" target="_blank"><span>Apple</span></a> and <a href="https://arc.net/" target="_blank"><span>The Arc Browser</span></a>; I try to model my designs to resemble their aesthetic.</p>
        </div>
        <div className="image-container">
            <img src="/portraits/profile2.jpg" alt="Profile" className="about-profile-image"/>
        </div>
    </div>
  );
}

export default AboutSection;
