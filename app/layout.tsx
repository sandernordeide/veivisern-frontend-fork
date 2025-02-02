import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ProductsProvider } from '@/context/ProductsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matoppslaget',
  description: 'Forstå det du spiser',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col max-w-[80rem] mx-auto`}>
        <main className="flex-grow">
          <ProductsProvider>{children}</ProductsProvider>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
