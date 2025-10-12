import React from 'react';
import '../styles/Home.css';
import About from '../components/about-section/About.js';
import Project from '../components/project-gallery/Project.js';

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
    </>
  );
}

export default Home;
