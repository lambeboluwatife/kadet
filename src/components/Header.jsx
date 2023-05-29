// import { Link } from "react-router-dom";
const Header = () => {
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
        <a href="/" className="cta">
          <button>Contact</button>
        </a>
      </header>
    </>
  );
};

export default Header;
