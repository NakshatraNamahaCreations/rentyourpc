import React from "react";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="tc-dark-wrapper">

      {/* PAGE HEADER */}
      <div className="tc-dark-header">
        <h1>Terms & Conditions</h1>
        <p>Please read the following terms carefully before renting our systems.</p>
      </div>

      {/* CARD */}
      <div className="tc-dark-card">

        {/* 1 */}
        <section className="tc-dark-section">
          <h2>1. Rental Charges & Payment</h2>
          <p>
            All rental charges must be paid in advance at the time of system delivery.
            Pricing is based on the exact configuration requested by the customer and
            confirmed in the delivery checklist. The rented system remains the sole
            property of <strong>Rent Your PC</strong> and must be returned on demand.
          </p>
        </section>

        {/* 2 */}
        <section className="tc-dark-section">
          <h2>2. Renewal & Extension</h2>
          <p>
            If a rented system is not returned by the end of the agreed rental period,
            the contract will automatically be renewed. Extensions are billed based on
            the standard hire cycle selected during the initial booking.
          </p>
        </section>

        {/* 3 */}
        <section className="tc-dark-section">
          <h2>3. System Collection Without Prior Notice</h2>
          <p>
            Rent Your PC reserves the right to collect the rented equipment without
            prior notice under circumstances including but not limited to:
          </p>
          <ul className="tc-list">
            <li>Failure to pay rental charges on time.</li>
            <li>Fake, incorrect, or non-responsive customer contact information.</li>
            <li>Customer behaves aggressively or unprofessionally with staff.</li>
            <li>Security of the system is at risk or appears compromised.</li>
          </ul>
        </section>

        {/* 4 */}
        <section className="tc-dark-section">
          <h2>4. Early Return</h2>
          <p>
            If the rented system is returned before the end of the rental duration,
            the paid rental charges will <strong>not</strong> be refunded.
          </p>
        </section>

        {/* 5 */}
        <section className="tc-dark-section">
          <h2>5. Delivery & Pickup</h2>
          <p>
            All systems are delivered and collected by certified service engineers at
            the address provided by the customer at the time of booking.
          </p>
        </section>

        {/* 6 */}
        <section className="tc-dark-section">
          <h2>6. System Handling & Restrictions</h2>
          <p>
            The system must not be opened, tampered with, moved to another location,
            sublet, or handled roughly. All equipment must be maintained in the same
            condition as delivered.
          </p>
        </section>

        {/* 7 */}
        <section className="tc-dark-section">
          <h2>7. Damage, Loss, or Theft</h2>
          <p>
            The customer is fully responsible for the safety and security of rented
            equipment. Any damage, physical impact, water-related issues, loss, theft,
            or confiscation must be compensated by the customer at actual cost.
            Systems are not covered under insurance.
          </p>
        </section>

        {/* 8 */}
        <section className="tc-dark-section">
          <h2>8. Subletting Prohibited</h2>
          <p>
            Customers are strictly prohibited from subletting or lending the rented
            system to any third party.
          </p>
        </section>

        {/* 9 */}
        <section className="tc-dark-section">
          <h2>9. Liability for Data</h2>
          <p>
            Rent Your PC is not responsible for loss of data, corruption of files,
            or damage to customer information stored on the rented systems.
          </p>
        </section>

        {/* 10 */}
        <section className="tc-dark-section">
          <h2>10. Installed Software</h2>
          <p>
            The customer is solely responsible for any software installed, developed,
            or used on the rented system. Rent Your PC is not liable for misuse or
            unauthorized use of licensed software.
          </p>
        </section>

        {/* 11 */}
        <section className="tc-dark-section">
          <h2>11. Software & Network Support</h2>
          <p>
            On-site support for software installation, application issues, LAN
            configuration, or virus problems is <strong>not</strong> included in the rental
            service. Customers may use third-party support services without opening or
            tampering with the hardware.
          </p>
        </section>

        {/* FOOTNOTE */}
        <div className="tc-dark-note">
          For support or clarifications, contact 
          <strong> sales@rentyourpc.com</strong> or call 
          <strong> +91 9019677359</strong>.
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
