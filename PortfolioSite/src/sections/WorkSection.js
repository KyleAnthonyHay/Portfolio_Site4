import React, { useEffect } from 'react';
import ColorfulConnectContainer from "../components/work-components/ColorfulConnectContainer";
import QuizCraft from "../components/work-components/QuizCraft";
import MakeItSnow from "../components/work-components/MakeItSnow";
import "./WorkSection.css";
import CountriesApp from "../components/work-components/CountriesApp";
import MunchMap from "../components/work-components/MunchMap";

const WorkSection = () => {
    // Define your loopScroll function here, or import it if it's defined externally
    const loopScroll = () => {
      const workContainer = document.querySelector('.work-container');
      let scrollAmount = 0;
  
      function scroll() {
        const maxScrollLeft = workContainer.scrollWidth - workContainer.clientWidth;
  
        if (scrollAmount < maxScrollLeft) {
          scrollAmount += .5; // Adjust scrolling speed here
          workContainer.scrollLeft = scrollAmount;
        } else {
          scrollAmount = 0; // Reset scroll position
        }
  
        requestAnimationFrame(scroll);
      }
  
      scroll();
    };
  
    useEffect(() => {
      // loopScroll(); //uncomment line to start loop
      // Include any cleanup code if necessary, for example:
      // return () => { /* Cleanup actions here */ };
    }, []); // The empty array ensures this effect runs only once after the initial render
  
  return (
    <div id = "work-anchor" className="worksection">
      <b className="work">Work</b>
      <div className="work-container">
      <CountriesApp/>
      <MunchMap/>
      <QuizCraft/>
      <MakeItSnow />
      <ColorfulConnectContainer />
      </div>
     
    </div>
  );
};

export default WorkSection;
