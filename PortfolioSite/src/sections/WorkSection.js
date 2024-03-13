import ColorfulConnectContainer from "../components/work-components/ColorfulConnectContainer";
import QuizCraft from "../components/work-components/QuizCraft";
import MakeItSnow from "../components/work-components/MakeItSnow";
import "./WorkSection.css";
import CountriesApp from "../components/work-components/CountriesApp";
import MunchMap from "../components/work-components/MunchMap";

const WorkSection = () => {
  return (
    <div className="worksection">
      <b className="work">Work</b>
      <CountriesApp/>
      <MunchMap/>
      <QuizCraft/>
      <MakeItSnow />
      <ColorfulConnectContainer />
     
    </div>
  );
};

export default WorkSection;
