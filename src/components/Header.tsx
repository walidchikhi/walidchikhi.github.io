import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#home", active: true },
    { name: "À Propos", href: "#about" },
    { name: "Parcours", href: "#experience" },
    { name: "Expertise", href: "#expertise" },
    { name: "Publications", href: "#publications" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-col">
            <span className="heading-font text-3xl font-extrabold tracking-tight text-nordic-text uppercase leading-none mb-1">
              WALID CHIKHI
            </span>
            <span className="text-nordic-sage text-xs font-semibold tracking-wide">
              NWP Department Head • Applied Scientist
            </span>
          </div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-nordic-sage py-7 border-b-2 ${
                  link.active ? "border-nordic-sage text-nordic-sage" : "border-transparent text-zinc-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 hover:text-nordic-text p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 absolute w-full top-20 shadow-lg">
          <div className="px-4 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium ${link.active ? "text-nordic-sage" : "text-zinc-600"}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
