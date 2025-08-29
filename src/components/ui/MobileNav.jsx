"use client";

import { useState } from "react";
import { Contact, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`capitalize transition-colors ${
              link.path === pathname
                ? "text-emerald-500 border-b-2 border-emerald-500 font-medium"
                : "hover:text-emerald-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4 md:hidden z-50">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`capitalize transition-colors ${
                link.path === pathname
                  ? "text-emerald-500 border-b-2 border-emerald-500 font-medium"
                  : "hover:text-emerald-400"
              }`}
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
