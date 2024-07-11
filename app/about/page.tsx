export default function AboutMe() {
  return (
    <div className="text-center font-bold leading-10 text-xl text-yellow-900 md:mx-8 mx-4">
      <h1 className="text-2xl mb-4">
        اسمي موسى أبوبكر موسى حامد، مواليد 2005 و مبرمج
      </h1>
      <h2 className="text-2xl mb-4">
        بطل الأولمبياد الليبي للمعلوماتية 2024 🥇🏆
      </h2>
      <p>أسعى لنشر البرمجة و التكنولوجيا بين الشباب</p>
      <p>
        قمت بتطوير عدد من المواقع و هذا أحدها، موقع لحساب النسبة المئوية لطلبة
        الشهادة الثانوية
      </p>
      <p>بالتوفيق للجميع و لاتنسوا متابعتي</p>
      <a
        className="block text-blue-800 hover:text-blue-600"
        href="https://www.facebook.com/devmousa"
        target="_blank"
        rel="noopener noreferrer"
      >
        حسابي على الفيسبوك
      </a>
      <a
        className="block text-green-800 hover:text-green-600"
        href="https://github.com/devmousa/hsp-calc"
        target="_blank"
        rel="noopener noreferrer"
      >
        مستودع الموقع على Github
      </a>
    </div>
  )
}
