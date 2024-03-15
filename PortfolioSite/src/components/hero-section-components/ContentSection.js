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
          <span>{`Hi, my name is `}</span>
          <span className="kyle-anthony">Kyle-Anthony</span>
        </div>
        <div className="a-mobileweb-developer">
          Mobile/Web Developer and AI/ML Engineer focused on turning ideas
          into a <span className="kyle-anthony">digital reality.</span>
        </div>
        <div className="buttons">
          <div className="button">
          <a href="/resume" target="_blank" rel="noopener noreferrer" style={linkStyle}>See Resume</a>
          </div>
          <div className="button">
            <div className="see-work">{`See Work `}</div>
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
