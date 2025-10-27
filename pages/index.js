// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section Vollbild */}
      <section className="relative w-full h-screen">
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

        {/* Overlay + exakt zentrierter Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-8">
         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
         Willkommen bei KingsVision
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-white max-w-xs sm:max-w-2xl mx-auto">
       Entdecke Looks von mir und meinen Freunden und lass dich inspirieren ;)
      </p>
    <Link
    href="/gallery"
    className="inline-block bg-white text-black text-sm sm:text-lg py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-gray-200 transition duration-300" >
      Jetzt entdecken
      </Link>
        </div>
      </section>

      {/* Inspirationen / Bilder-Grid */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Inspos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 h-64 rounded-lg"></div>
          <div className="bg-gray-100 h-64 rounded-lg"></div>
          <div className="bg-gray-100 h-64 rounded-lg"></div>
          <div className="bg-gray-100 h-64 rounded-lg"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-6 text-center border-t">
      </footer>
    </div>
  );
}
