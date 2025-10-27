// pages/kontakt.js
import Link from "next/link";

export default function KONTAKT() {
  return (
<div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12">
  <h1 className="text-4xl font-bold mb-8 text-center">Kontakt</h1>
  <p className="text-lg mb-6 text-center max-w-md">
    freut mich, dass du hier warst – hoffentlich konntest du dich inspirieren ;)
    <br />
    meine Socials:
  </p>

  {/* Social Links untereinander */}
  <div className="flex flex-col items-center space-y-4 mt-4">
    <a
      href="https://instagram.com/efeliz_kings"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 transition"
    >
      Instagram
    </a>
    <a
      href="https://tiktok.com/@efelizkings"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-pink-500 transition"
    >
      TikTok
    </a>
    <a
      href="mailto:efelizkings@gmail.com"
      className="hover:text-green-500 transition"
    >
      E-Mail
    </a>
  </div>
</div>

  );
}
