import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TripGoals - Discover Amazing Travel Experiences',
  description: 'Plan your perfect getaway with our curated travel packages and experiences around the world.',
  keywords: 'travel, vacation, tours, packages, adventure, luxury travel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}