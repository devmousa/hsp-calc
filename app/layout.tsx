'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeButton from '@/components/HomeButton'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        await fetch('https://hsp-calc.group.com.ly/visitor/pulse', {
          method: 'POST',
        });
      } catch (error) {
        console.error(error);
      }
    };

    incrementVisitor();
  }, []);
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>حساب نسبة الشهادة الثانوية</title>
      </head>
      <body className={`${inter.className} bg-sky-100`}>
        <HomeButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
