import { memo } from "react";
import "./Portfolio.css";

const Portfolio = memo(() => {
  return (
    <section className="portfolio" id="potfolio">
      <div className="heading">
        <h2 className="portflio-p">I create jobs</h2>
        <h2 className="portflio-h">that enchant people</h2>
      </div>
      <div className="portfolio-item">
        <img className="mask-group-icon" alt="" src="/mask-group@3x.png" />
        <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
        <div className="mask-group-parent">
          <img className="mask-group-icon2" alt="" src="/mask-group2@3x.png" />
          <img className="mask-group-icon2" alt="" src="/mask-group3@3x.png" />
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
