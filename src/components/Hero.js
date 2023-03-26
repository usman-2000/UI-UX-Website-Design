import { memo } from "react";
import "./Hero.css";

const Hero = memo(() => {
  return (
    <section className="hero1" id="hero">
      <article className="conteiner" id="hero-text">
        <div className="content9">
          <div className="apresentation">
            <h2 className="david" id="hero-name">
              David
            </h2>
            <p className="paragraph" id="intro-text">
              ✋ Hello, my name is
            </p>
          </div>
          <div className="about2">
            <p id="hero-desc">
              As a UI/UX designer, I create beautiful and functional digital
              experiences that delight users with typography, transitions, and
              thoughtful interactions.
            </p>
            <h2  id="hero-title">
              Designing Experiences That Put Users First.
            </h2>
          </div>
          <button className="button1" autoFocus>
            <p className="get-in-touch">Get in touch</p>
          </button>
        </div>
      </article>
      <img className="content-icon" alt="" src="/hero-image@3x.png" />
    </section>
  );
});

export default Hero;
