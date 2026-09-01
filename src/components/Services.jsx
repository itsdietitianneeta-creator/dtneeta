import React, { useState } from 'react';
import { servicesData } from '../data/services';
import ServiceModal from './ServiceModal';
import './Services.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="programs" className="services-section">
      <div className="container">
        <div className="section-header reveal-init">
          <span className="section-subtitle">Tailored Health Programs</span>
          <h2 className="section-title">
            Specialized <span className="gradient-text">Nutrition Programs</span>
          </h2>
          <p className="section-description">
            Scientifically backed, sustainable diet programs designed specifically for PCOS reversal, Thyroid health, and permanent weight loss.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card card reveal-init reveal-delay-${(index % 3) + 1}`}
            >
              <div className="service-card-top">
                <div className="service-icon-box">
                  <i className={service.icon}></i>
                </div>
                <span className="badge service-badge">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>

              <div className="service-card-footer">
                <button 
                  className="btn btn-secondary btn-sm pill-btn"
                  onClick={() => setSelectedService(service)}
                >
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
