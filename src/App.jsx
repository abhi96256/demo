import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={isScrolled ? 'scrolled' : ''}
      >
        <div className="container nav-content">
          <a href="#" className="logo" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'baseline', gap: '5px' }}>
            <span style={{ fontSize: '2rem' }}>Δ</span>ERA
          </a>

          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button className="btn-lux" style={{ padding: '0.8rem 2rem', fontSize: '0.7rem' }}>
              BOOK SESSION
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-overlay open"
          >
            <ul className="mobile-links">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video-bg"
          poster="/hero-bg.png"
        >
          {/* Fallback image is used via poster if video not found */}
        </video>
        <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.9))' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0, letterSpacing: '20px' }}
              animate={{ opacity: 1, letterSpacing: '5px' }}
              transition={{ duration: 1.5 }}
              style={{ color: '#FFD700', fontWeight: 'bold' }}
            >
              MAKEUP STUDIO & ACADEMY
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-display"
            >
              <span style={{ color: 'var(--primary)' }}>ΔERA</span> Beauty Salon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ textTransform: 'none', letterSpacing: '2px', color: 'white', fontSize: '1.5rem', marginBottom: '2rem' }}
            >
              Pro. Makeup Artist: <strong>Suman Dayal</strong>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}
            >
              <button className="btn-lux">OUR COURSES</button>
              <button className="btn-lux btn-outline">VIEW PORTFOLIO</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '10rem 0', background: '#050505' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <p style={{ color: 'var(--primary)', letterSpacing: '5px', marginBottom: '1rem' }}>PREMIUM SERVICES</p>
            <h2 className="font-display" style={{ fontSize: '3.5rem', color: 'white' }}>Academy & Studio</h2>
          </motion.div>

          <div className="service-grid">
            {[
              {
                title: 'Professional Makeup',
                img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop',
                tag: 'STUDIO'
              },
              {
                title: 'Makeup Academy',
                img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1976&auto=format&fit=crop',
                tag: 'EDUCATION'
              },
              {
                title: 'Bridal Transformation',
                img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=2070&auto=format&fit=crop',
                tag: 'BRIDAL'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img src={service.img} alt={service.title} />
                <div className="service-info">
                  <p style={{ color: 'var(--primary)', letterSpacing: '3px', fontSize: '0.7rem', fontWeight: 'bold' }}>{service.tag}</p>
                  <h3 className="font-display">{service.title}</h3>
                  <button style={{ background: 'none', border: 'none', color: 'white', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    LEARN MORE <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ background: '#f9f9f9' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1976&auto=format&fit=crop"
                  alt="Founder"
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', background: 'var(--primary)', padding: '2rem', color: 'white', display: 'none', lg: 'block' }}>
                  <p style={{ fontSize: '2rem', fontWeight: '700' }}>15+</p>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>YEARS OF EXCELLENCE</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1rem' }}>OUR PHILOSOPHY</p>
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>We don't just change looks, we inspire confidence.</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Glow & Grace was founded on the principle that luxury should be felt, not just seen. Every touch, every scent, and every cut is designed to elevate your spirit.
              </p>
              <button className="btn-lux">MEET THE TEAM</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" style={{ background: 'black', color: 'white', padding: '10rem 0 4rem', borderTop: '1px solid #222' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
            <div>
              <h2 className="logo" style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '3.5rem' }}>Δ</span>ERA
              </h2>
              <p style={{ color: '#FFD700', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '2rem' }}>Beauty Salon, Makeup Studio & Academy</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                <Instagram size={24} className="hover-primary" style={{ cursor: 'pointer' }} />
                <Facebook size={24} className="hover-primary" style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div>
              <h4 className="font-display" style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>VISIT US</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#ccc' }}>
                <li style={{ display: 'flex', gap: '15px' }}><MapPin size={24} color="var(--primary)" />
                  Pream Nagar, Uncha Gaon Road,<br />Near Sisam Ped, Ballabgarh, FBD
                </li>
                <li style={{ display: 'flex', gap: '15px' }}><Phone size={20} color="var(--primary)" /> +91 8427733428</li>
                <li style={{ display: 'flex', gap: '15px' }}><Clock size={20} color="var(--primary)" /> 10:00 AM - 08:00 PM</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display" style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>GET IN TOUCH</h4>
              <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>For enquiries and admissions:</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', gap: '10px' }}><X size={18} /> suman790devi@gmail.com</p>
              <button className="btn-lux" style={{ width: '100%', justifyContent: 'center' }}>MESSAGE NOW</button>
            </div>
          </div>
          <div style={{ textAlign: 'center', borderTop: '1px solid #222', paddingTop: '4rem', color: '#444', fontSize: '0.8rem' }}>
            <p>&copy; 2024 ΔERA BEAUTY SALON. BY SUMAN DAYAL. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
