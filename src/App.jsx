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
        <div className="container nav-content" style={{ position: 'relative' }}>
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
            <button className="btn-lux nav-book-btn" style={{ padding: '0.8rem 2rem', fontSize: '0.7rem' }}>
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
              <button className="btn-lux">JOIN ACADEMY</button>
              <button className="btn-lux btn-outline">VIEW CATALOG</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academy & Studio Section (The Improved Section) */}
      <section id="services" style={{ padding: '10rem 0', background: '#050505' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '8rem' }}
          >
            <p style={{ color: 'var(--primary)', letterSpacing: '5px', marginBottom: '1rem' }}>ELITE SERVICES</p>
            <h2 className="font-display" style={{ fontSize: '4rem', color: 'white' }}>Academy & Studio</h2>
            <div style={{ width: '80px', height: '2px', background: 'var(--primary)', margin: '2rem auto' }}></div>
          </motion.div>

          <div className="service-grid">
            {[
              {
                title: 'High-End Makeup',
                img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1976&auto=format&fit=crop',
                tag: 'STUDIO',
                desc: 'Bespoke bridal and editorial makeup for every occasion.'
              },
              {
                title: 'Professional Academy',
                img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',
                tag: 'ACADEMY',
                desc: 'Certified courses for aspiring makeup artists.'
              },
              {
                title: 'Bridal Transformation',
                img: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1920&auto=format&fit=crop',
                tag: 'SIGNATURE',
                desc: 'Luxury bridal packages including hair, draping, and makeup.'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                style={{ border: 'none' }}
              >
                <img src={service.img} alt={service.title} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))' }}></div>
                <div className="service-info">
                  <p style={{ color: 'var(--primary)', letterSpacing: '4px', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '1rem' }}>{service.tag}</p>
                  <h3 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>{service.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: '1.6' }}>{service.desc}</p>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', padding: '0', fontSize: '0.8rem', letterSpacing: '2px' }}>
                    VIEW DETAILS <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Academy Excellence (Details/Stats) */}
      <section id="academy" style={{ background: 'white', color: 'black', padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
            <div className="stat-item">
              <p className="stat-number">500+</p>
              <p style={{ letterSpacing: '3px', fontSize: '0.8rem', fontWeight: '600' }}>STUDENTS GRADUATED</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">15+</p>
              <p style={{ letterSpacing: '3px', fontSize: '0.8rem', fontWeight: '600' }}>YEARS OF ARTISTRY</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">50+</p>
              <p style={{ letterSpacing: '3px', fontSize: '0.8rem', fontWeight: '600' }}>AWARDS WON</p>
            </div>
          </div>

          <div style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display" style={{ fontSize: '4rem', lineHeight: '1', marginBottom: '2rem' }}>Learn from the best in the industry.</h2>
              <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '2rem' }}>Our academy provides hands-on training using international products and techniques. From basic to advanced pro levels.</p>
              <ul style={{ listStyle: 'none', marginBottom: '3rem' }}>
                {['Basic to Pro Makeup', 'Advanced Hair Styling', 'Skin & Aesthetics', 'Bridal Specialty'].map(item => (
                  <li key={item} style={{ padding: '0.8rem 0', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #eee' }}>
                    <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-lux" style={{ background: 'black', color: 'white' }}>DOWNLOAD BROCHURE</button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} alt="Training" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Pricing Menu (Luxury List) */}
      <section id="pricing" style={{ background: '#0a0a0a', padding: '10rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <p style={{ color: 'var(--primary)', letterSpacing: '5px' }}>ELITE MENU</p>
            <h2 className="font-display" style={{ fontSize: '3.5rem' }}>Service Pricing</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            {/* Bridal Package */}
            <div className="price-card">
              <h3 className="font-display" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Bridal Elite</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>The complete transformation for your wedding day.</p>
              <ul className="price-list">
                <li><span>HD/Airbrush Makeup</span> <span>₹ 15,000+</span></li>
                <li><span>International Hair Styling</span> <span>Included</span></li>
                <li><span>Draping & Accessories</span> <span>Included</span></li>
                <li><span>Pre-Bridal Glow Up</span> <span>Optional</span></li>
              </ul>
              <button className="btn-lux" style={{ width: '100%', background: 'white', color: 'black' }}>BOOK PACKAGE</button>
            </div>

            {/* Party & Occasion */}
            <div className="price-card">
              <h3 className="font-display" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Studio Glam</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Perfect for parties, events, and photoshoots.</p>
              <ul className="price-list">
                <li><span>Party Makeup</span> <span>₹ 3,500</span></li>
                <li><span>Engagement Makeup</span> <span>₹ 7,500</span></li>
                <li><span>Editorial/High-Fashion</span> <span>₹ 5,000</span></li>
                <li><span>Quick Styling session</span> <span>₹ 1,500</span></li>
              </ul>
              <button className="btn-lux" style={{ width: '100%', background: 'white', color: 'black' }}>BOOK GLAM</button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Testimonials (Client Stories) */}
      <section id="testimonials" style={{ background: 'white', color: 'black', padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--primary)', letterSpacing: '3px' }}>TESTIMONIALS</p>
              <h2 className="font-display" style={{ fontSize: '4rem', marginBottom: '2rem' }}>What our clients say.</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '50%', cursor: 'pointer' }}><ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} /></div>
                <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '50%', cursor: 'pointer' }}><ArrowRight size={20} /></div>
              </div>
            </div>
            <div>
              <div className="testimonial-card">
                <p className="testimonial-quote">"Suman Dayal is a true magician. My bridal makeup was exactly what I dreamed of—elegant, glowing, and timeless. The academy students are also so professional!"</p>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>Priya Sharma</p>
                  <p style={{ color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '2px' }}>HAPPY BRIDE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918427733428"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          zIndex: 9999,
          textDecoration: 'none'
        }}
      >
        <Phone size={30} fill="white" />
      </motion.a>

      {/* Footer / Contact Section */}
      <footer id="contact" style={{ background: 'black', color: 'white', padding: '10rem 0 4rem', borderTop: '1px solid #222' }}>
        <div className="container">
          <div className="footer-grid-custom">
            <div className="footer-section">
              <h2 className="logo" style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '3.5rem' }}>Δ</span>ERA
              </h2>
              <p style={{ color: '#FFD700', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '2rem' }}>Beauty Salon, Makeup Studio & Academy</p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', justifyContent: 'inherit' }}>
                <Instagram size={24} className="hover-primary" style={{ cursor: 'pointer' }} />
                <Facebook size={24} className="hover-primary" style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div className="footer-section">
              <h4 className="font-display" style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>VISIT US</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#ccc' }}>
                <li style={{ display: 'flex', gap: '15px', justifyContent: 'inherit' }}><MapPin size={24} color="var(--primary)" />
                  Pream Nagar, Uncha Gaon Road,<br />Near Sisam Ped, Ballabgarh, FBD
                </li>
                <li style={{ display: 'flex', gap: '15px', justifyContent: 'inherit' }}><Phone size={20} color="var(--primary)" /> +91 8427733428</li>
                <li style={{ display: 'flex', gap: '15px', justifyContent: 'inherit' }}><Clock size={20} color="var(--primary)" /> 10:00 AM - 08:00 PM</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="font-display" style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>GET IN TOUCH</h4>
              <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>For enquiries and admissions:</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'inherit' }}>
                <Instagram size={18} color="var(--primary)" /> suman790devi@gmail.com
              </p>
              <button
                className="btn-lux"
                style={{ width: '100%', maxWidth: '400px', justifyContent: 'center', margin: '0 auto' }}
                onClick={() => window.open('https://wa.me/918427733428', '_blank')}
              >
                MESSAGE NOW
              </button>
            </div>
          </div>
          <div style={{ textAlign: 'center', borderTop: '1px solid #222', paddingTop: '4rem', color: '#444', fontSize: '0.8rem' }}>
            <p>&copy; 2026 ΔERA BEAUTY SALON. BY SUMAN DAYAL. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
