import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  type NavLink =
    | {
        href: string;
        label: string;
        dropdown?: undefined;
      }
    | {
        label: string;
        dropdown: { href: string; label: string }[];
        href?: undefined;
      };

  const navLinks: NavLink[] = [
    { href: "/", label: "الرئيسية" },
    {
      label: "المعالم السياحية",
      dropdown: [
        { href: "/thee-ain", label: "ذي عين" },
        { href: "/raghdan-park", label: "غابة رغدان" },
        { href: "/jodur-park", label: "منتزه جدر" },
      ],
    },
    { href: "/tourist-farms", label: "المزارع السياحية" },
    { href: "/accommodations", label: "أماكن الإقامة" },
    { href: "/restaurants", label: "المطاعم والمقاهي" },
    { href: "/traditional-markets", label: "الأسواق الشعبية" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-custom shadow-lg z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="نبض الباحة"
              width={120}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-gray-700 hover:text-primary-600 font-semibold text-base transition-colors duration-300 relative group flex items-center gap-1">
                      {link.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 animate-slide-down">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-primary-600 font-semibold text-base transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-20 right-0 left-0 bg-white shadow-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container-custom py-6">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <div>
                      <div className="text-gray-900 font-semibold px-4 py-2 text-sm">
                        {link.label}
                      </div>
                      <div className="mr-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-6 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-semibold"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
