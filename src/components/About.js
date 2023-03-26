import { memo } from "react";
import "./About.css";

const About = memo(() => {
  return (
    <section className="about" id="about-me">
      <div className="content8" id="aboutme-div">
        <div className="heading-parent">
          <div className="heading1">
            <h2 className="about1" id="about-heading">
              About
            </h2>
            <h2 className="me" id="me-heading">
              Me
            </h2>
          </div>
          <div className="description">
            <p className="a-creative-professional" id="about-desc">
              A creative professional with a strong portfolio in digital design,
              including experience with front-end development. Experienced
              working from concept to production, and with stakeholders from
              multiple disciplines. A fluent user of popular design tools like
              Figma and Adobe CC.
            </p>
            <nav className="github-logo-parent" id="about-nav">
              <a className="github-logo" href="https://asdasd.com">
                <img className="shape-icon" alt="" src="/shape.svg" />
              </a>
              <a className="twitter-logo" href="https://asdasd.com">
                <img className="shape-icon1" alt="" src="/shape1.svg" />
              </a>
              <a className="frame" href="https://asdasd.com">
                <img className="vector-icon" alt="" src="/vector.svg" />
              </a>
            </nav>
          </div>
        </div>
        <div className="here-are-a-few-technologies-i-parent" id="about-skills">
          <h3 className="here-are-a" id="about-skills-heading">
            Here are a few technologies I’ve been working with recently:
          </h3>
          <div className="tags" id="skills-div">
            <div className="group-parent">
              <img className="frame-child" alt="" src="/group-44.svg" />
              <p className="figma">Figma</p>
            </div>
            <div className="group-container">
              <img className="frame-child" alt="" src="/group-44.svg" />
              <p className="figma">webflow</p>
            </div>
            <div className="frame-div">
              <img className="frame-child" alt="" src="/group-44.svg" />
              <div className="javascript">JavaScript</div>
            </div>
            <div className="group-parent1">
              <img className="frame-child" alt="" src="/group-44.svg" />
              <div className="javascript">Adobe CC</div>
            </div>
            <div className="group-parent2">
              <img className="frame-child" alt="" src="/group-44.svg" />
              <div className="javascript">HTML5</div>
            </div>
            <div className="group-parent3">
              <img className="frame-child" alt="" src="/group-44.svg" />
              <div className="javascript">cSS3</div>
            </div>
          </div>
        </div>
      </div>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
    </section>
  );
});

export default About;
