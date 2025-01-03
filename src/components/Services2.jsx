import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <h1 className="text-center mt-4 tracking-wide text-3xl pt-20 pb-3 new-about-head">
        SERVICES
      </h1>

      <div className="container-fluid pt-3 pb-4  min-h-[45vh] bg-white">
        <div className="container-fluid pt-1 min-h-[45vh]">
          <div className="flex gap-3 px-0 pr-2.5 w-[101%] ">
            <div className="w-1/3 shadow-xl ">
              <div
                className="relative w-full overflow-hidden "
                style={{ borderRadius: "10px" }}
              >
                <div className="absolute top-5 left-5 text-white z-10 ">
                  <h2 className="connect-head font-bold text-4xl ">
                    Vessel Management
                  </h2>
                  <p className="connect-description text-lg">
                    FUEL | RPM | HOUR | CREW | DOCUMENT
                  </p>
                </div>
                <NavLink to="/vessel">
                  <img
                    src="/images/big-ship.jpg"
                    alt="Residential"
                    className=" w-full h-[67vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer "
                  />
                </NavLink>
              </div>
            </div>

            <div className="w-1/3 shadow-xl">
              <div
                className="relative w-full overflow-hidden"
                style={{ borderRadius: "10px" }}
              >
                <div className="absolute top-5 left-5 text-white z-10">
                  <h2 className="connect-head font-bold text-4xl">
                    Marketplace
                  </h2>
                  <p className="connect-description text-lg">
                    PROJECT | TOWAGE
                  </p>
                </div>
                <NavLink to="/market">
                  <img
                    src="/images/new-bg.jpg"
                    alt="Roam"
                    className="w-full h-[67vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer"
                  />
                </NavLink>
              </div>
            </div>

            <div className="w-1/3 mr-3 shadow-xl">
              <div
                className="relative w-full overflow-hidden"
                style={{ borderRadius: "10px" }}
              >
                <div className="absolute top-5 left-5 text-white z-10">
                  <h2 className="connect-head font-bold text-4xl">
                    Cargo Movement
                  </h2>
                  <p className="connect-description text-lg">COASTAL | RIVER</p>
                </div>
                <NavLink to="/cargo">
                  <img
                    src="/images/new-bg3.jpg"
                    alt="Boats"
                    className="w-full h-[67vh] object-cover transition-transform duration-400 ease-in-out hover:scale-[1.06] cursor-pointer"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
