import "./MunchMap.css";

const MunchMap = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/MunchMap";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon-munchMap" alt="" src="/MunchMap@2x.png" />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src="/reactjs.svg" />
            <img className="firebase-icon" alt="" src="/django.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`MunchMap `}</div>
            <div className="modern-social-media">{`Online food donation platform for restaurants and shelters. built with React and Django. `}</div>
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

export default MunchMap;
