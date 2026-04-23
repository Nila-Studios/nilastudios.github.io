'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import horoscopeData from '@/data/horoscope-data.json';

export default function HoroscopePage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { lang, sign: signId } = params;
  const isTamil = lang === 'tamil';

  const sign = horoscopeData.signs.find((s) => s.id === signId);

  if (!sign) {
    notFound();
  }

  const content = isTamil ? sign.tamil : sign.english;
  const otherLang = isTamil ? 'english' : 'tamil';

  return (
    <div className="horoscope-container">
      <div className="container">
        <div className="horoscope-card">
          <div className="lang-switch">
            <Link href={`/horoscope/${otherLang}/${signId}`}>{isTamil ? 'English' : 'தமிழ்'}</Link>
          </div>

          <div className="horoscope-header">
            <h1>{isTamil ? sign.tamilName : sign.englishName}</h1>
          </div>

          <p>{content.intro}</p>

          <section>
            <h2>{isTamil ? 'ஆளுமை (Personality)' : 'Personality'}</h2>
            <p>{content.personality}</p>
          </section>

          <section>
            <h2>{isTamil ? 'பலம் (Strengths)' : 'Strengths'}</h2>
            <p>{content.strengths}</p>
          </section>

          <section>
            <h2>{isTamil ? 'பலவீனம் (Weaknesses)' : 'Weaknesses'}</h2>
            <p>{content.weaknesses}</p>
          </section>

          <section>
            <h2>{isTamil ? 'தொழில் (Career)' : 'Career'}</h2>
            <p>{content.career}</p>
          </section>

          <section>
            <h2>{isTamil ? 'திருமணம் (Marriage)' : 'Marriage'}</h2>
            <p>{content.marriage}</p>
          </section>

          <div className="lucky-grid">
            <div className="lucky-item">
              <strong>{isTamil ? 'அதிர்ஷ்ட நிறம்' : 'Lucky Color'}</strong>
              <span>{content.luckyColor}</span>
            </div>
            <div className="lucky-item">
              <strong>{isTamil ? 'அதிர்ஷ்ட எண்' : 'Lucky Number'}</strong>
              <span>{content.luckyNumber}</span>
            </div>
            <div className="lucky-item">
              <strong>{isTamil ? 'அதிர்ஷ்ட கல்' : 'Lucky Stone'}</strong>
              <span>{content.luckyStone}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .horoscope-container {
          padding: 2rem 0;
        }
        .horoscope-card {
          background: var(--surface);
          padding: clamp(1.5rem, 5vw, 3rem);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          max-width: 800px;
          margin: 0 auto;
        }
        .horoscope-header {
          color: var(--brand);
          font-size: clamp(2rem, 5vw, 2.5rem);
          margin-top: 0;
          border-bottom: 2px solid var(--border);
          padding-bottom: 0.5rem;
        }
        .rasi-icon {
          width: 120px;
          height: 120px;
          margin: 0 auto 1.2rem;
          background: linear-gradient(135deg, rgba(51, 0, 51, 0.05), rgba(161, 91, 187, 0.1));
          border-radius: 50%;
          padding: 18px;
          object-fit: contain;
          display: block;
        }
        h1 {
          color: var(--brand);
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          margin: 0;
        }
        h2 {
          color: var(--brand);
          margin-top: 2rem;
          font-size: 1.5rem;
        }
        .intro {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text);
        }
        .lang-switch {
          text-align: right;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .lang-switch a {
          color: var(--brand);
          text-decoration: underline;
        }
        .lucky-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px dashed var(--border);
        }
        .lucky-item {
          display: flex;
          flex-direction: column;
        }
        .lucky-item strong {
          color: var(--brand);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
