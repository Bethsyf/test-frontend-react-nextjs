import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from 'app/components/shared/Footer/Footer';
import { Header } from 'app/components/shared/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animals App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
