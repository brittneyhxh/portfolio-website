import React from 'react';
import '../styles/Home.css';
import About from '../components/about-section/About.js';
import Project from '../components/project-gallery/Project.js';

function Home() {
  return (
    <>
      <section id="home" className="home">
        <h1>My Portfolio</h1>
        <h3>Brittney Ha</h3>
      </section>
      <About />
      <Project />
    </>
  );
}

export default Home;
