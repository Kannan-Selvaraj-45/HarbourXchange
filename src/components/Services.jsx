import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="new-serv">
        <h1 className="text-center mt-4 new-about-head">SERVICES</h1>
      </div>

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
                  src="./public/images/big-ship.jpg"
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
                  src="./public/images/new-bg.jpg"
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
                  src="./public/images/new-bg3.jpg"
                  alt="Boats"
                  className="img-fluid connect-image-services"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
