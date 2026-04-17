import Image from "next/image";

export default function AboutUs() {
  const leaders = [
    { name: "Robert Foster", title: "CEO", image: "/robert.png" },
    { name: "Max Miller", title: "COO", image: "/max.png" },
    { name: "Mark Vincent", title: "Partnership Director", image: "/mark.png" },
    { name: "Gina Parker", title: "Chief of Staff", image: "/gina.png" },
    { name: "Leonardo G.", title: "Human Capital Regional Manager", image: "/leonardo.png" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-40 pb-20 overflow-hidden bg-surface-dim">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#e6000020_0%,_transparent_70%)] opacity-50 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] tracking-[0.2em] uppercase mb-6">
            Inside The Vanguard
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 uppercase italic">
            Direct Control. <span className="text-primary-container block not-italic">Unified Performance.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light mb-10">
            E710Labs is a multicountry BPO specialized in customer operations, sales operations, and back-office execution for companies operating across the Americas. Our hybrid operating model combines physical delivery centers and a proprietary distributed workforce, eliminating geographic dependency while maintaining strict quality, compliance, and performance standards.
          </p>
        </div>
      </section>

      {/* Culture & Philosophy Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block border border-primary-container text-primary-container px-3 py-1 font-label text-[10px] tracking-[0.2em] uppercase mb-6">
                Operational Philosophy
              </div>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl uppercase tracking-tighter mb-8 italic">
                Performance <span className="text-primary-container">Not Improvisation.</span>
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
                Our culture is built on structure, accountability, and performance. E710Labs prioritizes professional execution, measurable outcomes, and disciplined operations.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Teams are trained to operate under standardized procedures while adapting to the cultural and linguistic context of each market. We believe operational excellence is achieved through process clarity, talent accountability, and continuous improvement.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-headline font-bold uppercase text-primary-container mb-2 text-sm tracking-widest">Structure</h4>
                  <p className="text-sm text-on-surface-variant opacity-70">Standardized procedures for global consistency.</p>
                </div>
                <div>
                  <h4 className="font-headline font-bold uppercase text-primary-container mb-2 text-sm tracking-widest">Accountability</h4>
                  <p className="text-sm text-on-surface-variant opacity-70">Measurable outcomes and talent discipline.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-surface-container overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-surface-container-low border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="material-symbols-outlined text-primary-container text-4xl">
              military_tech
            </span>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl uppercase tracking-tighter">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-surface-container flex flex-col group overflow-hidden border border-white/5 hover:border-primary-container/50 transition-colors duration-300">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                  {/* Background overlay when image is broken or loading */}
                  <span className="material-symbols-outlined absolute text-white/10 text-6xl">
                    person
                  </span>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80 z-20"></div>
                </div>
                <div className="p-6 md:p-8 relative z-30 -mt-20 bg-gradient-to-t from-surface-container via-surface-container to-transparent pt-12">
                  <h3 className="font-headline font-black text-2xl md:text-3xl uppercase tracking-tight text-white mb-2">
                    {leader.name}
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-[#E60000] font-bold">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
