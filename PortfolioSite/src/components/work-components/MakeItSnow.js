import "./MakeItSnow.css";
import "./WorkCards.css"

const ColorfulConnectContainer = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/MakeItSnow-VisionOS-";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img id="visionOS-icon" alt="" src="/MakeItSnow.png" />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src="/swift.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`Make It Snow! ❄️ `}</div>
            <div className="modern-social-media">{`VisionOS app that turns your living room into a winter wonderland! `}</div>
            <a href={githubRepoUrl} className="card-button" style={linkStyle} target="_blank" rel="noopener noreferrer">
                <div className="go-to-code">Go to Code</div>
                <img className="vector-icon" alt="" src="/vector.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorfulConnectContainer;
