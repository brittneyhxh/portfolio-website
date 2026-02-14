import { NavLink } from "react-router-dom";
import './ProjectCard.css';

function ProjectCard({ title, description, image, link, tags }) {

  const isExternal = link && link.startsWith("http");

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

       {/* Link Handling */}
        {link && (
          isExternal ? (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          ) : (
            <NavLink 
              to={link}
              className="project-link"
            >
              View Project
            </NavLink>
          )
        )}

      </div>
    </div>
  );
}

export default ProjectCard;
