import React, { useEffect } from 'react';
import { siteData } from '../data/site';
import './AboutPage.css';

export default function AboutPage() {
  const { about, social } = siteData;

  useEffect(() => {
    document.title = 'About Neeta Tiwari | Certified Nutritionist — PCOS & Thyroid Expert';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Meet Certified Nutritionist Neeta Tiwari — her journey, philosophy, and 10+ years of expertise in reversing PCOS, Thyroid, and managing weight with natural Indian diets.');
  }, []);

  return (
    <main className="about-page">
      {/* Header */}
      <section className="about-page-header">
        <div className="container">
          <a href="/" className="back-link reveal-init">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </a>
          <span className="section-subtitle reveal-init">{about.subtitle}</span>
          <h1 className="section-title reveal-init">
            {about.titlePrefix}<span className="gradient-text">{about.titleHighlight}</span>
          </h1>
          <p className="about-page-lead reveal-init">{about.lead}</p>
        </div>
      </section>

      {/* Portrait + Story Quote */}
      <section className="about-page-intro section-bg-alt">
        <div className="container about-page-intro-grid">
          <div className="about-image-col reveal-init">
            <div className="about-image-card">
              <img src={about.image} alt={about.imageAlt} className="about-portrait" loading="lazy" />
              <div className="about-experience-badge">
                <span className="exp-num">{about.experienceBadge.num}</span>
                <span className="exp-label">{about.experienceBadge.label}</span>
              </div>
            </div>
            <div className="social-trust-card card-glass">
              <div className="trust-header">
                <i className="fa-brands fa-instagram instagram-icon"></i>
                <div>
                  <strong>{social.instagramHandle}</strong>
                  <span>{about.location}</span>
                </div>
              </div>
              <div className="trust-stats">
                <div className="t-stat"><strong>{social.posts}</strong><span>Posts</span></div>
                <div className="t-stat"><strong>{social.followers}</strong><span>Followers</span></div>
                <div className="t-stat"><strong>{social.clients}</strong><span>Clients</span></div>
              </div>
            </div>
          </div>

          <div>
            <div className="about-story-box card reveal-init reveal-delay-1">
              <div className="story-icon"><i className="fa-solid fa-quote-left"></i></div>
              <p className="story-text">
                "{about.storyQuoteBefore}<strong>{about.storyQuoteBold}</strong>{about.storyQuoteAfter}"
              </p>
            </div>

            {about.philosophy && (
              <div className="philosophy-box card-glass reveal-init reveal-delay-2" style={{ marginTop: '1.5rem', padding: '1.5rem 1.75rem', borderRadius: '16px', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <i className="fa-solid fa-seedling" style={{ fontSize: '2rem', color: 'var(--color-primary-light)' }}></i>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--color-primary)', lineHeight: '1.6' }}>
                  "{about.philosophy}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {about.photoGallery && about.photoGallery.length > 0 && (
        <section className="gallery-scroll-section">
          <div className="gallery-scroll-row">
            {about.photoGallery.map((src, idx) => (
              <img key={src} src={src} alt={`Neeta Tiwari ${idx + 1}`} className="gallery-scroll-img" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header reveal-init">
            <span className="section-subtitle">My Journey</span>
            <h2 className="section-title">From <span className="gradient-text">Patient to Practitioner</span></h2>
          </div>

          <div className="journey-timeline">
            {about.journey.map((step, idx) => (
              <div key={step.title} className={`journey-step reveal-init reveal-delay-${(idx % 3) + 1}`}>
                <div className="journey-step-icon">
                  <i className={step.icon}></i>
                </div>
                <div className="journey-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs / Story Cards */}
      <section className="beliefs-section section-bg-alt">
        <div className="container">
          <div className="section-header reveal-init">
            <span className="section-subtitle">What I Believe</span>
            <h2 className="section-title">My <span className="gradient-text">Approach to Nutrition</span></h2>
          </div>

          <div className="beliefs-grid">
            {about.beliefs.map((belief, idx) => (
              <div key={belief.title} className={`belief-card card reveal-init reveal-delay-${(idx % 3) + 1}`}>
                <div className="belief-icon"><i className={belief.icon}></i></div>
                <h3>{belief.title}</h3>
                <p>{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat Badges */}
      <section className="about-page-stats">
        <div className="container">
          <div className="stat-badges-grid">
            {about.statCards.map(card => (
              <div className="stat-card reveal-init" key={card.title}>
                <div className="stat-card-icon"><i className={card.icon}></i></div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta-row reveal-init">
            <a href="/#contact" className="btn btn-primary">
              <i className="fa-solid fa-arrow-right"></i> Start Your Own Journey
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
