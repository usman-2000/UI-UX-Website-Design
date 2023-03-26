import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience-div">
      <div className="experience-parent">
        <h2 className="education">
          <p className="p">{`🎓 `}</p>
          <p className="p">Education</p>
        </h2>
        <div className="content6">
          <div className="education-item">
            <p className="qualification">
              Master's (Human Computer Interaction)
            </p>
            <p className="p1">2010 - 2015</p>
            <h3 className="harvard-university">Harvard University</h3>
          </div>
          <div className="content-child" />
          <div className="education-item">
            <p className="qualification">
              Master's (Human Computer Interaction)
            </p>
            <p className="p1">2010 - 2015</p>
            <h3 className="harvard-university">Harvard University</h3>
          </div>
        </div>
      </div>
      <div className="experience-parent">
        <h2 className="education">
          <p className="p">{`💼 `}</p>
          <p className="p">Professional Experience</p>
        </h2>
        <div className="content6">
          <div className="education-item">
            <p className="qualification">
              Master's (Human Computer Interaction)
            </p>
            <p className="p1">2010 - 2015</p>
            <h3 className="harvard-university">Harvard University</h3>
          </div>
          <div className="content-child" />
          <div className="education-item">
            <p className="qualification">
              Master's (Human Computer Interaction)
            </p>
            <p className="p1">2010 - 2015</p>
            <h3 className="harvard-university">Harvard University</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
