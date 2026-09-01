import React from 'react';
import { transformationsData } from '../data/transformations';
import './Transformations.css';
import './TransformationsPage.css';

export default function TransformationsPage() {
  return (
    <section className="transformations-page-section section-bg-alt">
      <div className="container">
        <a href="/" className="enroll-back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </a>

        <div className="section-header reveal-init">
          <span className="section-subtitle">Real Results, Real People</span>
          <h2 className="section-title">
            All Client <span className="gradient-text">Transformations</span>
          </h2>
          <p className="section-description">
            Explore every inspired story from women who permanently reversed PCOS, normalized thyroid levels, and lost weight with simple kitchen diets.
          </p>
        </div>

        <div className="transformations-grid">
          {transformationsData.map((item, idx) => (
            <div
              key={item.id}
              className={`transform-card reveal-init reveal-delay-${(idx % 3) + 1}`}
            >
              <div className="card-image-box">
                <img
                  src={item.image}
                  alt={`Client Transformation ${item.id}`}
                  className="transform-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="transform-footer-cta reveal-init">
          <p>Want to be our next success story?</p>
          <a href="/enroll" className="btn btn-primary">
            <i className="fa-solid fa-sparkles"></i> Start Your Transformation Today
          </a>
        </div>
      </div>
    </section>
  );
}
