import React from 'react';
import { testimonialsData } from '../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-bg-blur"></div>

      <div className="container">
        <div className="section-header reveal-init">
          <span className="section-subtitle">Real Video Stories</span>
          <h2 className="section-title">
            Client <span className="gradient-text">Video Testimonials</span>
          </h2>
          <p className="section-description">
            Watch real video stories from women who reversed PCOS, managed Thyroid, and achieved sustainable weight loss.
          </p>
        </div>

        {/* 4-Column Reel Video Testimonial Grid */}
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
      </div>
    </section>
  );
}
