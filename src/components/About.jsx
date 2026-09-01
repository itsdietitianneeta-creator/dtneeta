import React from 'react';
import { siteData } from '../data/site';
import './About.css';

export default function About() {
  const { about, social } = siteData;

  return (
    <section id="about" className="about-section section-bg-alt">
      <div className="container">
        <div className="about-grid">

          {/* Left Column: Photo Frame with Badges */}
          <div className="about-image-col reveal-init">
            <div className="about-image-card">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="about-portrait"
                loading="lazy"
              />
              <div className="about-experience-badge">
                <span className="exp-num">{about.experienceBadge.num}</span>
                <span className="exp-label">{about.experienceBadge.label}</span>
              </div>
            </div>

            {/* Social Trust Card */}
            <div className="social-trust-card card-glass">
              <div className="trust-header">
                <i className="fa-brands fa-instagram instagram-icon"></i>
                <div>
                  <strong>{social.instagramHandle}</strong>
                  <span>{about.location}</span>
                </div>
              </div>
              <div className="trust-stats">
                <div className="t-stat">
                  <strong>{social.posts}</strong>
                  <span>Posts</span>
                </div>
                <div className="t-stat">
                  <strong>{social.followers}</strong>
                  <span>Followers</span>
                </div>
                <div className="t-stat">
                  <strong>{social.clients}</strong>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Short Teaser */}
          <div className="about-content-col reveal-init reveal-delay-1">
            <span className="section-subtitle">{about.subtitle}</span>
            <h2 className="section-title">
              {about.titlePrefix}<span className="gradient-text">{about.titleHighlight}</span>
            </h2>
            <p className="about-lead">{about.lead}</p>

            <div className="about-story-box card">
              <div className="story-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="story-text">
                "{about.storyQuoteBefore}<strong>{about.storyQuoteBold}</strong>{about.storyQuoteAfter}"
              </p>
            </div>

            <div className="about-cta-row">
              <a href="/about" className="btn btn-primary">
                <i className="fa-solid fa-arrow-right"></i> {about.knowMoreText}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
