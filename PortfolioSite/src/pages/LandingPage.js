import AboutContainer from "../components/AboutContainer";
import ContentSection from "../components/ContentSection";
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
