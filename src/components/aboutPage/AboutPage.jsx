import './AboutPage.css'

export default function AboutPage() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-img">
                    <img src="/images/jukimachine.webp" alt="AboutUsImage" />
                </div>

                <div className="hero-text">
                    <span className="hero-label">WELCOME TO</span>
                    <h1>Modern Home</h1>
                    <div className="hero-divider"></div>

                    <p className="hero-paragraph">
                        Modern Home is a family run business with over 30 years of experience
                        in curtains, shading systems and home decor. We have completed
                        thousands of projects, both in commercial spaces and private homes
                        for our customers throughout Paphos.
                    </p>

                    <p className="hero-paragraph">
                        We hand-sew every curtain to each customer's exact measurements,
                        ensuring a perfect fit for any space. We also offer a full range
                        of shading systems — roller blinds, roma blinds, combi blinds,
                        awnings, vertical blinds and many more — covering every need and style.
                    </p>

                    <p className="hero-paragraph">
                        Beyond curtains and shading, we create handmade decorative cushions,
                        rugs, blankets, bedsheets and bedroom pillows — and generally anything
                        related to home linens. Our goal is to offer complete solutions for
                        every corner of your home, with quality and attention to detail.
                    </p>
                </div>
            </section>


            <section className="stats-section">
                <div className="stats-bar">
                    <div className="stat">
                        <span className="stat-number">1981</span>
                        <span className="stat-label">Company Established</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">Family</span>
                        <span className="stat-label">Run Business</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Projects Done</span>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-text">
                        <h2>Building high quality curtains &amp; shading</h2>
                        <p>
                            WE CAN BUILD YOU THE HOME OF YOUR DREAMS — GIVE US A CALL ON{' '}
                            <span className="cta-phone">+357 26 948181</span> NOW
                        </p>
                    </div>
 
                    <a href="/contact" className="cta-btn">CONTACT US</a>
                </div>
            </section>

        </>
    );
}