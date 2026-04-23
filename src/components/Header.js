'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="brand">
          <img src="/assets/images/logo.png" alt="ZodiacMind logo" width="50" height="50" />
          <span>
            <strong>ZODIAC</strong> MIND
          </span>
        </Link>

        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/horoscope" onClick={() => setIsOpen(false)}>
            Daily Rasi Palan
          </Link>
          <Link href="/rasi-guide" onClick={() => setIsOpen(false)}>
            Rasi Guide
          </Link>
          <Link href="/privacy-policy" onClick={() => setIsOpen(false)}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
