import { useEffect } from "react";
import L from "leaflet";

const Contact = () => {
  useEffect(() => {
    const key = "TB1Bp8PtSr86Rrh22PYy";
    const map = L.map("map", {
      scrollWheelZoom: false,
    }).setView([9.738, 76.3966], 10);

    L.tileLayer(
      `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
      {
        attribution: "© MapTiler © OpenStreetMap contributors",
      }
    ).addTo(map);

    const enableCtrlZoom = (e) => {
      if (e.ctrlKey) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
      }
    };

    document.addEventListener("keydown", enableCtrlZoom);
    document.addEventListener("keyup", enableCtrlZoom);

    map.on("mouseout", () => {
      map.scrollWheelZoom.disable();
    });

    return () => {
      document.removeEventListener("keydown", enableCtrlZoom);
      document.removeEventListener("keyup", enableCtrlZoom);
      map.remove();
    };
  }, []);

  return (
    <div className="contact-bg mt-4 pt-lg-5">
      <div className="container contact-container pt-0 pt-lg-4">
        <div className="row center-container">
          <div className="col-lg-7">
            <h6 className="con-head">
              Write to us by filling in the form below
              <span className="contact-line"></span>
            </h6>
            <div className="form-container">
              <form className="contact-form">
                <div className="row g-2">
                  <div className="col-md">
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-email"
                        id="firstName"
                        placeholder="Enter First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-email"
                        id="lastName"
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    className="form-control form-email"
                    id="companyName"
                    placeholder="Enter Your Company Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Professional Email*
                  </label>
                  <input
                    type="email"
                    className="form-control form-email"
                    id="email"
                    placeholder="Enter Your Mail address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-3 form-button-container">
                  <button
                    type="reset"
                    className="btn btn-outline-danger form-button"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary form-button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 pt-5 pt-lg-0">
            <h6 className="con-head">
              Contact us <span className="contact-line"></span>
            </h6>
            <div className="contact-details-container">
              <div className="icon-address-container">
                <i className="fa-solid fa-location-dot contact-icon"></i>
                <p className="contact-address">
                  Big Tree Entertainment Private Limited Ground Floor, Wajeda
                  House, Gulmohar Cross Road No. 7, Juhu Scheme, Mumbai,
                  Maharashtra - 400049
                </p>
              </div>
              <div className="icon-address-container-copy">
                <i className="fa-regular fa-copy link-icon"></i>
                <p className="contact-address">CIN - u9993783728EIHF987</p>
              </div>
              <div className="icon-address-container-link">
                <i className="fa-solid fa-link link-icon"></i>
                <p className="contact-address">https://www.bigtree.in</p>
              </div>
            </div>
            <div className="contact-map-container">
              <div className="contact-map" id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
