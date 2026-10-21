import { NavLink } from "react-router-dom";
import '../styles/Header.css';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo-box">
          <NavLink to="/" end>
              <img id="home-logo" src={logo} alt="not found" style={{ cursor: "pointer" }}></img>
          </NavLink>
        </div>
        <NavLink to="/" end>Home</NavLink>
        {/* <NavLink to="/projects" end>Projects</NavLink> */}
        {/* <NavLink to="/tech-stack" end>Technology</NavLink> */}
        <NavLink to="/about" end>About</NavLink>
      </nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/brittney-ha/" target="_blank" rel="noopener noreferrer">Let’s connect!</a>
    </header>
  );
}

export default Header;
