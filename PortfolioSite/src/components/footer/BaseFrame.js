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
              src="/logo@2x.png"
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
          <div className="links">
            <b className="links1">Links</b>
            <div className="list-items">
              <div className="work">Work</div>
              <div className="tech-stack">Tech Stack</div>
              <div className="contact">Contact</div>
            </div>
          </div>
          <div className="links2">
            <b className="elsewhere">Elsewhere</b>
            <div className="list-items1">
              <div className="email">Email</div>
              <div className="linkedin">LinkedIn</div>
              <div className="github">GitHub</div>
              <div className="twitter">Twitter</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BaseFrame;
