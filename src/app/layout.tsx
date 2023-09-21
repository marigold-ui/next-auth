'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <Header />
          <main className='min-h-[800px] max-h-[100vh] my-auto '>
            {children}
          </main>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  )
}
