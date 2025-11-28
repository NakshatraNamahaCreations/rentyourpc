import React from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-dark-wrapper">

      {/* HEADER */}
      <div className="refund-dark-header">
        <h1>Refund Policy</h1>
        <p>Your trust matters our policies are clear and transparent.</p>
      </div>

      {/* CARD */}
      <div className="refund-dark-card">

        {/* SECTION 1 */}
        <section className="refund-dark-section">
          <h2>1. Early Return / Early Collection</h2>
          <p>
            If the rented system or peripheral is returned or collected before the end
            of the rental period for any reason, the rental charges already paid will 
            <strong> not be refunded</strong>. Charges apply as per the confirmed booking duration.
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="refund-dark-section">
          <h2>2. Refundable Security Deposit</h2>
          <p>
            Any refundable deposit collected will be returned within 
            <strong> 2–3 hours</strong> after verifying the condition of the system upon return.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="refund-dark-section">
          <h2>3. Order Cancellation / Transportation Charges</h2>
          <p>
            Transportation or delivery charges are 
            <strong> non-refundable</strong> as logistics processes begin immediately after booking.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="refund-dark-section">
          <h2>4. Damage or Missing Accessories</h2>
          <p>
            Any physical damage or missing accessories during return may result in 
            deductions from the refundable deposit.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="refund-dark-section">
          <h2>5. Mode of Refund</h2>
          <p>
            Eligible refunds will be processed via the original payment method or bank transfer.
            Processing time may vary based on bank policies.
          </p>
        </section>

        {/* FOOTNOTE */}
        <div className="refund-dark-note">
          For refund or cancellation queries, contact us at 
          <strong> sales@rentyourpc.com</strong> or call 
          <strong> +91 9019677359</strong>.
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;
