import { memo } from "react";
import "./Header.css";

const Header = memo(() => {
  return (
    <div className="container-wrapper">
      <div className="container" id="h-div">
        <h1 className="logotipo" id="header-logo">
          <div className="logo">Logo</div>
        </h1>
        <div className="nav-icons">
            <nav className="social-media" id="header-nav">
                <a className="github-logo1" href="https://github.com">
                  <img className="shape-icon" alt="" src="/shape2.svg" />
                </a>
                <a className="github-logo1" href="https://twitter.com">
                  <img className="shape-icon" alt="" src="/shape3.svg" />
                </a>
              </nav>
          <button className="button-outline" autoFocus>
            <p className="download-cv">Download CV</p>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Header;
