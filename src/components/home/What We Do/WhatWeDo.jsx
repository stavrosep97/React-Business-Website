import './WhatWeDo.css';

export default function WhatWeDo() {
  const services = [
    {
      id: 1,
      image: '/images/services1.webp',
      title: 'Curtains',
    },
    {
      id: 2,
      image: '/images/services2.webp',
      title: 'Shading Systems',
    },
    {
      id: 3,
      image: '/images/services3.webp',
      title: 'Decor',
    },
  ];

  return (
    <section className="wwd-section">
      <div className="wwd-container">
        <div className="wwd-text">
          <span className="wwd-label">WHAT WE DO</span>
          <h2 className="wwd-title">
            Transform<br />Your Home.
          </h2>
          <div className="wwd-divider"></div>

          <p className="wwd-paragraph">
            Modern Home offers complete solutions in curtains, shading
            systems, and home decor, tailored to the needs of every space.
            Get in touch with us today to see how we can help bring out the
            best in your home or business.
          </p>

          <a href="/contact" className="wwd-btn">
            CONTACT US
          </a>
        </div>

        <div className="wwd-cards">
          {services.map((service) => (
            <div className="wwd-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <div className="wwd-card-label">{service.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}