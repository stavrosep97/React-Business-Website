import './ContactPage.css';

export default function ContactPage() {
    const contactMethods = [
        {
            id: 1,
            label: 'Call Us',
            value: '+357 26 948181',
            link: 'tel:+35726948181',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z" />
                </svg>
            ),
        },
        {
            id: 2,
            label: 'Email Us',
            value: 'info@modernhome.com',
            link: 'mailto:info@modernhome.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                </svg>
            ),
        },
        {
            id: 3,
            label: 'WhatsApp',
            value: 'Chat with us',
            link: 'https://wa.me/35726948181', // ← άλλαξέ το με τον πραγματικό κινητό αριθμό
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.8c2.24 0 4.34.87 5.92 2.46a8.3 8.3 0 0 1 2.44 5.92c0 4.61-3.75 8.36-8.37 8.36a8.4 8.4 0 0 1-4.26-1.16l-.3-.18-3.11.82.83-3.03-.2-.31a8.3 8.3 0 0 1-1.28-4.43c0-4.62 3.75-8.37 8.37-8.37m-4.5 4.53c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.42.52.6.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.78-1.86-.2-.48-.41-.42-.56-.42z" />
                </svg>
            ),
        },
        {
            id: 4,
            label: 'Instagram',
            value: '@modernhome_paphos',
            link: 'https://instagram.com/modern_____home/', // ← άλλαξέ το με το πραγματικό username
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <section className="contact-section">
                <div className="contact-header">
                    <span className="contact-label">GET IN TOUCH</span>
                    <h1>Contact Us</h1>
                    <div className="contact-divider"></div>
                    <p className="contact-lead">
                        Have a question or want a quote? Reach out to us — we'd love to help
                        bring your project to life.
                    </p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <span className="contact-info-label">Address</span>
                            <a
                                href="https://maps.app.goo.gl/jFHQRJzxALmYKF1Q7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-info-value"
                            >
                                Neofytou Georgiou 3, Paphos 8020
                            </a>
                        </div>
                        <div className="contact-info-item">
                            <span className="contact-info-label">Phone</span>
                            <a href="tel:+35726948181" className="contact-info-value">+357 26 948181</a>
                        </div>
                        <div className="contact-info-item">
                            <span className="contact-info-label">Email</span>
                            <a href="mailto:info@modernhome.com" className="contact-info-value">info@modernhome.com</a>
                        </div>
                        <div className="contact-info-item">
                            <span className="contact-info-label">Working Hours</span>
                            <span className="contact-info-value">Mon-Sat: 09:00am - 18:00pm</span>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            title="Modern Home Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.757430615673!2d32.4227937!3d34.7868814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7078ac01bfed5%3A0x8a62d035e3c0b48a!2sMODERN%20HOME!5e0!3m2!1sen!2s!4v1783507733256!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="quick-contact-section">
                <div className="quick-contact-container">
                    <h2>Reach Out Instantly</h2>
                    <p className="quick-contact-subtitle">Pick whatever's easiest for you</p>

                    <div className="quick-contact-grid">
                        {contactMethods.map((method) => (
                            <a
                                href={method.link}
                                key={method.id}
                                target={method.link.startsWith('http') ? '_blank' : undefined}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="quick-contact-card"
                            >
                                <div className="quick-contact-icon">{method.icon}</div>
                                <span className="quick-contact-label">{method.label}</span>
                                <span className="quick-contact-value">{method.value}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}