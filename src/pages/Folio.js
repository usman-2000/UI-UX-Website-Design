import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import About from "../components/About";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import "./Folio.css";

const Folio = () => {
  return (
    <div className="folio">
        <Header />
        <Hero />
        <Marquee />
        <Skills />
        <Contact />
        <Portfolio />
        <Experience />
        <About />
      <p className="all-rights-reserved">© 2023 All rights reserved</p>
    </div>
  );
};

export default Folio;
