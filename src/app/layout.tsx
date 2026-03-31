import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atılım Mühendislik İnşaat | Ankara\'nın Prestijli Konut Projeleri',
  description:
    '25 yıllık deneyimle Ankara\'nın lüks konut projelerini hayata geçiriyoruz. Satıştaki ve tamamlanmış projelerimizi keşfedin.',
  keywords: 'atılım mühendislik, inşaat, konut projeleri, ankara, lüks daire, villa',
  openGraph: {
    title: 'Atılım Mühendislik İnşaat',
    description: 'Ankara\'nın prestijli konut projeleri',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
