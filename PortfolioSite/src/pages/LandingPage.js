import AboutContainer from "../components/hero-section-components/NavBar";
import ContentSection from "../components/hero-section-components/ContentSection";
import WorkSection from '../sections/WorkSection'
import "./LandingPage.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <AboutContainer />
      <ContentSection />
      <WorkSection />
    </div>
  );
};

export default Desktop;
