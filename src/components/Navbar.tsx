import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "home", label: "الرئيسية" },
    { id: "videos", label: "الدروس" },
    { id: "upload", label: "إضافة درس" },
    { id: "about", label: "عن المعلم" },
  ];

  return (
    <nav className="bg-white/97 backdrop-blur-md sticky top-0 z-50 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white text-lg font-black" style={{ fontFamily: "Inter, sans-serif" }}>M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-extrabold text-navy-900 leading-tight" style={{ fontFamily: "Inter, Cairo, sans-serif" }}>
                Mr.Adham Serag
              </h1>
              <p className="text-[11px] text-navy-400 -mt-0.5 font-medium">Math Teacher</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentPage === link.id
                    ? "bg-navy-900 text-white shadow-md"
                    : "text-navy-600 hover:bg-navy-50 hover:text-navy-800"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-navy-600 hover:bg-navy-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden animate-slide-down bg-white border-t border-navy-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileOpen(false);
                }}
                className={`block w-full text-right px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  currentPage === link.id
                    ? "bg-navy-900 text-white"
                    : "text-navy-600 hover:bg-navy-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
