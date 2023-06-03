const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="footer-details">
          <h1>Kadet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Blanditiis, aliquid?
          </p>
        </div>
        <div className="footer-links">
          <div className="grid">
            <div className="page-links">
              <h3>
                <a href="/">Home</a>
              </h3>
              <h3>
                <a href="/earrings">Earrings</a>
              </h3>
              <h3>
                <a href="/necklaces">Necklaces</a>
              </h3>
              <h3>
                <a href="/chains">Chains</a>
              </h3>
              <h3>
                <a href="/lipglosses">Lip Glosses</a>
              </h3>
            </div>
            <div className="social-links">
              <div className="social-media">
                <h6>
                  <a href="/">Facebook</a>
                </h6>
                <h6>
                  <a href="/earrings">Instagram</a>
                </h6>
              </div>
              <div className="contact-footer">
                <h6>
                  <a href="/">Contact Us</a>
                </h6>
                <br />
                <h6>
                  +234 80 8364 7531 <br />
                  WhatsApp
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
