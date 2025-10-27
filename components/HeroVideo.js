// components/HeroVideo.js
import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hintergrund-Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Dein Browser unterstützt kein Video.
      </video>

      {/* Overlay für Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full bg-black bg-opacity-30 px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Willkommen bei KingsVision
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white max-w-2xl">
          Entdecke Looks von mir und meinen Freunden und lass dich inspirieren.
        </p>
        <Link
          href="/gallery"
          className="inline-block bg-white text-black text-lg py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
        >
          Jetzt entdecken
        </Link>
      </div>
    </section>
  );
}
