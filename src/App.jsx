import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import EnrollPage from './components/EnrollPage';
import TransformationsPage from './components/TransformationsPage';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const path = window.location.pathname;

  // Trigger IntersectionObserver for reveal animations
  useScrollReveal();

  if (path === '/about') {
    return (
      <div className="app-root">
        <Navbar />
        <AboutPage />
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path === '/enroll') {
    return (
      <div className="app-root">
        <Navbar />
        <EnrollPage />
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (path === '/transformations') {
    return (
      <div className="app-root">
        <Navbar />
        <TransformationsPage />
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Transformations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
