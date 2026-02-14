import './Project.css';
import ProjectCard from './ProjectCard.js';
import portfolio_img from '../../img/logo.png';
import herai_img from '../../img/herai.png';
import liberty_img from '../../img/liberty_app.png';
import lvl_up_img from '../../img/lvl-up.png';

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
    },
    {
      title: 'LIBERTY Library App',
      description: '~ Designed and developed a library web application for my database management course (CPSC 471)',
      image: liberty_img,
      link: 'https://github.com/brittneyhxh/dbms-liberty-app',
      tags: ['SQL', 'SQLAlchemy', 'MySQL', 'Python', 'Flask']
    },
    {
      title: 'AI Workshop - Sentiment Analysis',
      description: '~ Designed and delivered a hands-on introduction to building a sentiment analysis model using TensorFlow and Keras.',
      image: lvl_up_img,
      link: "/sentiment-analysis",
      tags: ['Python', 'scikit-learn', 'Jupyter Notebook', 'AI/ML', 'Technical Communication']
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