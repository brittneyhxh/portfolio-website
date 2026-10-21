import React from 'react';
import '../styles/Home.css';
import About from '../components/about-section/About.js';
import Project from '../components/project-gallery/Project.js';
import MountainArt from '../components/hero-art/MountainArt.js';

// tagline
const TAGLINE = ['Develop.', 'Connect.', 'Wander.'];

function Home() {
  return (
    <>
      <section className="home">
        <section className="home-header">
          <h1>My Portfolio</h1>
          <h3>BRITTNEY HA</h3>
        </section>
      </section>
      
      <About />
      <Project />
      <section className="tagline-hero">
        <div className="tagline-text">
          <h2 className="tagline">
            {TAGLINE.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h2>
          <p>
            I turn data into insight and ideas into software, and I follow the
            connections between them.
          </p>
        </div>
        <MountainArt />
      </section>

      <About />
      <Project />
    </>
  );
}

export default Home;
