'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './horoscope.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function DailyRasiPalan() {
  const [predictions, setPredictions] = useState({});
  const [currentDate, setCurrentDate] = useState('');

  const rasiMeta = {
    மேஷம்: { slug: 'mesham', image: 'aries.png' },
    ரிஷபம்: { slug: 'rishabam', image: 'taurus.png' },
    மிதுனம்: { slug: 'mithunam', image: 'gemini.png' },
    கடகம்: { slug: 'kadagam', image: 'cancer.png' },
    சிம்மம்: { slug: 'simmam', image: 'leo.png' },
    கன்னி: { slug: 'kanni', image: 'virgo.png' },
    துலாம்: { slug: 'thulam', image: 'libra.png' },
    விருச்சிகம்: { slug: 'viruchigam', image: 'scorpio.png' },
    தனுசு: { slug: 'dhanusu', image: 'sagittarius.png' },
    மகரம்: { slug: 'magaram', image: 'capricorn.png' },
    கும்பம்: { slug: 'kumbam', image: 'aquarius.png' },
    மீனம்: { slug: 'meenam', image: 'pisces.png' },
  };

  useEffect(() => {
    // Set formatted date
    const now = new Date();
    const day = now.getDate();
    const year = now.getFullYear();
    const monthsTamil = [
      'ஜனவரி',
      'பிப்ரவரி',
      'மார்ச்',
      'ஏப்ரல்',
      'மே',
      'ஜூன்',
      'ஜூலை',
      'ஆகஸ்ட்',
      'செப்டம்பர்',
      'அக்டோபர்',
      'நவம்பர்',
      'டிசம்பர்',
    ];
    const month = monthsTamil[now.getMonth()];
    const formattedDate = `${day} ${month} ${year}`;
    setCurrentDate(formattedDate);

    // Update document title and meta description
    document.title = `இன்றைய ராசிபலன் - ${formattedDate} | Daily Rasi Palan | Zodiac Mind`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `இன்றைய ராசிபலன் ${formattedDate}: 12 ராசிகளுக்கான இன்றைய பலன்கள். மேஷம் முதல் மீனம் வரை இன்று உங்கள் ராசிக்கு என்ன பலன் என்பதை அறிந்து கொள்ளுங்கள்.`
      );
    }

    // Fetch predictions from the public folder
    fetch('/predictions.json')
      .then((res) => res.json())
      .then((data) => setPredictions(data))
      .catch((err) => console.error('Error loading predictions:', err));
  }, []);

  return (
    <div className="rasi-palan-page-container">
      <main className="container">
        <section className="section-heading">
          <h1>
            இன்றைய ராசிபலன் - <span id="dynamic-date">{currentDate}</span>
          </h1>
          <p>
            இன்றைய நாள் உங்கள் ராசிக்கு எப்படி இருக்கும்? மேஷம் முதல் மீனம் வரை 12 ராசிகளுக்கான
            துல்லியமான பலன்கள் இதோ.
          </p>
        </section>

        <section className="rasi-carousel-container">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="rasi-swiper"
          >
            {Object.keys(rasiMeta).map((name) => (
              <SwiperSlide key={name}>
                <img
                  src={`/assets/images/zodiac-signs/${rasiMeta[name].image}`}
                  alt={name}
                  className="rasi-image"
                />
                <h2 className="rasi-name">{name}</h2>
                <p className="rasi-palan-content">
                  {predictions[name] || 'ராசிபலன்கள் ஏற்றப்படுகின்றன...'}
                </p>
                <span className="view-more-link">
                  <Link href={`/horoscope/tamil/${rasiMeta[name].slug}-rasi`}>
                    மேலும் வாசிக்க &rarr;
                  </Link>
                </span>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </section>

        <section className="seo-content">
          <h2>தினசரி ராசிபலனின் முக்கியத்துவம்</h2>
          <p>
            ஜோதிட சாஸ்திரத்தின் படி, கோள்களின் சஞ்சாரம் நம் அன்றாட வாழ்க்கையில் பெரும் தாக்கத்தை
            ஏற்படுத்துகிறது. சந்திரன் ஒவ்வொரு ராசியிலும் இரண்டரை நாட்கள் சஞ்சரிக்கிறார். இந்த
            சஞ்சாரத்தின் அடிப்படையிலேயே தினசரி ராசிபலன்கள் கணிக்கப்படுகின்றன.
          </p>

          <div className="seo-grid">
            <div className="seo-item">
              <h3>ஏன் ராசிபலன் பார்க்க வேண்டும்?</h3>
              <p>
                இன்றைய நாளில் நாம் செய்ய வேண்டியவை, தவிர்க்க வேண்டியவை குறித்த ஒரு முன்னெச்சரிக்கையை
                ராசிபலன் நமக்கு வழங்குகிறது. இது ஒரு வழிகாட்டியாக இருந்து நம்மைத் திட்டமிட
                உதவுகிறது.
              </p>
            </div>
            <div className="seo-item">
              <h3>12 ராசிகளின் அடிப்படை</h3>
              <p>
                மேஷம் முதல் மீனம் வரை 12 ராசிகளும் நிலம், நீர், நெருப்பு, காற்று என நான்கு
                தத்துவங்களை அடிப்படையாகக் கொண்டவை. ஒவ்வொரு ராசிக்கும் ஒரு அதிபதி உண்டு, அவர் அந்த
                ராசிக்காரர்களின் குணாதிசயங்களைத் தீர்மானிக்கிறார்.
              </p>
            </div>
            <div className="seo-item">
              <h3>ஜோதிடம் மற்றும் அறிவியல்</h3>
              <p>
                ஜோதிடம் என்பது வானியல் கணக்கீடுகளை அடிப்படையாகக் கொண்ட ஒரு கலை. கிரகங்களின்
                கதிர்வீச்சு மற்றும் ஈர்ப்பு விசை மனித மனநிலை and உடல்நிலை மாற்றங்களை ஏற்படுத்துகிறது
                என்பதை நவீன அறிவியலும் ஒரு வகையில் ஒப்புள்கிறது.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
