import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="fw-bold text-warning mb-4">About OTT WALA</h1>
          <p className="lead text-light mb-4">
            OTT WALA is your one-stop destination for affordable premium streaming platform subscriptions. We provide fast, reliable, and genuine access to your favorite movies, web series, live sports, and TV shows across all major OTT platforms.
          </p>
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="card bg-dark border-secondary text-white p-3 h-100 shadow">
                <h3 className="h5 text-warning">Best Prices</h3>
                <p className="small text-secondary mb-0">Get up to 80% discount on yearly subscription plans for top OTT services.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-secondary text-white p-3 h-100 shadow">
                <h3 className="h5 text-warning">Instant Activation</h3>
                <p className="small text-secondary mb-0">Quick setup and delivery right after completing your payment details.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-secondary text-white p-3 h-100 shadow">
                <h3 className="h5 text-warning">24/7 Support</h3>
                <p className="small text-secondary mb-0">Our dedicated support team is available round the clock to assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

