import React from "react";
import "./ReturnPolicy.css";

const ReturnPolicy = () => {
  return (
    <div className="rp-dark-wrapper">

      {/* HEADER */}
      <div className="rp-dark-header">
        <h1>Return Policy</h1>
        <p>Guidelines for returning rented systems safely and on time.</p>
      </div>

      {/* CARD */}
      <div className="rp-dark-card">

        <section className="rp-dark-section">
          <h2>Return Eligibility</h2>
          <p>
            Products can be returned only at the end of the rental period mentioned
            during booking. Returns outside the scheduled date require prior approval.
          </p>
        </section>

        <section className="rp-dark-section">
          <h2>Early Returns</h2>
          <p>
            If systems are returned before the rental period expires, charges for the
            <strong> full rental duration</strong> will still apply as per policy.
          </p>
        </section>

        <section className="rp-dark-section">
          <h2>Pickup & Scheduling</h2>
          <p>
            Pickup of rented systems will be carried out by our in-house logistics
            team. Customers must notify us at least <strong>24 hours prior</strong> to return.
          </p>
        </section>

        {/* FOOTNOTE */}
        <div className="rp-dark-note">
          For return-related assistance, contact
          <strong> sales@rentyourpc.com</strong> or call
          <strong> +91 9019677359</strong>.
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
