import "./MunchMap.css";

const MunchMap = () => {
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon-munchMap" alt="" src="/MunchMap@2x.png" />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src="/flutter.svg" />
            <img className="firebase-icon" alt="" src="/firebase.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`MunchMap `}</div>
            <div className="modern-social-media">{`Online food donation platform for restaurants and shelters. built with React and Django `}</div>
            <div className="button">
              <div className="go-to-code">Go to Code</div>
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MunchMap;
