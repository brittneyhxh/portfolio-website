import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, image, link, tags }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        )}

        {link && 
            (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
            </a>
            )
        }
      </div>
    </div>
  );
}

export default ProjectCard;
