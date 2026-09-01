import React from 'react';
import { siteData } from '../data/site';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const { whatsapp } = siteData;
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.floatingMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Dietitian Neeta on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-tooltip">{whatsapp.floatingTooltip}</span>
    </a>
  );
}
