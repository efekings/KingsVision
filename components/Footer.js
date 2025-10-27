export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 px-6 mt-auto">
      <p className="text-center text-sm">
        © {new Date().getFullYear()} KingsVision ·{" "}
        <a
          href="https://instagram.com/efeliz_kings"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white mx-1"
        >
          Instagram
        </a>
        ·{" "}
        <a
          href="https://tiktok.com/@efelizkings"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white mx-1"
        >
          TikTok
        </a>
        ·{" "}
        <a href="mailto:efelizkings@gmail.com" className="hover:text-white mx-1">
          Kontakt
        </a>
      </p>
    </footer>
  );
}



