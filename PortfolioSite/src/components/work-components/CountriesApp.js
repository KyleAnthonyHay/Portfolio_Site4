import "./CountriesApp.css";
import "./WorkCards.css";

const CountriesApp = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/Countries-App";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="countries-icon" alt="" src="/CountriesApp@2x.png" />
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src="/swift.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`Countries App `}</div>
            <div className="project-summary">{`Country info-viewing app built in swift. `}</div>
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

export default CountriesApp;
