import { notFound } from 'next/navigation';
import { use } from 'react';
import horoscopeData from '@/data/horoscope-data.json';

export async function generateStaticParams() {
  const paths = [];
  horoscopeData.signs.forEach((sign) => {
    paths.push({ lang: 'english', sign: sign.id });
    paths.push({ lang: 'tamil', sign: sign.id });
  });
  return paths;
}

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { lang, sign: signId } = params;
  const sign = horoscopeData.signs.find((s) => s.id === signId);

  if (!sign) return {};

  const isTamil = lang === 'tamil';
  const title = isTamil
    ? `${sign.tamilName} - ஆளுமை, தொழில் மற்றும் அதிர்ஷ்ட குறிப்புகள் | Zodiac Mind`
    : `${sign.englishName} - Personality, Career & Lucky Tips | Zodiac Mind`;

  return {
    title,
    description: isTamil
      ? sign.tamil.intro.substring(0, 160)
      : sign.english.intro.substring(0, 160),
  };
}

export default function HoroscopeDetailLayout({ children }) {
  return children;
}
