import { NavLink } from "react-router-dom";
import './ProjectCard.css';

function ProjectCard({ title, description, image, link, tags }) {

  const isExternal = link && link.startsWith("http");

  // remove leading ~
  const method = description ? description.replace(/^~\s*/, "") : "";

  return (
    <article className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-info">
        <h3>{title}</h3>


        {/* Description = method */}
        <div className="project-method">
          <h4>Method to the Madness</h4>
          <p>{method}</p>
        </div>

        {/* Tags = ingredients */}
        {tags && tags.length > 0 && (
          <div className="project-ingredients">
            <ul className="project-tags">
              {tags.map((tag) => (
                <li key={tag} className="project-tag">{tag}</li>
              ))}
            </ul>
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
              aria-label={`View project: ${title}`}
            >
              View project
            </a>
          ) : (
            <NavLink
              to={link}
              className="project-link"
              aria-label={`View project: ${title}`}
            >
              View project
            </NavLink>
          )
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
