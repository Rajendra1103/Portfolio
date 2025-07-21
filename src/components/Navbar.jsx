import {
  Menu,
  X,
  Home,
  User,
  BadgeCheck,
  LayoutDashboard,
  Mail,
  Briefcase,
  ScrollText,
} from "lucide-react";
import { useState } from "react";

// Navigation links
const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: BadgeCheck },
  { name: "Projects", href: "#projects", icon: LayoutDashboard },
  { name: "Internships", href: "#internships", icon: Briefcase },
  { name: "Certificates", href: "#certificates", icon: ScrollText },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-60 bg-gradient-to-b from-[#0f172a] to-[#1e293b] border-r z-50 flex-col items-center py-8 px-4 space-y-10">
        {/* Logo */}
        <a href="#hero" className="text-center">
          <div className="text-2xl font-bold">
            <span className="text-violet-600 text-glow">Raj</span>
          </div>
          <div className="text-sm text-white/70">Portfolio</div>
        </a>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 w-full">
          {navItems.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className="group flex items-center gap-4 px-4 py-2 text-sm font-medium rounded-md text-slate-300 hover:text-white hover:bg-blue-800/40 transition-all duration-300"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{name}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto text-sm text-slate-400 text-center">
          © 2025 Rajendra
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-40 bg-background flex justify-between items-center px-4 py-3  backdrop-blur-md">
        <a href="#hero" className="flex items-center gap-1">
          <span className="text-xl font-bold text-violet-600 text-glow">Raj</span>
          <span className="text-sm font-medium text-black/70 dark:text-white/70">
            Portfolio
          </span>
        </a>
        <button
          className="text-foreground"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-56 bg-gradient-to-b from-[#0f172a] to-[#1e293b] border-l z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-xl`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Logo in menu */}
            <div className="flex justify-between items-center mb-8">
              <a href="#hero" className="flex items-center gap-1">
                <span className="text-xl font-bold text-violet-600 text-glow">
                  Raj
                </span>
                <span className="text-sm font-medium text-white/70">Portfolio</span>
              </a>
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-4">
              {navItems.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 px-3 py-2 text-sm rounded-md text-slate-300 hover:text-white hover:bg-blue-800/40 transition"
                >
                  <Icon className="w-5 h-5" />
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <footer className="text-sm text-slate-400 text-center mt-10">
            © 2025 Rajendra
          </footer>
        </div>
      </div>
    </>
  );
};
