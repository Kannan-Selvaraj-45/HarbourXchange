import { NavLink } from "react-router-dom";

import MapLayer from "./MapLayer";

const Home = () => {
  return (
    <>
      <div id="home">
        <MapLayer />
      </div>
      <div id="services"></div>
      <div className="container-fluid connect-section">
        <div className="container-fluid connect-section-services pt-1">
          <div className="row img-container">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="connect-card-services">
                <div className="connect-container">
                  <h2 className="connect-head">Vessel Management</h2>
                  <p className="connect-description">
                    FUEL | RPM | HOUR | CREW | DOCUMENT
                  </p>
                </div>
                <NavLink to="/vessel">
                  <img
                    src="/images/big-ship.jpg"
                    alt="Residential"
                    className="img-fluid connect-image-services"
                  />
                </NavLink>
              </div>
            </div>

            <div className="col-12 mt-1 mt-lg-0 col-md-6 col-lg-4">
              <div className="connect-card-services">
                <div className="connect-container">
                  <h2 className="connect-head">Marketplace</h2>
                  <p className="connect-description">PROJECT | TOWAGE</p>
                </div>
                <NavLink to="/market">
                  <img
                    src="/images/new-bg.jpg"
                    alt="Roam"
                    className="img-fluid connect-image-services"
                  />
                </NavLink>
              </div>
            </div>
            <div className="col-12 mt-1 mt-lg-0 col-md-6 col-lg-4">
              <div className="connect-card-services">
                <div className="connect-container">
                  <h2 className="connect-head">Cargo Movement</h2>
                  <p className="connect-description">COASTAL | RIVER</p>
                </div>
                <NavLink to="/cargo">
                  <img
                    src="/images/new-bg3.jpg"
                    alt="Boats"
                    className="img-fluid connect-image-services"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid tag-container pt-2">
        <h1 className="connect-head tag-head">ABOUT HARBOURXCHANGE</h1>
        <p className="connect-description tag-description">
          HarbourXchange is the disruption in the Indian digital marine
          marketplace connecting the demand and supply ends of marine assets
        </p>

        <NavLink to="/about" style={{ textDecoration: "none" }}>
          <a className="more" href="/about" style={{ textDecoration: "none" }}>
            LEARN MORE
            <span>
              <i className="fa-solid fa-greater-than greater"></i>
            </span>
          </a>
        </NavLink>
      </div>

      <div className="container-fluid online-section row pb-0 pb-lg-4">
        <div className="online-section-bg-container">
          <div className="col-12 col-lg-7 p-2 p-lg-0">
            <img src="/images/new-bg1.jpg" className="online-image" />
          </div>
          <div className="online-text-container col-12 col-lg-5 p-3 p-lg-5">
            <div className="">
              <h1 className="online-head">LAUNCH YOUR EXCHANGE IN MINUTES</h1>
              <p className="online-description">
                Set up HarbourXchange in 2 Simple Steps:
              </p>
            </div>
            <div className="plug-point-container">
              <h1 className="plug">1 CONNECT YOUR DEVICE</h1>
              <h1 className="plug">2 ACCESS THE NETWORK</h1>
            </div>
            <div className="">
              <p className="sky-description">
                HarbourXchange requires an unobstructed view of the sky.
                Download the HarbourXchange app to find the ideal installation
                location.
              </p>
              <div className="sky-button-container">
                <button className="sky-button1">
                  DOWNLOAD FOR ANDROID
                  <i className="fa-solid fa-greater-than greater"></i>
                </button>
                <button className="sky-button2">
                  DOWNLOAD FOR IOS
                  <i className="fa-solid fa-greater-than greater"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="online-section-bg-container2">
            <div className="contract-text-container p-3 p-lg-0 col-lg-6 order-1 order-lg-0">
              <h1 className="contract-head">VESSEL INSIGHT MARKETPLACE</h1>
              <p className="contract-description">
                Digitalizing marine time operations requires not only powerful
                applications, but also a secure data infrastructure providing
                cost-efficient access to reliable and high-quality data. Thus,
                all applications on the Vessel Insight Marketplace are supported
                by Kongsberg Vessel Insight data infrastructure.
              </p>
            </div>

            <div className=" col-lg-7 order-0 order-lg-1 ">
              <img
                src="/images/new-bg3.jpg"
                alt="Boats"
                className="img-fluid bottom-connect-image-services"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rocket-background d-none">
        <img src="/images/home-boat.jpg" className="rocket-image" />
        <div className="rocket-text-container">
          <h1 className="rocket-heading">Engineered for Seamless Exchange</h1>
          <p className="rocket-description">
            As the world leading provider of cutting-edge exchange solutions –
            and the only platform with seamless, high-performance integration –
            Harbour Exchange brings unmatched expertise in digital transactions
            and operational efficiency.
          </p>
          <button className="rocket-button">LEARN MORE</button>
        </div>
      </div>

      <footer className="footer-background d-none">
        <div className="harbourCopy">HarbourXchange &copy; 2024</div>
        <div className="right-footer-container col-12 col-lg-6 order-0 order-lg-1">
          <div className="right-footer">
            <div className="email-container">
              <span className="email-label">
                Interested in staying up to date with HarbourXchange?
              </span>
              <div className="input-container">
                <input type="email" id="email" className="input" required />
                <label className="label">Email</label>
              </div>

              <a href="" className="sign-up">
                SIGN UP
                <i className="fa-solid fa-greater-than greater-sign"></i>
              </a>
            </div>
            <div className="agree-container">
              <span className="signup-content">
                By clicking Sign Up, you agree to our Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-background mt-2">
        <div className="harbourCopy">HarbourXchange &copy; 2024</div>
        <div>
          <span className="email-label">
            Interested in staying up to date with HarbourXchange?
          </span>
        </div>
      </footer>

      <div className="arrow-container">
        <div className="scroll-icon-bg">
          <a href="#home" className="scroll-icon-a">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
        <div className="scroll-icon-bg">
          <a href="#services" className="scroll-icon-a">
            <i className="fa-solid fa-angle-down"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
