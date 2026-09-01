import React from 'react';
import { siteData } from '../data/site';
import './Hero.css';

export default function Hero() {
  const { hero } = siteData;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content reveal-init">
          <div className="badge hero-badge">
            <i className={hero.badgeIcon}></i> {hero.badge}
          </div>

          <h1 className="hero-title">
            {hero.titlePrefix}<span className="gradient-text">{hero.titleHighlight}</span>
          </h1>

          <p className="hero-subheadline">{hero.subheadline}</p>

          <div className="hero-cta-group">
            <a href="/enroll" className="btn btn-primary btn-lg hero-btn-primary">
              <i className="fa-solid fa-calendar-check"></i> {hero.ctaPrimary}
            </a>
            <a href="/#transformations" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-sparkles"></i> {hero.ctaSecondary}
            </a>
          </div>

          {/* Key Stats Bar */}
          <div className="hero-stats-row">
            {hero.stats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div className="stat-pill">
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {idx < hero.stats.length - 1 && <div className="stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Hero Visual Column */}
        <div className="hero-image-wrapper reveal-init reveal-delay-2">
          <div className="hero-image-frame">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="hero-portrait"
            />

            {/* Floating Glass Badges */}
            {hero.floatingBadges.map((badge, idx) => (
              <div
                key={badge.title}
                className={`floating-card float-card-${idx + 1} animate-float`}
                style={idx === 1 ? { animationDelay: '-2.5s' } : undefined}
              >
                <div className={`float-icon ${badge.iconClass}`}>
                  <i className={badge.icon}></i>
                </div>
                <div className="float-text">
                  <strong>{badge.title}</strong>
                  <span>{badge.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
