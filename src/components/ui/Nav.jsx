"use client";

import { Contact } from "lucide-react";
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

  return (
    <nav className="flex gap-6 md:gap-10 items-center font-medium text-gray-300">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`
              relative px-2 py-1 tracking-wide transition-all duration-300 
              hover:text-emerald-400 hover:scale-105
              ${isActive ? "text-emerald-500 font-semibold" : ""}
            `}
          >
            {link.name}
            {/* underline animation */}
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-emerald-500 
              transform scale-x-0 transition-transform duration-300 origin-left
              ${isActive ? "scale-x-100" : "hover:scale-x-100"}`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
