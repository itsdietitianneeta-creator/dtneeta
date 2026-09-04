import React, { useEffect, useState } from 'react';
import { siteData } from '../data/site';
import './PaymentPage.css';

export default function PaymentPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copiedKey, setCopiedKey] = useState('');
  const [utr, setUtr] = useState('');
  const { payment, whatsapp, formEndpoint } = siteData;
  const utrValid = utr.trim().length >= 6;

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 1500);
  };

  useEffect(() => {
    document.title = 'Complete Payment | Dietitian Neeta';

    // Guard: if no enrollment data, send back to enroll form
    const raw = sessionStorage.getItem('enrollmentData');
    if (!raw) {
      window.location.href = '/enroll';
      return;
    }
    try {
      setData(JSON.parse(raw));
    } catch {
      window.location.href = '/enroll';
    }
  }, []);

  const handleConfirm = async () => {
    if (!data || !utrValid) return;
    setLoading(true);

    // 1. Build pre-filled WhatsApp message
    const phone = whatsapp.number.slice(-10); // last 10 digits → 91XXXXXXXXXX
    const msg = [
      `New Enrollment Payment`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Program: ${data.program}`,
      `Package: ${data.package}`,
      `Duration: ${data.duration}`,
      `Amount Paid: \u20b9${Number(data.amount).toLocaleString('en-IN')}`,
      `Transaction Ref (UTR): ${utr.trim()}`,
      ``,
      `Please attach your payment screenshot here.`,
    ].join('%0A');

    window.open(`https://wa.me/91${phone}?text=${msg}`, '_blank');

    // 2. POST enrollment to Google Sheet (fire-and-forget)
    if (formEndpoint) {
      try {
        await fetch(formEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, utr: utr.trim(), status: 'Payment Initiated' }),
        });
      } catch (err) {
        console.error('Sheet update failed:', err);
      }
    }

    // 3. Set success flag and redirect
    sessionStorage.setItem('paymentConfirmed', 'true');
    window.location.href = '/payment-success';
  };

  if (!data) return null; // redirect in progress

  const originalAmount = Math.round(data.amount / 0.8);


  return (
    <section className="payment-section section-bg-alt">
      <div className="container payment-container">
        <a href="/enroll" className="enroll-back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Enroll Form
        </a>

        <div className="payment-grid">
          {/* ── LEFT: Order Summary ── */}
          <div className="payment-summary card">
            <div className="payment-summary-header">
              <i className="fa-solid fa-receipt"></i>
              <h2>Order Summary</h2>
            </div>

            <div className="summary-row">
              <span>Program</span>
              <strong>{data.program}</strong>
            </div>
            <div className="summary-row">
              <span>Package</span>
              <strong>{data.package}</strong>
            </div>
            <div className="summary-row">
              <span>Duration</span>
              <strong>{data.duration}</strong>
            </div>
            <div className="summary-row">
              <span>Name</span>
              <strong>{data.name}</strong>
            </div>
            <div className="summary-row">
              <span>Phone</span>
              <strong>{data.phone}</strong>
            </div>

            <div className="summary-total">
              <span>Total Amount</span>
              <div className="summary-total-price">
                <span className="price-original">
                  ₹{originalAmount.toLocaleString('en-IN')}
                </span>
                <span className="price-discounted">
                  ₹{Number(data.amount).toLocaleString('en-IN')}
                </span>
                <span className="discount-badge">20% OFF</span>
              </div>
            </div>

            <div className="summary-note">
              <i className="fa-solid fa-lock"></i>
              Your enrollment details are saved. Pay using the details on the right and
              then click the button below.
            </div>
          </div>

          {/* ── RIGHT: Payment Details ── */}
          <div className="payment-details-col">
            {/* Amount Hero */}
            <div className="payment-amount-hero card">
              <p className="pay-label">Pay Exactly</p>
              <p className="pay-amount">₹{Number(data.amount).toLocaleString('en-IN')}</p>
              <p className="pay-sub">Use UPI / NEFT / IMPS — any method works</p>
            </div>

            {/* UPI */}
            <div className="payment-method-card card">
              <div className="method-header">
                <i className="fa-solid fa-at method-icon"></i>
                <div>
                  <h3>Pay via UPI</h3>
                  <p>Open your UPI app (PhonePe, GPay, Paytm, BHIM) and pay using either detail below</p>
                </div>
              </div>

              <div className="upi-id-row">
                <i className="fa-solid fa-at"></i>
                <span>UPI ID:</span>
                <strong className="upi-value">{payment.upiId}</strong>
                <button type="button" className="copy-btn" onClick={() => copyText(payment.upiId, 'upi')}>
                  <i className={`fa-solid ${copiedKey === 'upi' ? 'fa-check' : 'fa-copy'}`}></i>
                  {copiedKey === 'upi' ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="upi-id-row">
                <i className="fa-solid fa-phone"></i>
                <span>Mobile Number:</span>
                <strong className="upi-value">{whatsapp.number.slice(-10)}</strong>
                <button type="button" className="copy-btn" onClick={() => copyText(whatsapp.number.slice(-10), 'phone')}>
                  <i className={`fa-solid ${copiedKey === 'phone' ? 'fa-check' : 'fa-copy'}`}></i>
                  {copiedKey === 'phone' ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="payment-method-card card">
              <div className="method-header">
                <i className="fa-solid fa-building-columns method-icon"></i>
                <div>
                  <h3>Bank Transfer (NEFT / IMPS)</h3>
                  <p>Transfer directly to the account below</p>
                </div>
                <button
                  type="button"
                  className="copy-btn copy-all-btn"
                  onClick={() => copyText(
                    `Bank: ${payment.bankName}\nAccount Name: ${payment.accountName}\nAccount Number: ${payment.accountNumber}\nIFSC: ${payment.ifsc}`,
                    'bank-all'
                  )}
                >
                  <i className={`fa-solid ${copiedKey === 'bank-all' ? 'fa-check' : 'fa-copy'}`}></i>
                  {copiedKey === 'bank-all' ? 'Copied' : 'Copy All'}
                </button>
              </div>

              <div className="bank-details-grid">
                <div className="bank-row">
                  <span>Bank</span>
                  <strong>{payment.bankName}</strong>
                </div>
                <div className="bank-row">
                  <span>Account Name</span>
                  <strong>{payment.accountName}</strong>
                </div>
                <div className="bank-row">
                  <span>Account Number</span>
                  <strong className="mono">{payment.accountNumber}</strong>
                  <button type="button" className="copy-btn copy-btn-sm" onClick={() => copyText(payment.accountNumber, 'acc')}>
                    <i className={`fa-solid ${copiedKey === 'acc' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
                <div className="bank-row">
                  <span>IFSC Code</span>
                  <strong className="mono">{payment.ifsc}</strong>
                  <button type="button" className="copy-btn copy-btn-sm" onClick={() => copyText(payment.ifsc, 'ifsc')}>
                    <i className={`fa-solid ${copiedKey === 'ifsc' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="payment-cta-block">
              <div className="utr-input-group">
                <label htmlFor="utr-input">UPI Transaction Reference Number (UTR) <span className="req-star">*</span></label>
                <input
                  id="utr-input"
                  type="text"
                  className="utr-input"
                  placeholder="e.g. 123456789012"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                />
                <p className="utr-hint">Find this 12-digit number in your UPI app's payment history after paying.</p>
                {!utrValid && utr.length > 0 && (
                  <p className="utr-error">Enter a valid transaction reference number to continue.</p>
                )}
              </div>

              <div className="payment-screenshot-note">
                <i className="fa-solid fa-camera"></i>
                After paying, click below — WhatsApp will open with your details
                pre-filled. <strong>Please attach your payment screenshot</strong> in
                the chat before sending.
              </div>

              <button
                className="btn btn-primary w-full payment-confirm-btn"
                onClick={handleConfirm}
                disabled={loading || !utrValid}
              >
                {loading ? (
                  <><i className="fa-solid fa-spinner fa-spin"></i> Opening WhatsApp…</>
                ) : (
                  <><i className="fa-brands fa-whatsapp"></i> I've Paid — Send Confirmation on WhatsApp</>
                )}
              </button>

              <p className="form-privacy-note">
                Your information is 100% confidential. Neeta's team will confirm your
                enrollment shortly after payment verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
