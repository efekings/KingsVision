import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Kategorie: {slug}</h1>
        <p className="text-lg max-w-xl mx-auto">
          Hier kommen später die Inhalte für <b>{slug}</b>.
        </p>
      </div>
    </div>
  );
}
