'use client'

import Link from 'next/link'

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="md:text-base text-xs p-1 rounded-lg text-center text-white bg-blue-500 hover:bg-blue-600 border border-black absolute top-1 right-1"
    >
      الصفحة الرئيسية
    </Link>
  )
}
