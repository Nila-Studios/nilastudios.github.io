import { Inter, Tiro_Tamil, Hind_Madurai, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const tiroTamil = Tiro_Tamil({
  subsets: ['latin', 'tamil'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-tiro-tamil',
});

const hindMadurai = Hind_Madurai({
  subsets: ['latin', 'tamil'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-madurai',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const viewport = {
  themeColor: '#330033',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://zodiacmind.in'),
  title: {
    default: 'Zodiac Mind - Horoscope Generator, Kundli Chart & Marriage Compatibility App',
    template: '%s | Zodiac Mind',
  },
  description:
    'Zodiac Mind is a free Android horoscope app for horoscope generator tools, kundli chart creation, marriage compatibility, Tamil astrology insights, and downloadable PDF reports.',
  keywords: [
    'Horoscope generator',
    'Kundli chart',
    'Marriage compatibility',
    'Tamil astrology',
    'ஜாதகம்',
    'ஜாதக பொருத்தம்',
    'Zodiac Mind',
    'Horoscope app',
    'Astrology app',
  ],
  authors: [{ name: 'Zodiac Mind' }],
  creator: 'Zodiac Mind',
  publisher: 'Zodiac Mind',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Zodiac Mind',
    title: 'Zodiac Mind - Horoscope & Compatibility App',
    description:
      'Generate horoscope charts, check marriage compatibility, and explore Tamil astrology with the free Zodiac Mind Android app.',
    url: 'https://zodiacmind.in/',
    images: [
      {
        url: '/assets/images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zodiac Mind - Horoscope & Compatibility App',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zodiac Mind - Horoscope & Compatibility App',
    description:
      'Free horoscope generator, kundli chart, marriage compatibility, and Tamil astrology guidance in one app.',
    images: ['/assets/images/og_image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${tiroTamil.variable} ${hindMadurai.variable} ${poppins.variable}`}
    >
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1943296208043134"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
