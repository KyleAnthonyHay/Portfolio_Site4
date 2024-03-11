import AboutContainer from "../components/AboutContainer";
import ColorfulConnectContainer from "../components/ColorfulConnectContainer";
import ContentSection from "../components/ContentSection";
import "./Desktop.css";
import WorkSection from "./WorkSection";

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
