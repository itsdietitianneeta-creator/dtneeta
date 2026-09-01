import React from 'react';
import './ServiceModal.css';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="service-modal-card card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-header">
          <div className="modal-icon">
            <i className={service.icon}></i>
          </div>
          <div>
            <span className="badge">{service.badge}</span>
            <h3 className="modal-title">{service.title}</h3>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-full-desc">{service.fullDesc}</p>

          <div className="modal-section-subtitle">
            <i className="fa-solid fa-circle-check"></i> What's Included in the Program:
          </div>

          <ul className="modal-highlights-list">
            {service.highlights.map((item, idx) => (
              <li key={idx}>
                <i className="fa-solid fa-check check-icon"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="modal-duration-box">
            <i className="fa-regular fa-clock"></i> <strong>Recommended Duration:</strong> {service.duration}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <a className="btn btn-primary" href={`/enroll?service=${service.id}`}>
            <i className="fa-solid fa-calendar-check"></i> Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
