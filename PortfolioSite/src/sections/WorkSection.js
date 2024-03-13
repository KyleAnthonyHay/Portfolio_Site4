import ColorfulConnectContainer from "../components/work-components/ColorfulConnectContainer";
import QuizCraft from "../components/work-components/QuizCraft";
import MakeItSnow from "../components/work-components/MakeItSnow";
import "./WorkSection.css";

const WorkSection = () => {
  return (
    <div className="worksection">
      <b className="work">Work</b>
      <ColorfulConnectContainer />
      <QuizCraft/>
      <MakeItSnow />
    </div>
  );
};

export default WorkSection;
