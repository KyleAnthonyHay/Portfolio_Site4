import ColorfulConnectContainer from "../components/ColorfulConnectContainer";
import QuizCraft from "../components/QuizCraft";
import MakeItSnow from "../components/MakeItSnow";
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
