import React, { useState, useEffect } from 'react';
import { siteData } from '../data/site';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, nav, whatsapp } = siteData;
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.consultationMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    closeMobileMenu();

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const isHome = window.location.pathname === '/';

      if (isHome) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={brand.logo} alt={brand.name} className="navbar-logo-img" />
          <div className="logo-text">
            <span className="brand-name">{brand.name}</span>
            <span className="brand-tagline">{brand.tagline}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {nav.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href="/enroll" className="btn btn-primary btn-sm nav-cta">
            <i className="fa-solid fa-calendar-check"></i> {nav.ctaText}
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="navbar-logo">
            <img src={brand.logo} alt={brand.name} className="navbar-logo-img" />
            <div className="logo-text">
              <span className="brand-name">{brand.name}</span>
            </div>
          </div>
        </div>
        <div className="mobile-drawer-body">
          {nav.mobileLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          <div className="mobile-drawer-cta">
            <a href="/enroll" onClick={closeMobileMenu} className="btn btn-primary w-full">
              <i className="fa-solid fa-calendar-check"></i> {nav.ctaText}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent w-full"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
