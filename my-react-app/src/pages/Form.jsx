import React, { useState } from "react";

function Form({ setShowForm }) {
  const [payment, setPayment] = useState({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upi: "",
  });

  function handleChange(e) {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    });

    if (response.ok) {
      alert("Payment details saved successfully");
      setShowForm(false);
    }
  }

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
      }}
    >
      <div
        className="bg-white p-4 rounded-4 shadow"
        style={{ width: "400px" }}
      >
        <h3 className="text-center mb-4">Payment Details</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cardHolder"
            className="form-control mb-3"
            placeholder="Card Holder Name"
            value={payment.cardHolder}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cardNumber"
            className="form-control mb-3"
            placeholder="Card Number"
            value={payment.cardNumber}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="expiry"
            className="form-control mb-3"
            placeholder="Expiry Date (MM/YY)"
            value={payment.expiry}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="cvv"
            className="form-control mb-3"
            placeholder="CVV"
            value={payment.cvv}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="upi"
            className="form-control mb-3"
            placeholder="UPI ID"
            value={payment.upi}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;