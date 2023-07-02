'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col flex-wrap justify-center items-center">
      <Link
        className="block p-4 w-fit text-center bg-yellow-300 hover:bg-yellow-400 border border-black rounded-lg mb-8"
        href="/scientific"
      >
        القسم العلمي
      </Link>
      <Link
        className="block p-4 w-fit text-center bg-yellow-300 hover:bg-yellow-400 border border-black rounded-lg mb-8"
        href="/literary"
      >
        القسم الأدبي
      </Link>
      <Link
        className="block p-4 w-fit text-center bg-yellow-300 hover:bg-yellow-400 border border-black rounded-lg mb-8"
        href="/preparation"
      >
        الشهادة الإعدادية
      </Link>
    </section>
  )
}
