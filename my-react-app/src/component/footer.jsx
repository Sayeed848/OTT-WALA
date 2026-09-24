import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">

        <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
          <button className="btn btn-outline-light">Previous</button>

          <button className="btn btn-primary">1</button>
          <button className="btn btn-outline-light">2</button>
          <button className="btn btn-outline-light">3</button>
          <button className="btn btn-outline-light">4</button>
          <button className="btn btn-outline-light">5</button>

          <button className="btn btn-outline-light">Next</button>
        </div>

        <hr />

        <div className="text-center">
          <h5>We Accept</h5>

          <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>💳 RuPay</span>
            <span>📱 UPI</span>
            <span>📱 Google Pay</span>
            <span>📱 PhonePe</span>
            <span>📱 Paytm</span>
          </div>
        </div>

        <hr />

        <p className="text-center mb-0 text-secondary">
          © 2026 OTT WALA. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;