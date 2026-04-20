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
    { name: "About Us", href: "/about" },
    { name: "Difference", href: "/difference" },
    { name: "Operations", href: "/global-operations" },
    { name: "Success", href: "/success" },
    { name: "Technical", href: "/technical" },
  ];

  // Helper function to check if the link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#131313] md:bg-[#131313]/90 backdrop-blur-xl border-b border-white/10 isolate">
      <div className="flex justify-between items-center px-6 md:px-12 h-20">
        <Link href="/" className="flex items-center group relative z-[110] w-fit shrink-0">
          <div className="relative h-14 w-24 sm:h-20 sm:w-32 transition-transform duration-500 ease-out group-hover:scale-[1.02] filter drop-shadow-[0_0_8px_rgba(230,0,0,0.2)]">
            <Image
              src="/logo.png"
              alt="E710LABS ONE BPO"
              fill
              sizes="(max-width: 640px) 150px, 200px"
              className="object-contain object-left scale-125 sm:scale-[1.7] transform origin-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-8 xl:gap-10 font-label">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className={`font-headline uppercase tracking-tight text-[11px] lg:text-xs xl:text-sm font-bold transition-colors whitespace-nowrap ${isActive(link.href)
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
            href="/global-operations"
            className="flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-white hover:text-[#E60000] cursor-pointer text-xl lg:text-2xl">
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
        <div className="md:hidden flex items-center gap-2 shrink-0 relative z-[110]">
          <Link
            href="/global-operations"
            className="flex items-center justify-center p-3"
          >
            <span className="material-symbols-outlined text-white cursor-pointer text-[24px] block">
              language
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-3"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[34px] leading-none block">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#131313] backdrop-blur-xl border-b border-white/5 px-6 pt-4 pb-8 flex flex-col gap-6 h-[calc(100vh-5rem)] overflow-y-auto w-full relative z-[120]">
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
              <div className="flex gap-4 text-xs font-bold font-headline text-white">
                <span className="text-[#E60000]">EN</span>
                <span>ES</span>
                <span>FR</span>
                <span>PT</span>
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
