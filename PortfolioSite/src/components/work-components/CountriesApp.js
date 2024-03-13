import "./CountriesApp.css";

const CountriesApp = () => {
  return (
    <div className="colorconnect-card">
      <div className="project-card">
        <img className="phone-icon-countries" alt="" src="/CountriesApp@2x.png" />
        <div className="description">
          <div className="project-icons">
            <img className="swift-icon" alt="" src="/swift.svg" />
          </div>
          <div className="description-text">
            <div className="project-name">{`Countries App `}</div>
            <div className="modern-social-media">{`Country info-viewing app built in swift. `}</div>
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

export default CountriesApp;
