import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <section className="content" id="skills-section">
        <h2 className="my-skills">
          <span>{`My `}</span>
          <span className="skills1">skills</span>
        </h2>
        <div className="skills-list">
          <div className="skill-item">
            <div className="skill-item-child" />
            <div className="content1">
              <h4 className="what-can-i">What can I do for you</h4>
              <p className="i-believe-that">
                I believe that great design should be intuitive and
                user-friendly for everyone, including those who don't consider
                themselves "designers." It's my job to ensure that your audience
                can interact with your brand in a way that makes sense for them,
                whether they're on a laptop or a phone.
              </p>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-item-item" />
            <div className="content1">
              <h4 className="applications-i-am">Applications I am fluent in</h4>
              <p className="i-believe-that">
                Creating visual elements for your brand, including logos, icons,
                typography, and more. Developing interactive elements like
                websites, mobile apps and games. Creating marketing campaigns
                that get results.
              </p>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-item-inner" />
            <div className="content1">
              <h4 className="what-can-i">What can you expect</h4>
              <p className="i-believe-that">
                You can expect me to deliver high-quality work on time and
                within budget. You can also expect me to be honest with you
                about your project's needs, so that we can come up with an
                approach that works best for both of us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
