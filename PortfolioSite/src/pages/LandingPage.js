import AboutContainer from "../components/hero-section-components/NavBar";
import ContentSection from "../components/hero-section-components/ContentSection";
import WorkSection from '../sections/WorkSection'
import TechnologySlider from "../components/technologies-slider/Technology-slider";

import "./LandingPage.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <AboutContainer />
      <ContentSection />
      <TechnologySlider />
      <WorkSection />
    </div>
  );
};

export default Desktop;
