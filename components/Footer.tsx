'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-8 mb-4 p-2 text-center md:text-2xl text-xl">
      <p>تم تطوير هذا الموقع بواسطة المبرمج موسى أبوبكر</p>
      <Link className="text-blue-400 hover:text-blue-600" href="/about" >من أنا ؟</Link>
    </footer>
  )
}