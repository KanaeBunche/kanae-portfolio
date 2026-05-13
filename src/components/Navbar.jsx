import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

export default function Navbar() {
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#030712]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-3xl font-black tracking-tight">
          <span className="text-white">K</span>
          <span className="text-violet-500">B</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-white/80 transition hover:text-violet-400"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80">
          <Sun size={18} />
        </button>
      </nav>
    </header>
  );
}