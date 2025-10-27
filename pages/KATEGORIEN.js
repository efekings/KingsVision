import Link from "next/link";

export default function KATEGORIEN() {
  const categories = [
    "Modern Athlete",
    "Breathe Wide",
    "Clean 90's",
    "Soft Flirty",
    "Clean Classy",
    "Bold Intimacy"
  ];

  const toSlug = (name) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Kategorien</h1>

      {/* Container zentriert, max-Breite */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
        {categories.map((cat, index) => (
          <Link key={index} href={`/categories/${toSlug(cat)}`}>
            <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow cursor-pointer">
              <span className="text-xl font-semibold">{cat}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
