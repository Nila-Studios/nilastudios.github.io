import Link from 'next/link';
import Image from 'next/image';
import horoscopeData from '@/data/horoscope-data.json';
import './rasi-guide.css';

export const metadata = {
  title: 'Rasi Guide - Zodiac Signs & Astrology | Zodiac Mind',
  description:
    'Explore the 12 zodiac signs (Rasis) and learn about their traits, personality, career, and compatibility in our comprehensive Rasi Guide.',
};

export default function RasiGuide() {
  return (
    <div className="container rasi-guide-page">
      <div className="section-heading">
        <h1>Rasi Guide</h1>
        <p>
          Select your zodiac sign to explore personality traits, career paths, marriage
          compatibility, and lucky tips.
        </p>
      </div>

      <div className="lang-switch-container">
        <div className="lang-toggle">
          <span className="active">English</span>
          <Link href="/rasi-guide/tamil">தமிழ்</Link>
        </div>
      </div>

      <div className="rasi-grid">
        {horoscopeData.signs.map((sign) => (
          <Link key={sign.id} href={`/horoscope/english/${sign.id}`} className="rasi-card">
            <Image
              src={`/assets/images/zodiac-signs/${sign.englishName.toLowerCase()}.png`}
              alt={sign.englishName}
              width={100}
              height={100}
              className="rasi-icon"
            />
            <h3>{sign.englishName}</h3>
            <p>{sign.englishSummary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
