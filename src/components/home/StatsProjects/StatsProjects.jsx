
import './StatsProjects.css';

export default function StatsProjects() {
  const stats = [
    { id: 1, number: '30+', label: 'Years Experience' },
    { id: 2, number: '4.8★', label: 'Google Rating', link: 'https://maps.app.goo.gl/nxWfMCEHuHPL9XXW8' },
    { id: 3, number: '10000+', label: 'Projects Done' },
  ];

  const badges = [
    { id: 1, title: 'Made With Care' },
    { id: 2, title: 'Custom Made' },
    { id: 3, title: 'Premium Quality' },
  ];

  return (
    <section className="sp-section">
      {/* Stats bar */}
      <div className="sp-stats-bar">
        {stats.map((stat) =>
          stat.link ? (
            <a
              key={stat.id}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-stat sp-stat-link"
            >
              <span className="sp-stat-number">{stat.number}</span>
              <span className="sp-stat-label">{stat.label}</span>
            </a>
          ) : (
            <div className="sp-stat" key={stat.id}>
              <span className="sp-stat-number">{stat.number}</span>
              <span className="sp-stat-label">{stat.label}</span>
            </div>
          )
        )}
      </div>

      {/* Projects content */}
      <div className="sp-container">
        <div className="sp-text">
          <span className="sp-label">PROJECTS</span>
          <h2 className="sp-title">
            We design &amp; create<br />curtains to suit your lifestyle...
          </h2>
          <div className="sp-divider"></div>
        </div>

        <div className="sp-side">
          <div className="sp-badges">
            {badges.map((badge) => (
              <div className="sp-badge" key={badge.id}>
                <span>{badge.title}</span>
              </div>
            ))}
          </div>

          <a href="/gallery" className="sp-btn">
            VIEW OUR GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}