import earring from "../images/martin-de-arriba-uf_IDewI6iQ-unsplash.jpg";
import necklace from "../images/allie-pollock-mf4mmrX9BIg-unsplash.jpg";
import chain from "../images/neck 3.webp";
import lipGloss from "../images/ashley-piszek-L1iTsUBZYDk-unsplash.jpg";
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
            <img src={earring} className="item-image" alt="earrings" />
          </div>
          <Link to="/earrings">
            <h6>Earrings &rarr;</h6>
          </Link>
        </div>
        <div className="">
          <div className="item">
            <img src={necklace} className="item-image" alt="necklaces" />
          </div>
          <Link to="/necklaces">
            <h6>Necklaces &rarr;</h6>
          </Link>
        </div>
        <div className="">
          <div className="item">
            <img src={chain} className="item-image" alt="bracelets" />
          </div>
          <Link to="/chains">
            <h6>Chains &rarr;</h6>
          </Link>
        </div>
        <div className="">
          <div className="item">
            <img src={lipGloss} className="item-image" alt="lip glosses" />
          </div>
          <Link to="/lipglosses">
            <h6>Lip Glosses &rarr;</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collections;
