import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:p-12 bg-[#0a0a0a]">
      <div className="md:col-span-1">
        <div className="text-[#E60000] font-bold text-2xl tracking-tighter mb-6">
          710LABS
        </div>
        <p className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 leading-relaxed">
          The Executive Vanguard in Business Process Outsourcing. Architecting
          high-performance global operations.
        </p>
      </div>
      <div>
        <h4 className="text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
          Navigation
        </h4>
        <ul className="space-y-4">
          <li>
            <Link
              className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 hover:text-[#E60000] transition-colors"
              href="/technical"
            >
              Services & Tech
            </Link>
          </li>
          <li>
            <Link
              className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 hover:text-[#E60000] transition-colors"
              href="/culture"
            >
              Culture
            </Link>
          </li>
          <li>
            <Link
              className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 hover:text-[#E60000] transition-colors"
              href="/global-operations"
            >
              Global Offices
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
          Legal
        </h4>
        <ul className="space-y-4">
          <li>
            <a
              className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 hover:text-[#E60000] transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 hover:text-[#E60000] transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <Link
              className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40 hover:text-[#E60000] transition-colors"
              href="/join"
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-8">
          Subscribe
        </h4>
        <div className="relative">
          <input
            className="w-full bg-[#131313] border-none text-[10px] uppercase tracking-widest p-4 focus:ring-1 focus:ring-primary-container outline-none text-white"
            placeholder="Email Address"
            type="email"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container">
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
      <div className="md:col-span-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-body text-[10px] tracking-[0.05em] uppercase text-white/40">
          © {new Date().getFullYear()} 710LABS. THE EXECUTIVE VANGUARD. ALL
          RIGHTS RESERVED.
        </span>
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-white/20 hover:text-[#E60000] cursor-pointer">
            public
          </span>
          <span className="material-symbols-outlined text-white/20 hover:text-[#E60000] cursor-pointer">
            shield
          </span>
          <span className="material-symbols-outlined text-white/20 hover:text-[#E60000] cursor-pointer">
            monitoring
          </span>
        </div>
      </div>
    </footer>
  );
}
