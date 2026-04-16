"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "/technical" },
    { name: "Difference", href: "/difference" },
    { name: "Culture", href: "/culture" },
    { name: "Operations", href: "/global-operations" },
    { name: "Clients", href: "/success" },
  ];

  // Helper function to check if the link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 h-20">
        <Link href="/" className="flex items-center group relative z-50">
          <div className="relative h-16 w-40 sm:h-20 sm:w-52 transition-transform duration-500 ease-out group-hover:scale-[1.05] filter drop-shadow-[0_0_8px_rgba(230,0,0,0.2)]">
            <Image
              src="/logo.png"
              alt="E710LABS ONE BPO"
              fill
              sizes="(max-width: 640px) 160px, 250px"
              className="object-contain object-left scale-[1.4] md:scale-[1.5] transform origin-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className={`font-headline uppercase tracking-tight text-xs lg:text-sm font-bold transition-colors ${isActive(link.href)
                ? "text-[#E60000] border-b-2 border-[#E60000] pb-1"
                : "text-white/70 hover:text-white"
                }`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Global Controls & CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mr-4">
            <span>EN</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>ES</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>FR</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>PT</span>
          </div>
          <Link
            href="/multilingual"
            className="flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white/70 hover:text-[#E60000] cursor-pointer text-xl lg:text-2xl">
              language
            </span>
          </Link>
          <Link href="/join">
            <button className="bg-[#E60000] text-white px-4 lg:px-6 py-2 font-headline uppercase tracking-tight text-xs lg:text-sm font-bold hover:bg-white hover:text-[#E60000] active:scale-95 duration-100 transition-all">
              Join the Elite
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/multilingual"
            className="flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white/70 hover:text-[#E60000] cursor-pointer text-[20px]">
              language
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/70 hover:text-white focus:outline-none"
          >
            <span className="material-symbols-outlined text-[28px] leading-none block">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#131313]/95 backdrop-blur-xl border-b border-white/5 px-6 pt-4 pb-8 flex flex-col gap-6 h-[calc(100vh-5rem)] overflow-y-auto w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              onClick={() => setIsOpen(false)}
              className={`font-headline uppercase tracking-tight text-xl font-bold transition-colors w-fit ${isActive(link.href)
                ? "text-[#E60000] border-b-2 border-[#E60000] pb-1"
                : "text-white/70 hover:text-white"
                }`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 w-full my-4"></div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                Locale Status
              </p>
              <div className="flex gap-4 text-xs font-bold font-headline">
                <span className="text-[#E60000]">EN</span>
                <span className="text-white/50">ES</span>
                <span className="text-white/50">FR</span>
                <span className="text-white/50">PT</span>
              </div>
            </div>
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="mt-4"
            >
              <button className="w-full bg-[#E60000] text-white px-6 py-4 font-headline uppercase tracking-tight text-sm font-bold active:scale-95 duration-100">
                Join the Elite
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
