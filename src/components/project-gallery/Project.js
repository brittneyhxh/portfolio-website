import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard.js';
import portfolio_img from '../../img/logo.png';
import herai_img from '../../img/herai.png';

function Project() {
    /* list of projects */
    const projectData = [
    {
      title: 'Portfolio Website',
      description: '~ My portfolio website built to showcase some of my personal projects and aspirations',
      image: portfolio_img,
      link: 'https://github.com/brittneyhxh/portfolio-website',
      tags: ['React', 'CSS', 'JavaScript']
    },
    {
      title: 'HerAI Website',
      description: '~ Developed a website for my university AI club, aiming to provide women and underrepresented groups a platform in emerging AI/ML fields',
      image: herai_img,
      link: 'https://herai-ucalgary.ca/',
      tags: ['React', 'CSS', 'JavaScript']
    }

  ];
    return (
        <section className="project">
            <h1>Projects</h1>
            <div className="project-container">
                {projectData.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    tags={project.tags}
                    />
                ))}
            </div>
        </section>
    );
}

export default Project;