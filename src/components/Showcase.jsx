import backdrop from "../images/new-backdrop.jpeg";
import backdrop2 from "../images/necklace 1.jpg";
const Showcase = () => {
  return (
    <div className="showcase">
      <div className="grid grid-3">
        <div className="box box-content">
          <div className="content">
            <h1>Kadet</h1>
            <h5>
              <i>Trendy &#128141; &#11088; Jewellery</i>
            </h5>

            <h6>
              Each piece is a unique expression of understated luxury. <br />
              Welcome to Kadet Jewels Store. Shop our variety of rings,
              necklaces, chains, and more.{" "}
            </h6>
            <a
              href="/"
              alt="Lambe Boluwatife Resume"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              Shop Now
            </a>
            <div className="img-text">
              <h1>K</h1>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={backdrop2} alt="backdrop" className="item-image" />
        </div>
        <div className="box">
          <img src={backdrop} alt="backdrop" className="item-image" />
          <div className="img-text">
            <h1>K</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
