import { NavLink } from "react-router-dom";

const Navbar = () => {
  const showSidebar = () => {
    const sidebarEl = document.querySelector(".sidebar-nav");
    sidebarEl.style.display = "block";
  };

  const closeSidebar = () => {
    const sidebarEl = document.querySelector(".sidebar-nav");
    sidebarEl.style.display = "none";
  };

  return (
    <>
      <nav className="nav-container fixed-top" id="nav">
        <div className="d-flex justify-content-start">
          <a href="" className="new-logo">
            <img
              src="./assets/H.png"
              className="logo-img"
              style={{ backgroundColor: "transparent" }}
            />
          </a>
        </div>
        <div className="nav-list-container">
          <ul
            className="d-flex justify-content-between list-container"
            id="ul-1"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "page active-nav" : "page"
                }
                style={{ textDecoration: "none" }}
                end
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  isActive ? "page active-nav" : "page"
                }
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "page active-nav" : "page"
                }
                style={{ textDecoration: "none" }}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "page active-nav" : "page"
                }
                style={{ textDecoration: "none" }}
              >
                LOGIN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "page active-nav" : "page"
                }
                style={{ textDecoration: "none" }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="sm-nav fixed-top">
        <ul className="sm-ul">
          <li onClick={showSidebar} style={{ cursor: "pointer" }}>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-nav">
        <div onClick={closeSidebar} className="close-container">
          <a className="close">
            <i className="fa-solid fa-xmark"></i>{" "}
          </a>
        </div>

        <ul className="sidebar">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "page active-nav" : "page"
              }
              style={{ textDecoration: "none" }}
              end
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "page active-nav" : "page"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "page active-nav" : "page"
              }
              style={{ textDecoration: "none" }}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "page active-nav" : "page"
              }
              style={{ textDecoration: "none" }}
            >
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "page active-nav" : "page"
              }
              style={{ textDecoration: "none" }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
