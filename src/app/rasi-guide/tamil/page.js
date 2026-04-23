import Link from 'next/link';
import Image from 'next/image';
import horoscopeData from '@/data/horoscope-data.json';
import '../rasi-guide.css';

export const metadata = {
  title: 'ராசி விவரங்கள் - ராசி பலன்கள் மற்றும் ஜோதிடம் | Zodiac Mind',
  description:
    '12 ராசிகளின் குணாதிசயங்கள், தொழில், திருமண பொருத்தம் மற்றும் அதிர்ஷ்ட குறிப்புகளை எங்களது விரிவான ராசி விவரங்கள்யில் தெரிந்து கொள்ளுங்கள்.',
};

export default function RasiGuideTamil() {
  return (
    <div className="container rasi-guide-page">
      <div className="section-heading">
        <h1>ராசி விவரங்கள்</h1>
        <p>
          உங்கள் ராசியைத் தேர்ந்தெடுத்து குணாதிசயங்கள், தொழில், திருமண பொருத்தம் மற்றும் அதிர்ஷ்டக்
          குறிப்புகளைத் தெரிந்து கொள்ளுங்கள்.
        </p>
      </div>

      <div className="lang-switch-container">
        <div className="lang-toggle">
          <Link href="/rasi-guide">English</Link>
          <span className="active">தமிழ்</span>
        </div>
      </div>

      <div className="rasi-grid">
        {horoscopeData.signs.map((sign) => (
          <Link key={sign.id} href={`/horoscope/tamil/${sign.id}`} className="rasi-card">
            <Image
              src={`/assets/images/zodiac-signs/${sign.englishName.toLowerCase()}.png`}
              alt={sign.tamilName}
              width={100}
              height={100}
              className="rasi-icon"
            />
            <h3>{sign.tamilName}</h3>
            <p>{sign.tamilSummary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
