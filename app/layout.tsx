'use client'

import './globals.css'
import { Inter } from 'next/font/google'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeButton from '@/components/HomeButton'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>حساب نسبة الشهادة الثانوية</title>
      </head>
      <body className={`${inter.className} bg-amber-100`}>
        <HomeButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
