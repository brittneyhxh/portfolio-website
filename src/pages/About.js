import '../styles/About.css';
import interestsData from '../data/interests.json';
import techStackData from '../data/techstack.json'; 

function About() {
  return (
    <section className="about">
        {/* Interests Section */}
        <div className="interests">
          <h3>Current Interests</h3>

          <div className="interest-cards">
            {interestsData.map((interest, idx) => (
              <div className="interest-card" key={idx}>
                <h4>{interest.title}</h4>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack">
          <h3>Tech Stack</h3>

          <div className="tech-cards">
            {techStackData.map((tech, idx) => (
              <div className="tech-card" key={idx}>
                <h4>{tech.title}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}

export default About;
