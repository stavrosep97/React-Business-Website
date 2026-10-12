
import './AboutUs.css';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/shop.webp" alt="Modern Home - Ο χώρος μας" />
        </div>

        <div className="about-text">
          <span className="about-label">ABOUT US</span>
          <h2 className="about-title">
            Modern Home<br />Curtains &amp; Blinds.
          </h2>
          <div className="about-divider"></div>

          <p className="about-paragraph">
            We are the leading curtains and shading systems store in Paphos,
            specializing in providing quality solutions for residential and
            commercial spaces.
          </p>
          <p className="about-paragraph">
            Our team combines the finest materials with meticulous craftsmanship,
            creating functional yet aesthetic results fully tailored to your needs.
          </p>

          <Link to="/about" className="about-btn">
            <span>ABOUT US</span>
            <span className="about-btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
