// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const categories = [
    "Modern Athlete",
    "Breathe Wide",
    "Clean 90's",
    "Soft Flirty",
    "Clean Classy",
    "Bold Intimacy",
  ];

  const toSlug = (name) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <nav className="w-full bg-white text-black py-6 shadow relative z-50">
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        {/* Logo links */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="KingsVision Logo"
            width={220}
            height={110}
            priority
          />
        </Link>

        {/* Navigation rechts */}
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <Link
            href="/"
            className="hover:underline hover:underline-offset-4 transition"
          >
            HOME
          </Link>
          &nbsp; &nbsp;
          <Link
            href="/ABOUT_ME"
            className="hover:underline hover:underline-offset-4 transition"
          >
            ABOUT_ME
          </Link>
          &nbsp; &nbsp;
          <Link
            href="/GALLERY"
            className="hover:underline hover:underline-offset-4 transition"
          >
            GALLERY
          </Link>
          &nbsp; &nbsp;
          {/* Dropdown für Kategorien */}
          <div className="relative group">
            {/* Nur "KATEGORIEN" unterstrichen */}
            <Link
              href="#"
              className="hover:underline hover:underline-offset-4 transition"
            >
              KATEGORIEN
            </Link>
            {/* Pfeil ohne Unterstreichung */}
            <span className="ml-1 text-sm">▾</span>

            {/* Dropdown-Menü – hidden by default, shown on hover */}
            <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-200 shadow-lg rounded-lg py-3 text-left z-50 hidden group-hover:block">
              {categories.map((cat, index) => (
                <Link
                  key={index}
                  href={`/categories/${toSlug(cat)}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          &nbsp; &nbsp;
          <Link
            href="/KONTAKT"
            className="hover:underline hover:underline-offset-4 transition"
          >
            KONTAKT
          </Link>
        </div>
      </div>
    </nav>
  );
}






