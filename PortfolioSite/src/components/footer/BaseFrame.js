import "./BaseFrame.css";

const BaseFrame = () => {
  return (
    <div className="base-frame">
      <div className="main-frame" />
      <footer className="footerweb">
        <div className="inner-frame">
          <div className="logo">
            <img
              className="logo-icon"
              loading="lazy"
              alt=""
              src="/icons/logo@2x.png"
            />
            <div className="thanks-for-stopping-container">
              <span>{`Thanks for stopping by `}</span>
              <span className="span">ッ</span>
            </div>
          </div>
          <div className="kyle-anthony-hay-all">
            © 2023 Kyle-Anthony Hay. All Rights Reserved.
          </div>
        </div>
        <div className="link-list">
          <div className="footer-links">
            <b className="links1">Links</b>
            <div className="list-items">
              <div className="footer-link">Work</div>
              <div className="footer-link">About</div>
              <div className="footer-link">Contact</div>
            </div>
          </div>
          <div className="links2">
            <b className="links1">Social</b>
            <div className="list-items">
              <a href="https://www.linkedin.com/in/kyle-anthonyhay" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/KyleAnthonyHay" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com/KyleAnthonyHay" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseFrame;
