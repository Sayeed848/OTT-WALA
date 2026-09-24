import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm border-bottom border-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-warning fs-4" to="/">
          OTT WALA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-warning fw-bold" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-warning fw-bold" : "")
                }
              >
                About
              </NavLink>
            </li>
 <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-warning fw-bold" : "")
                }
              >
                Dashboard
              </NavLink>
            </li>



            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active text-warning fw-bold" : "")
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                OTT Platforms
              </a>

              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/">
                    Netflix
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Amazon Prime
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Disney+ Hotstar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    JioHotstar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    SonyLIV
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    ZEE5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    JioCinema
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    MX Player
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Lionsgate Play
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Apple TV+
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <form className="d-flex me-2" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2 bg-secondary text-white border-0 placeholder-white"
                type="search"
                placeholder="Search OTT..."
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>

            <NavLink to="/login" className="btn btn-warning fw-bold px-3">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;