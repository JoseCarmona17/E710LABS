import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 h-20 bg-[#131313]/90 backdrop-blur-xl border-b border-white/5">
      <Link href="/" className="text-2xl font-black tracking-tighter text-[#E60000]">710LABS</Link>
      <div className="hidden md:flex gap-10">
        <Link className="font-headline uppercase tracking-tight text-sm font-bold text-white/70 hover:text-white transition-colors" href="/technical">Services</Link>
        <Link className="font-headline uppercase tracking-tight text-sm font-bold text-white/70 hover:text-white transition-colors" href="/difference">Difference</Link>
        <Link className="font-headline uppercase tracking-tight text-sm font-bold text-white/70 hover:text-white transition-colors" href="/culture">Culture</Link>
        <Link className="font-headline uppercase tracking-tight text-sm font-bold text-white/70 hover:text-white transition-colors" href="/global-operations">Operations</Link>
        <Link className="font-headline uppercase tracking-tight text-sm font-bold text-white/70 hover:text-white transition-colors" href="/success">Clients</Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mr-4">
          <span>EN</span>
          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
          <span>ES</span>
          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
          <span>FR</span>
          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
          <span>PT</span>
        </div>
        <Link href="/multilingual" className="flex items-center justify-center">
          <span className="material-symbols-outlined text-white/70 hover:text-[#E60000] cursor-pointer">language</span>
        </Link>
        <Link href="/join">
          <button className="bg-primary-container text-on-primary-container px-6 py-2 font-headline uppercase tracking-tight text-sm font-bold active:scale-95 duration-100">
            Join the Elite
          </button>
        </Link>
      </div>
    </nav>
  );
}
