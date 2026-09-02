import React from 'react';
import { transformationsData } from '../data/transformations';
import './Transformations.css';

export default function Transformations() {
  const featured = transformationsData.slice(0, 4);

  return (
    <section id="transformations" className="transformations-section section-bg-alt">
      <div className="container">
        <div className="section-header reveal-init">
          <span className="section-subtitle">Real Results, Real People</span>
          <h2 className="section-title">
            Client <span className="gradient-text">Transformations</span>
          </h2>
          <p className="section-description">
            Explore inspired stories from women who permanently reversed PCOS, normalized thyroid levels, and lost weight with simple kitchen diets.
          </p>
        </div>

        <div className="transform-mini-grid">
          {featured.map((item, idx) => (
            <div
              key={item.id}
              className={`transform-mini-card reveal-init reveal-delay-${(idx % 4) + 1}`}
            >
              <div className="transform-mini-img-box">
                <img
                  src={item.image}
                  alt={`PCOS weight loss diet transformation result ${item.id} — Dietitian Neeta client`}
                  className="transform-mini-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="transform-footer-cta reveal-init">
          <a href="/transformations" className="btn btn-primary">
            <i className="fa-solid fa-images"></i> View More Transformations
          </a>
        </div>
      </div>
    </section>
  );
}
