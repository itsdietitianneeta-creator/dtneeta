import React from 'react';
import { siteData } from '../data/site';
import './Contact.css';

export default function Contact() {
  const { contact, social, whatsapp } = siteData;
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.consultationMessage)}`;

  return (
    <section id="contact" className="contact-section section-bg-alt">
      <div className="container">
        <div className="section-header reveal-init">
          <span className="section-subtitle">{contact.subtitle}</span>
          <h2 className="section-title">
            {contact.titlePrefix}<span className="gradient-text">{contact.titleHighlight}</span>
          </h2>
          <p className="section-description">{contact.lead}</p>
        </div>

        {/* Horizontal Info Row */}
        <div className="contact-info-row reveal-init">
          <div className="info-item-card card">
            <div className="info-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h4>Practice Location</h4>
              <p>{contact.location}</p>
            </div>
          </div>

          <div className="info-item-card card">
            <div className="info-icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <h4>Instagram Community</h4>
              <p>
                <a href={social.instagramUrl} target="_blank" rel="noreferrer" className="contact-link">
                  {social.instagramHandle} ({social.followers})
                </a>
              </p>
            </div>
          </div>

          <div className="info-item-card card">
            <div className="info-icon whatsapp-bg">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <h4>Direct WhatsApp</h4>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-accent btn-sm whatsapp-quick-btn">
                <i className="fa-brands fa-whatsapp"></i> Chat Now
              </a>
            </div>
          </div>
        </div>

        <div className="contact-enroll-cta reveal-init">
          <a href="/enroll" className="btn btn-primary btn-lg">
            <i className="fa-solid fa-calendar-check"></i> Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
