import img1 from "../images/neck 1.jpg";
import img2 from "../images/neck 2.jpg";
import img3 from "../images/neck 4.jpg";
import img4 from "../images/neck 5.webp";
import { Link } from "react-router-dom";
const Collections = () => {
  return (
    <div className="collections">
      <h2>
        <i>Our Collections</i>
      </h2>
      <div className="grid grid-4">
        <div className="">
          <div className="item">
            <img src={img1} className="item-image" alt="earrings" />
          </div>
          <Link to="/earrings">
            <h6>Earrings &rarr;</h6>
          </Link>
        </div>
        <div className="">
          <div className="item">
            <img src={img2} className="item-image" alt="necklaces" />
          </div>
          <Link to="/necklaces">
            <h6>Necklaces &rarr;</h6>
          </Link>
        </div>
        <div className="">
          <div className="item">
            <img src={img3} className="item-image" alt="bracelets" />
          </div>
          <Link to="/bracelets">
            <h6>Bracelets &rarr;</h6>
          </Link>
        </div>
        <div className="">
          <div className="item">
            <img src={img4} className="item-image" alt="lip glosses" />
          </div>
          <Link to="/rings">
            <h6>Rings &rarr;</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
