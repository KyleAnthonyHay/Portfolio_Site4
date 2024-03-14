import React, { useEffect } from 'react';
import "./Technology-slider.css"

const TechnologySlider = () => {
    const loopScroll = () => {
  const workContainer = document.querySelector('.slider');
  let scrollAmount = 0;

  // Clone slider contents
  const sliderContents = workContainer.innerHTML;
  workContainer.innerHTML += sliderContents; // Append cloned contents

  function scroll() {
    const maxScrollLeft = workContainer.scrollWidth / 2; // Divide by 2 because the content is now doubled

    if (scrollAmount < maxScrollLeft) {
      scrollAmount += .3; // Adjust scrolling speed here
      workContainer.scrollLeft = scrollAmount;
    } else {
      // Reset scroll position to start (smooth transition)
      scrollAmount = 0; // Might need adjustment for seamless looping
      workContainer.scrollLeft = scrollAmount;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};
  
    useEffect(() => {
      loopScroll(); //uncomment line to start loop
      // Include any cleanup code if necessary, for example:
      // return () => { /* Cleanup actions here */ };
    }, []); // The empty array ensures this effect runs only once after the initial render
  
  return (
    <div className='technology-slider-section'>
        <div className='slider'>
          <img className="tech-icon" alt="" src="/swift.svg" />
          <img className="tech-icon" alt="" src="/technologies/reactjs.svg" />
          <img className="tech-icon" alt="" src="/flutter.svg" />
          <img className="tech-icon" alt="" src="/technologies/c++.svg" />
          <img className="tech-icon" alt="" src="/technologies/python.svg" />
          <img className="tech-icon" alt="" src="/technologies/tailwindcss.svg" />
          <img className="tech-icon" alt="" src="/technologies/django.svg" />
          <img className="tech-icon" alt="" src="/technologies/figma.svg" />
          <img className="tech-icon" alt="" src="/technologies/mongodb.svg" />
          <img className="tech-icon" alt="" src="/technologies/typescript.svg" />
          <img className="tech-icon" alt="" src="/firebase.svg" />
        </div>
    </div>
  );
};

export default TechnologySlider;
