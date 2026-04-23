export default function FeatureCard({ icon, title, subtitle, desc }) {
  return (
    <article className="feature-card fade-up">
      <div className="feature-icon">{icon}</div>
      <h3>
        {title} <span className="subtitle">{subtitle}</span>
      </h3>
      <p>{desc}</p>
    </article>
  );
}
