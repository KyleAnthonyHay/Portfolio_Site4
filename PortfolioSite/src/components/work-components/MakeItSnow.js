import "./MakeItSnow.css";

const ColorfulConnectContainer = () => {
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon3" alt="" src="/MakeItSnow.png" />
        <div className="description">
          <div className="project-icons"> 
            <img className="swift-icon" alt="" src="/swift.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`Make It Snow! ❄️ `}</div>
            <div className="modern-social-media">{`VisionOS app that turns your living room into a winter wonderland! `}</div>
            <div className="card-button">
              <div className="go-to-code">Go to Code</div>
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorfulConnectContainer;
