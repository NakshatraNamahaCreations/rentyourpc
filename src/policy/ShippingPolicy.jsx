import React from "react";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {
  return (
    <div className="sp-dark-wrapper">

      {/* HEADER */}
      <div className="sp-dark-header">
        <h1>Shipping Policy</h1>
        <p>Details about delivery, transportation charges, and service coverage.</p>
      </div>

      {/* CARD */}
      <div className="sp-dark-card">

        <section className="sp-dark-section">
          <h2>Delivery Charges</h2>
          <p>
            Delivery fees are calculated based on the number of systems rented and the
            distance between your location and our Bangalore operations center.
          </p>
        </section>

        <section className="sp-dark-section">
          <h2>Order Confirmation</h2>
          <p>
            A delivery or transportation fee is required to confirm the booking. The
            remaining rental amount must be paid at the time of delivery.
          </p>
        </section>

        <section className="sp-dark-section">
          <h2>Non-Refundable Delivery Charges</h2>
          <p>
            Delivery fees are <strong>non-refundable</strong>, even if the customer cancels
            the order or declines the equipment during delivery.
          </p>
        </section>

        <section className="sp-dark-section">
          <h2>Delivery Handling</h2>
          <p>
            All deliveries are carried out by our trained in-house logistics team to
            ensure safe handling and setup of the rented systems.
          </p>
        </section>

        {/* FOOTNOTE */}
        <div className="sp-dark-note">
          For delivery-related queries, contact us at
          <strong> sales@rentyourpc.com</strong> or call
          <strong> +91 9019677359</strong>.
        </div>

      </div>
    </div>
  );
};

export default ShippingPolicy;
