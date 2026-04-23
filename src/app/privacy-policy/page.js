'use client';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="container">
        <section className="hero-card" aria-labelledby="privacy-title">
          <span className="eyebrow">Privacy & Data Transparency</span>
          <h1 id="privacy-title" style={{ margin: 0 }}>
            Privacy Policy
          </h1>
          <p>
            Zodiac Mind is built with a privacy-first approach. This page explains what information
            may be used inside the app, how it supports horoscope features, and how your data stays
            under your control.
          </p>
          <div className="hero-meta">
            <span>Last updated: March 31, 2026</span>
            <span>Support: support@zodiacmind.in</span>
          </div>
        </section>

        <section className="summary-grid" aria-label="Privacy highlights">
          <article className="summary-card">
            <strong>No account required</strong>
            <p>You can use Zodiac Mind without creating an account or signing in.</p>
          </article>
          <article className="summary-card">
            <strong>Processed on your device</strong>
            <p>
              Horoscope generation and compatibility calculations are performed locally on your
              device.
            </p>
          </article>
          <article className="summary-card">
            <strong>Limited analytics</strong>
            <p>
              Firebase Analytics may be used for anonymized app usage insights to improve the
              experience.
            </p>
          </article>
        </section>

        <section className="policy-grid" aria-label="Detailed privacy information">
          <article className="policy-card">
            <h2>No Account Required</h2>
            <p>
              Zodiac Mind does not require you to create an account or sign in. You can use all
              features of the app without providing any account-related information.
            </p>
          </article>

          <article className="policy-card">
            <h2>Information You Provide</h2>
            <p>
              The app may ask for details such as your name, date of birth, time of birth, and birth
              location.
            </p>
            <p>
              These details are used only for horoscope charts, compatibility analysis, and
              downloadable PDF reports.
            </p>
          </article>

          <article className="policy-card">
            <h2>Data Storage and Usage</h2>
            <p>We do not collect, store, or transmit your personal data to external servers.</p>
            <ul className="policy-list">
              <li>Horoscope generation happens locally on your device.</li>
              <li>Compatibility matching is performed within the app.</li>
              <li>Your personal astrology details remain under your control.</li>
            </ul>
          </article>

          <article className="policy-card">
            <h2>Analytics and Advertising</h2>
            <p>
              We use Firebase Analytics to understand app engagement and feature usage in an
              anonymized way.
            </p>
            <p>
              Zodiac Mind may use Google AdMob in the future. If enabled, AdMob may use device
              information and advertising identifiers for personalized or non-personalized ads, and
              users can manage preferences in device settings.
            </p>
          </article>

          <article className="policy-card">
            <h2>Notifications and Third-Party Services</h2>
            <p>
              The app may request permission to send notifications for reminders or important
              updates. You can disable notifications at any time in your device settings.
            </p>
            <p>
              Third-party services currently include Firebase Analytics and may include Google AdMob
              to help improve performance and user experience.
            </p>
          </article>

          <article className="policy-card">
            <h2>Children’s Privacy and Security</h2>
            <p>
              Zodiac Mind is not specifically directed toward children under 13, and we do not
              knowingly collect personal information from children.
            </p>
            <p>
              Because personal data is processed locally and not transmitted to our servers, your
              information stays on your device and remains under your control.
            </p>
          </article>

          <article className="policy-card">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with the latest update date.
            </p>
          </article>

          <article className="policy-card contact-card">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us.
            </p>
            <a className="contact-link" href="mailto:support@zodiacmind.in">
              support@zodiacmind.in
            </a>
          </article>
        </section>
      </div>

      <style jsx>{`
        .privacy-page {
          padding: 1.35rem 0 3rem;
        }

        .hero-card {
          position: relative;
          overflow: hidden;
          padding: clamp(1.2rem, 2.8vw, 2rem);
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(244, 232, 249, 0.96));
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }

        .hero-card::after {
          content: '';
          position: absolute;
          inset: auto -50px -60px auto;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(161, 91, 187, 0.22), transparent 70%);
          pointer-events: none;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          background: rgba(51, 0, 51, 0.07);
          color: var(--brand);
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.85rem;
        }

        h1 {
          color: var(--brand);
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 0.75rem;
        }

        .hero-card p {
          margin: 0;
          max-width: 760px;
          color: #463b4c;
          font-size: 1.02rem;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-top: 1rem;
        }

        .hero-meta span {
          padding: 0.5rem 0.8rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(51, 0, 51, 0.08);
          font-size: 0.92rem;
          color: var(--brand);
          font-weight: 600;
        }

        .summary-grid,
        .policy-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.1rem;
        }

        .summary-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .policy-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .summary-card,
        .policy-card {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 1.15rem;
          box-shadow: var(--shadow);
        }

        .summary-card strong,
        .policy-card h2 {
          color: var(--brand);
        }

        .summary-card p,
        .policy-card p {
          margin: 0.6rem 0 0;
          color: var(--muted);
        }

        .summary-card strong {
          display: block;
          font-size: 1rem;
        }

        .policy-card h2 {
          font-size: 1.2rem;
          margin-bottom: 0.35rem;
        }

        .policy-list {
          margin: 0.65rem 0 0;
          padding-left: 1.1rem;
          color: var(--muted);
        }

        .policy-list li + li {
          margin-top: 0.35rem;
        }

        .contact-card {
          background: linear-gradient(135deg, rgba(51, 0, 51, 0.98), rgba(106, 47, 115, 0.96));
          color: #fff;
        }

        .contact-card h2,
        .contact-card p {
          color: #fff;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          margin-top: 0.7rem;
          text-decoration: none;
          font-weight: 700;
          color: #fff;
        }

        @media (max-width: 820px) {
          .summary-grid,
          .policy-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
