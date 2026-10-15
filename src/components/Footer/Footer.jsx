// src/components/Footer.jsx
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* About Us */}
          <div className="footer-col">
            <h4 className="footer-heading">ABOUT US</h4>
            <p className="footer-about-text">
              Modern Home is a family run business proudly serving the Paphos
              region with quality curtains, shading systems and home decor.
            </p>
          </div>

          {/* Useful Information */}
          <div className="footer-col">
            <h4 className="footer-heading">USEFULL INFORMATION</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/gallery">Projects</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-col">
            <h4 className="footer-heading">CONTACT US</h4>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <a href="https://maps.app.goo.gl/jFHQRJzxALmYKF1Q7" target='_blank' rel="noopener noreferrer"><span>Neofytou Georgiou 3, Paphos 8020</span></a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z" />
                </svg>
                <a href="tel:+35726948181">+357 26 948181</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                <a href="mailto:elenamiixail77@icloud.com">info@modernhome.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Mon-Fri: 09:30am - 13:00pm & 15:00pm - 18:00pm <br /> Wed & Sat: 09:30am - 13:00pm <br />Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Modern Home. All Rights Reserved.</p>
      </div>
    </footer>
  );
}