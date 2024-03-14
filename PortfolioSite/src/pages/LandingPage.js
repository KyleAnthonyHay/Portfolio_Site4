import AboutContainer from "../components/hero-section-components/NavBar";
import ContentSection from "../components/hero-section-components/ContentSection";
import WorkSection from '../sections/WorkSection'
import TechnologySlider from "../components/technologies-slider/Technology-slider";
import Footer from "../components/footer/BaseFrame";

import "./LandingPage.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <AboutContainer />
      <ContentSection />
      <TechnologySlider />å
      <WorkSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Desktop;
