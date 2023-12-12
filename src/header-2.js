// Import necessary modules and resources
import "./App.scss";
import logo from "./images/logo-black.svg"
import { Link } from "react-router-dom";

// Define the Footer component
const Header_2 = () => {
  return (
    <div className="header-1">
        <Link to="/" style={{ textDecoration: "none" }}>
        <button className="button-h">
              <img src={logo} alt="home" className="logo-w"/>
          </button>
        </Link>
        <Link to="/about-me" style={{ textDecoration: "none" }}>
        <button className="button-h" style={{ width: "7vw" }}>
            <div className="column2">
              ABOUT ME
            </div>
          </button>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column2">
              PROJECTS
            </div>
          </button>
        </Link>
        <Link to="/decks" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column2">
              DECKS
            </div>
          </button>
        </Link>
        <Link to="/art" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column2">
              ART
            </div>
          </button>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column2">
              CONTACT
            </div>
          </button>
        </Link>
    </div>
  );
};

// Export the Footer component
export default Header_2;
