import "./ColorfulConnectContainer.css";
import "./WorkCards.css";
const ColorfulConnectContainer = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/ColorfulConnect";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon" alt="" src="/ColorfulConnect@2x.png" />
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src="/swift.svg" />
            <img className="firebase-icon" alt="" src="/firebase.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`Colorful Connect (In Progress) `}</div>
            <div className="modern-social-media">{`Modern social Media app built with SwiftUI. `}</div>
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
