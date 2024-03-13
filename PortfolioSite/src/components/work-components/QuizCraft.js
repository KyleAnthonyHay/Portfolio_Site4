import "./QuizCraft.css";

const ColorfulConnectContainer = () => {
  const githubRepoUrl = "https://github.com/KyleAnthonyHay/QuizCraftAI";
  const linkStyle = {
    color: 'white', // Sets the text color to white
    textDecoration: 'none', // Removes the underline from the link
  };
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon2" alt="" src="/QuizCraft.png" />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src="/flutter.svg" />
            <img className="firebase-icon" alt="" src="/firebase.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`QuizCraft AI `}</div>
            <div className="modern-social-media">{`OpenAI-GPT-Powered quiz generator built with Flutter and Firebase. `}</div>
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
