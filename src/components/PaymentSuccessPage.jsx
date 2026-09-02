import React, { useEffect, useState } from 'react';
import './EnrollPage.css';
import './Contact.css';

export default function PaymentSuccessPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.title = 'Enrollment Confirmed | Dietitian Neeta';

    // Guard: only reachable right after PaymentPage sets this flag.
    // Direct/typed-in visits to /payment-success get bounced back to /enroll.
    if (sessionStorage.getItem('paymentConfirmed') !== 'true') {
      window.location.href = '/enroll';
      return;
    }
    setReady(true);

    // One-time use — clear so a page reload or back-button doesn't re-show success.
    sessionStorage.removeItem('paymentConfirmed');
    sessionStorage.removeItem('enrollmentData');
  }, []);

  if (!ready) return null;

  return (
    <section className="enroll-section section-bg-alt">
      <div className="container" style={{ textAlign: 'center', maxWidth: '560px' }}>
        <div className="form-success-message">
          <div className="success-icon"><i className="fa-solid fa-circle-check"></i></div>
          <h3>Enrollment Received!</h3>
          <p>
            Thank you for enrolling. Neeta's team will verify your payment and reach out
            to you on WhatsApp shortly to confirm your program and get you started.
          </p>
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    </section>
  );
}
