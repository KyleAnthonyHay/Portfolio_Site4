import "./ContentSection.css";


const ContentSection = () => {
  const linkStyle = {
    color: 'white', // Define the color directly
    textDecoration: 'none', // Remove the underline
  };
  return (
    <div className="herosection">
      <div className="herotext">
        <div className="im-kyle-anthony">
          <span>{`I'm `}</span>
          <span className="kyle-anthony">Kyle-Anthony</span>
        </div>
        <div className="a-mobileweb-developer">
          A Mobile/Web Developer and AI/ML Engineer focused on bringing visions
          into a digital reality.
        </div>
        <div className="buttons">
          <div className="button">
          <a href="/resume" target="_blank" rel="noopener noreferrer" style={linkStyle}>See Resume</a>
          </div>
          <div className="button">
            <div className="see-resume">{`See Work `}</div>
          </div>
        </div>
      </div>
      <div className="circle-portrait">
        <img
          className="profilepicture-icon"
          alt="Profile Picture"
          src="/profilepicture@2x.png"
        />
      </div>
    </div>
  );
};

export default ContentSection;
