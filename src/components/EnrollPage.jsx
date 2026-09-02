import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/services';
import { siteData } from '../data/site';
import './EnrollPage.css';

function getInitialServiceId() {
  const requested = new URLSearchParams(window.location.search).get('service');
  return servicesData.find(s => s.id === requested)?.id || servicesData[0].id;
}

export default function EnrollPage() {
  const { contact, packages, programIncludes } = siteData;
  const [serviceId, setServiceId] = useState(getInitialServiceId);
  const [durationIdx, setDurationIdx] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    document.title = 'Enroll Now | Dietitian Neeta — PCOS & Thyroid Diet Expert';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Book your personalized PCOS, Thyroid, or weight loss diet consultation with Certified Nutritionist Neeta Tiwari. Hyderabad & online.');
  }, []);

  const service = servicesData.find(s => s.id === serviceId);
  const currentPackage = packages[service.category] || packages.simple;
  const selectedPricing = currentPackage.pricing[durationIdx] || currentPackage.pricing[0];
  const originalPrice = Math.round(selectedPricing.price / 0.8);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('enrollmentData', JSON.stringify({
      name: form.name,
      phone: form.phone,
      email: form.email,
      program: service.title,
      package: currentPackage.label,
      duration: selectedPricing.label,
      amount: selectedPricing.price
    }));
    window.location.href = '/payment';
  };

  return (
    <section className="enroll-section section-bg-alt">
      <div className="container">
        <a href="/" className="enroll-back-link"><i className="fa-solid fa-arrow-left"></i> Back to Home</a>

        <div className="enroll-grid">
          {/* Left: Program Details */}
          <div className="enroll-info-col reveal-init">
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge">{service.badge}</span>
              <span className="badge" style={{ background: 'rgba(11, 79, 60, 0.1)', color: 'var(--color-primary)' }}>
                <i className="fa-solid fa-layer-group"></i> {currentPackage.label}
              </span>
            </div>

            <h1 className="enroll-program-title">{service.title}</h1>
            <p className="enroll-program-desc">{service.fullDesc}</p>

            {/* Service-Specific Included List */}
            <div className="modal-section-subtitle">
              <i className="fa-solid fa-circle-check"></i> Program Highlights:
            </div>
            <ul className="modal-highlights-list">
              {service.highlights.map((item, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-check check-icon"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Common Package Includes List */}
            <div className="modal-section-subtitle" style={{ marginTop: '1.5rem' }}>
              <i className="fa-solid fa-list-check"></i> Every Package Includes:
            </div>
            <ul className="modal-highlights-list">
              {programIncludes.map((item, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-star check-icon" style={{ color: 'var(--color-accent)' }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="modal-duration-box">
              <i className="fa-regular fa-clock"></i> <strong>Recommended Duration:</strong> {service.duration}
            </div>
          </div>

          {/* Right: Enrollment Form */}
          <div className="enroll-form-col card reveal-init reveal-delay-2">
            <div className="form-header">
              <h3>{contact.formHeading}</h3>
              <p>{contact.formSubheading}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />
              </div>
              <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />

              <label className="enroll-select-label">Program Selected ({currentPackage.label})</label>
              <select value={serviceId} onChange={(e) => { setServiceId(e.target.value); setDurationIdx(1); }}>
                {servicesData.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>

              <div className="duration-cards">
                {currentPackage.pricing.map((p, idx) => (
                  <div
                    key={p.label}
                    className={`duration-card ${idx === durationIdx ? 'active' : ''}`}
                    onClick={() => setDurationIdx(idx)}
                  >
                    <span className="duration-label">{p.label}</span>
                    <div className="duration-price">
                      <span className="price-original">₹{Math.round(p.price / 0.8).toLocaleString('en-IN')}</span>
                      <span className="duration-price-value">₹{p.price.toLocaleString('en-IN')}</span>
                      <span className="discount-badge">20% OFF</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="amount-box">
                <span>Amount to Pay</span>
                <strong>
                  <span className="price-original">₹{originalPrice.toLocaleString('en-IN')}</span>
                  <span className="price-discounted">₹{selectedPricing.price.toLocaleString('en-IN')}</span>
                  <span className="discount-badge">20% OFF</span>
                </strong>
              </div>

              <button type="submit" className="btn btn-primary w-full form-submit-btn">
                <i className="fa-solid fa-arrow-right"></i> Proceed to Payment
              </button>
              <p className="form-privacy-note">{contact.privacyNote}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
