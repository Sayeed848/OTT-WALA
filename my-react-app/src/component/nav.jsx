import React, { useState } from "react";
import Form from "../Form";

function Navbar() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            OTT WALA
          </a>

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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OTT
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Netflix
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Amazon Prime
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Disney+ Hotstar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JioHotstar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SonyLIV
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ZEE5
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      JioCinema
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MX Player
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lionsgate Play
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Apple TV+
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row justify-content-center g-4">

          {/* Netflix */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://5.imimg.com/data5/ANDROID/Default/2025/10/553106372/AV/XA/JD/147723836/product-jpeg-500x500.jpg"
                alt="Netflix"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">Netflix</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-danger w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Disney+ Hotstar */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PtgBD1V3qy5orxH1drYf4XhJ4eoABUhWq8fDjgmtrg&s"
                alt="Disney+ Hotstar"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">Disney+ Hotstar</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-primary w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Amazon Prime */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://www.latestmodapks.com/wp-content/uploads/2022/04/amazon_video_light_on_dark.png"
                alt="Amazon Prime"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">Amazon Prime</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-warning w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* ZEE5 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://yt3.googleusercontent.com/toCmhbURciZHcU3AZApwe1W8Xa_wA4XB5cLGvYgHuQOIEtaUIN74mjxBVOmPqnRef0hdN4jJOPE=s900-c-k-c0x00ffffff-no-rj"
                alt="ZEE5"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">ZEE5</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-success w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* SonyLIV */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://ottking.in/wp-content/uploads/2022/12/sony-logo-scaled.jpg"
                alt="SonyLIV"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">SonyLIV</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-dark w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* MX Player */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://premiumatcheap.in/wp-content/uploads/2024/02/mx-player-gold-hd-video-player-my24hrshop-65bd1c0f05b81-1200x1200.webp"
                alt="MX Player"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">MX Player</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-info w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Apple TV+ */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbIKPY_klZsz0dPlIf9LdL104-_WRFQpGY8NdAUBGP9CWMzHot0St8Bc&s=10"
                alt="Apple TV+"
                style={{
                  height: "240px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">Apple TV+</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-secondary w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* JioCinema */}
          <div className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow border-0 rounded-4 overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                className="card-img-top"
                src="https://pbs.twimg.com/media/GMAkJYwbEAEE2aW.jpg"
                alt="JioCinema"
                style={{
                  height: "240px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">JioCinema</h5>
                <p className="text-warning fw-bold fs-5">$10 / Month</p>

                <button
                  className="btn btn-primary w-100 rounded-pill fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
}

export default Navbar;