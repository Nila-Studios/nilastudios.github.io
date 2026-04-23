# Zodiac Mind Website

The official website for **Zodiac Mind**, a comprehensive and free Tamil Astrology application for Android. This website provides information about the app's features, privacy policy, and links to download the app from the Google Play Store.

## 🌟 Features

-   **Horoscope Charts:** Generate accurate Rasi and Navamsa charts instantly based on birth details.
-   **Marriage Matching:** Detailed horoscope compatibility analysis for marriage.
-   **Dasha Timeline:** Explore planetary dasha periods and their influence on life.
-   **Nakshatra Naming:** Find meaningful baby names based on the child's birth nakshatra.
-   **PDF Reports:** Download and share detailed astrology reports in PDF format.
-   **Bilingual Support:** Available in both English and Tamil.
-   **100% Free:** No subscriptions or hidden charges.

## 🚀 Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Library:** [React](https://reactjs.org/)
-   **Styling:** Custom CSS
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Carousel:** [Swiper](https://swiperjs.com/)
-   **Deployment:** GitHub Pages via GitHub Actions

## 📂 Project Structure

```text
├── .github/workflows/    # GitHub Actions for CI/CD (Next.js deployment)
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js App Router (pages and layouts)
│   │   ├── horoscope/    # Horoscope related pages
│   │   ├── privacy-policy/ # Privacy Policy page
│   │   ├── rasi-guide/   # Rasi information guide
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Root layout
│   │   └── page.js       # Home page
│   ├── components/       # Reusable React components
│   │   ├── FeatureCard.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── ScreenshotsCarousel.js
│   └── data/             # Static data (JSON)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Nila-Studios/nilastudios.github.io.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd nilastudios.github.io
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production application:
```bash
npm run build
```

## 📱 App Link

Download the Zodiac Mind app on the Google Play Store:
[Zodiac Mind on Google Play](https://play.google.com/store/apps/details?id=in.zodiacmind.app)

## 📄 License

This project is private and intended for the official Zodiac Mind website. All rights reserved.
