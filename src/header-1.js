// Import necessary modules and resources
import "./App.scss";
import logo from "./images/logo-white.svg"
import { Link } from "react-router-dom";

// Define the Footer component
const Header_1 = () => {
  return (
    <div className="header-1">
        <Link to="/" style={{ textDecoration: "none" }}>
        <button className="button-h">
              <img src={logo} alt="home" className="logo-w"/>
          </button>
        </Link>
        <Link to="/about-me" style={{ textDecoration: "none" }}>
        <button className="button-h" style={{ width: "7vw" }}>
            <div className="column1">
              ABOUT ME
            </div>
          </button>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column1">
              PROJECTS
            </div>
          </button>
        </Link>
        <Link to="/decks" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column1">
              DECKS
            </div>
          </button>
        </Link>
        {/* <Link to="/art" style={{ textDecoration: "none" }}>
        <button className="button-h">
            <div className="column1">
              ART
            </div>
          </button>
        </Link> */}
    </div>
  );
};

// Export the Footer component
export default Header_1;
