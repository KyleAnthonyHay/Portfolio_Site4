import "./AboutContainer.css";

const AboutContainer = () => {
  return (
    <div className="navbar">
      <div className="links">
        <img className="faceemoji-icon" alt="" src="/faceemoji@2x.png" />
        <div className="about">About</div>
        <div className="about">Work</div>
        <div className="about">Blog</div>
        <div className="about">Contact</div>
      </div>
      <div className="socialicons">
        <img className="linkedin-icon" alt="" src="/linkedin.svg" />
        <img className="x-icon" alt="" src="/x.svg" />
        <img className="github-icon" alt="" src="/github.svg" />
        <div className="line" />
        <img className="linkedin-icon" alt="" src="/sun.svg" />
        <div className="whitespace" />
      </div>
    </div>
  );
};

export default AboutContainer;
