import React, { useState } from 'react';
import { testimonialsData, textTestimonialImages } from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg-blur"></div>

      <div className="container">
        <div className="section-header reveal-init">
          <span className="section-subtitle">Real Stories</span>
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-description">
            Watch real video stories or read messages from women who reversed PCOS, managed Thyroid, and achieved sustainable weight loss.
          </p>
        </div>

        <div className="testimonial-tabs reveal-init">
          <button
            type="button"
            className={`testimonial-tab-btn ${activeTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveTab('video')}
          >
            <i className="fa-solid fa-video"></i> Video
          </button>
          <button
            type="button"
            className={`testimonial-tab-btn ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
          >
            <i className="fa-solid fa-comment-dots"></i> Text
          </button>
        </div>

        {activeTab === 'video' ? (
          /* 4-Column Reel Video Testimonial Grid */
          <div className="testimonials-reel-grid">
            {testimonialsData.map((item, idx) => (
              <div
                key={item.id}
                className={`testimonial-reel-card reveal-init reveal-delay-${idx + 1}`}
              >
                <div className="reel-thumbnail-box">
                  <video
                    src={item.videoUrl}
                    controls
                    playsInline
                    className="reel-video"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Horizontal-scroll text testimonial screenshots */
          <div className="testimonials-text-scroll-row">
            {textTestimonialImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Client testimonial ${idx + 1}`}
                className="testimonial-text-img"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
