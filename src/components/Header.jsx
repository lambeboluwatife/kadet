// import { Link } from "react-router-dom";
import { faBars, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMenu } from "@fortawesome/free-solid-svg-icons";

const Header = ({ dropdown, toggleDropdown }) => {
  return (
    <>
      <header>
        <h3 className="logo">Kadet</h3>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Earrings</a>
            </li>
            <li>
              <a href="/">Necklaces</a>
            </li>
            <li>
              <a href="/">Chains</a>
            </li>
            <li>
              <a href="/">Lip Glosses</a>
            </li>
          </ul>
        </nav>
        <a href="/" className="header-btn">
          <button>Contact</button>
        </a>
        <FontAwesomeIcon
          icon={dropdown ? faRemove : faBars}
          className="menu"
          onClick={toggleDropdown}
        />
      </header>

      {dropdown && (
        <div className="dropdown-menu">
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Earrings</a>
            </li>
            <li>
              <a href="/">Necklaces</a>
            </li>
            <li>
              <a href="/">Chains</a>
            </li>
            <li>
              <a href="/">Lip Glosses</a>
            </li>
          </ul>
          <a href="/" className="cta">
            <button>Contact</button>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
