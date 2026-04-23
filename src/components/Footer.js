import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} ZodiacMind.in | All Rights Reserved.</p>
      <p>
        <Link href="/">Home </Link> |&nbsp;
        <Link href="/privacy-policy">Privacy Policy </Link> |&nbsp;
        <a href="mailto:support@zodiacmind.in">Support</a>
      </p>
    </footer>
  );
}
