import React from 'react';
import { siteData } from '../data/site';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, social, footer, whatsapp } = siteData;
  const whatsappUrl = `https://wa.me/${whatsapp.number}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">

          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo">
              <img src={brand.logo} alt={brand.name} className="footer-logo-img" />
              <div className="logo-text">
                <span className="brand-name text-white">{brand.name}</span>
                <span className="brand-tagline">PCOS & Thyroid Specialist</span>
              </div>
            </a>
            <p className="footer-bio">{footer.bio}</p>

            <div className="social-links-row">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-btn instagram-btn"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href={social.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Neeta Tiwari"
                className="social-btn facebook-btn"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-btn whatsapp-btn"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footer.quickLinks.map(link => (
                <li key={link.href + link.label}><a href={link.href}><i className="fa-solid fa-angle-right"></i> {link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Key Specializations */}
          <div className="footer-links-col">
            <h4>Specializations</h4>
            <ul className="footer-links">
              {footer.specializations.map(item => (
                <li key={item}><a href="/#programs"><i className="fa-solid fa-check"></i> {item}</a></li>
              ))}
            </ul>
          </div>

          {/* Location & Practice Info */}
          <div className="footer-links-col">
            <h4>Practice Location</h4>
            <p className="footer-address">
              <i className="fa-solid fa-location-dot"></i> {siteData.about.location}, India
            </p>
            <p className="footer-contact-item">
              <i className="fa-brands fa-instagram"></i> {social.instagramHandle} ({social.followers})
            </p>
            <div className="footer-cta-box">
              <a href="/enroll" className="btn btn-primary btn-sm w-full">
                <i className="fa-solid fa-calendar-check"></i> Book Consultation
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <p>© {currentYear} {brand.name} (Neeta Tiwari). All Rights Reserved.</p>
          <div className="footer-sub-links">
            {footer.bottomLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span>•</span>}
                <a href={link.href}>{link.label}</a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
