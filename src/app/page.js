'use client';
import { useEffect } from 'react';
import ScreenshotsCarousel from '@/components/ScreenshotsCarousel';
import FeatureCard from '@/components/FeatureCard';
import './home.css';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-up').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://zodiacmind.in/#organization',
        name: 'Zodiac Mind',
        url: 'https://zodiacmind.in/',
        logo: 'https://zodiacmind.in/assets/images/logo.png',
        email: 'support@zodiacmind.in',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://zodiacmind.in/#softwareapplication',
        name: 'Zodiac Mind',
        url: 'https://zodiacmind.in/',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Android',
        description:
          'Free horoscope and Tamil astrology app for kundli charts, compatibility matching, and PDF exports.',
        publisher: {
          '@id': 'https://zodiacmind.in/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'INR',
        },
      },
      {
        '@type': 'MobileApplication',
        '@id': 'https://zodiacmind.in/#mobileapplication',
        name: 'ZodiacMind',
        url: 'https://zodiacmind.in/',
        operatingSystem: 'Android',
        applicationCategory: 'LifestyleApplication',
        inLanguage: ['en', 'ta'],
        isAccessibleForFree: true,
        featureList: [
          'Horoscope generator',
          'Kundli chart creation',
          'Marriage compatibility',
          'PDF export',
          'Tamil astrology support',
        ],
        publisher: {
          '@id': 'https://zodiacmind.in/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'INR',
        },
      },
    ],
  };

  return (
    <div className="container home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-card fade-up">
          <div>
            <span className="eyebrow">Free Tamil Astrology App</span>
            <h1 id="hero-title">
              <b>ZODIAC</b> MIND
              <span className="subtitle">Discover What the Stars Say About You</span>
            </h1>
            <p>
              Your complete astrology companion for horoscope charts (Rasi & Navamsa), kundli
              insights, marriage compatibility, and Tamil astrology guidance.
            </p>
            <p className="subtitle">
              ராசி & நவாம்ச ஜாதகம், குண்டலி விளக்கம், திருமண பொருத்தம் மற்றும் தமிழ் ஜோதிட ஆலோசனை
              வழங்கும் முழுமையான பயன்பாடு.
            </p>

            <div className="hero-actions">
              <a
                href="https://play.google.com/store/apps/details?id=in.zodiacmind.app&referrer=utm_source%3Dzodiacmind.in%26utm_medium%3Dwebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="play-button"
                aria-label="Download Zodiac Mind on Google Play"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get Zodiac Mind on Google Play"
                  width="180"
                  height="54"
                />
              </a>

              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/18VpoUR9if/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn facebook"
                  aria-label="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V1.61c-.34-.05-1.5-.16-2.85-.16-2.84 0-4.65 1.73-4.65 4.8v2.75H7v4h3v11h4v-11z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/zodiacmind.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="stats" aria-label="App highlights">
              <div className="stat">
                <strong>Free to Use</strong>
                <span className="subtitle">இலவச சேவை</span>
              </div>
              <div className="stat">
                <strong>PDF Reports</strong>
                <span className="subtitle">PDF பதிவிறக்கம்</span>
              </div>
              <div className="stat">
                <strong>Nakshatra Naming</strong>
                <span className="subtitle">நட்சத்திரப் பெயரிடல்</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="phone-mockup">
              <div className="screen">
                <div className="screen-card">
                  <strong>Kundli Birth Chart</strong>
                  <span className="subtitle">ராசி & நவாம்சம்</span>
                  <span className="screen-pill">Instant Report</span>
                </div>
                <div className="screen-card">
                  <strong>Your Dasha Timeline</strong>
                  <span className="subtitle">தசை கால வரிசை</span>
                  <span className="screen-pill">Instant Analysis</span>
                </div>
                <div className="screen-card">
                  <strong>Marriage Compatibility Score</strong>
                  <span className="subtitle">பொருத்த மதிப்பெண்</span>
                  <span className="screen-pill">8 / 10 Match</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="screenshots" className="section" aria-labelledby="screenshots-title">
        <div className="section-heading fade-up">
          <h2 id="screenshots-title">
            See Zodiac Mind in Action
            <span className="subtitle">Zodiac Mind பயன்பாட்டின் காட்சிகள்</span>
          </h2>
          <p>
            ஜாதகம் உருவாக்குதல், திருமண பொருத்தம் பார்ப்பது மற்றும் விரிவான ஜோதிட தகவல்களை எளிதாக
            பெறுவது எப்படி என்பதை இந்த காட்சிகளில் காணுங்கள்.
          </p>
        </div>
        <div className="fade-up">
          <ScreenshotsCarousel />
        </div>
      </section>

      <section id="features" className="section" aria-labelledby="features-title">
        <div className="section-heading fade-up">
          <h2 id="features-title">
            Core Features
            <span className="subtitle">முக்கிய அம்சங்கள்</span>
          </h2>
          <p>
            Powerful astrology tools designed to help you understand your horoscope, relationships,
            and life path with ease.
          </p>
        </div>

        <div className="features">
          <FeatureCard
            icon="✨"
            title="Horoscope Chart"
            subtitle="ஜாதக கட்டம்"
            desc="Generate accurate Rasi and Navamsa horoscope charts instantly using your birth date, time, and place."
          />
          <FeatureCard
            icon="💍"
            title="Horoscope Matching"
            subtitle="திருமண பொருத்தம்"
            desc="Check marriage compatibility using traditional astrology methods with clear and easy-to-understand results."
          />
          <FeatureCard
            icon="🪐"
            title="Dasha Timeline"
            subtitle="தசை கால வரிசை"
            desc="Explore planetary dasha periods and understand how different phases influence your life journey."
          />
          <FeatureCard
            icon="👶"
            title="Nakshatra Naming"
            subtitle="நட்சத்திர பெயர் பரிந்துரை"
            desc="Find meaningful baby names based on your child's birth nakshatra following traditional naming rules."
          />
        </div>
      </section>

      <section className="section" aria-labelledby="free-app-title">
        <div className="free-banner fade-up">
          <h2 id="free-app-title">
            100% Free App
            <span className="subtitle">100% இலவச பயன்பாடு</span>
          </h2>
          <p>All features are completely free. No subscriptions. No hidden charges.</p>
        </div>
      </section>
    </div>
  );
}
