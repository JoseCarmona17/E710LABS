import Image from "next/image";

export default function AboutUs() {
  const leaders = [
    { name: "Robert Foster", title: "CEO", image: "/robert.png" },
    { name: "Max Miller", title: "COO", image: "/max.png" },
    { name: "Mark Vincent", title: "Partnership Director", image: "/mark.png" },
    { name: "Gina Parker", title: "Chief of Staff", image: "/gina.png" },
    { name: "Leonardo Gazzaneo", title: "Human Capital Regional Manager", image: "/leonardo.png" },
    { name: "Beatriz Sandi", title: "Operations manager", image: "/beatriz.png" },
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
            Institutional Manifesto
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 uppercase italic">
            Monetizing <span className="text-primary-container block not-italic">Market Inefficiency.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-4xl leading-relaxed font-light mb-10">
            E710Labs is a cross-border operational platform engineered to transform debt resolution into a scalable, data-driven, and compliance-first asset class. We exist to arbitrage the structural fragmentation of the LatAm financial recovery sector through a high-tech, institutionalized Hybrid-Remote model.
          </p>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block border border-primary-container text-primary-container px-3 py-1 font-label text-[10px] tracking-[0.2em] uppercase mb-6">
                Vision 2030: Nearshoring 2.0
              </div>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl uppercase tracking-tighter mb-8 italic">
                From Execution Layer <span className="text-primary-container">to Strategic Asset.</span>
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
                The global reconfiguration of service delivery has catalyzed Nearshoring 2.0. We are positioned as the backbone of this transformation within the financial services vertical.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                By 2030, our trajectory involves regional infrastructure dominance and the deployment of a full-stack platform encompassing credit advisory, restructuring, and lifecycle management of distressed assets.
              </p>
            </div>
            <div className="relative aspect-video bg-surface-container overflow-hidden border border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop"
                alt="Institutional Architecture"
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars (Migrated from Culture) */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter mb-20">
            Design for <span className="text-primary-container">Excellence.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-l border-primary-container/30 pl-8">
              <span className="font-headline font-black text-6xl text-white/5 italic block mb-6">01</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-4">Process Clarity</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Standardized procedures designed for absolute consistency. Clarity in execution is our foundation.</p>
            </div>
            <div className="border-l border-primary-container/30 pl-8">
              <span className="font-headline font-black text-6xl text-white/5 italic block mb-6">02</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-4">Measurable Yield</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Performance is not subjective. We prioritize disciplined operations where every metric is audited.</p>
            </div>
            <div className="border-l border-primary-container/30 pl-8">
              <span className="font-headline font-black text-6xl text-white/5 italic block mb-6">03</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-4">Sovereign Standards</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Zero-tolerance for error. We communicate authority and precision in every institutional interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Command Center Statistics (Migrated from Culture) */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-dim">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="font-headline font-black text-5xl md:text-7xl text-primary-container mb-2">24/7</div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">Institutional Oversight</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-headline font-black text-5xl md:text-7xl text-primary-container mb-2">0%</div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">Error Tolerance</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-headline font-black text-5xl md:text-7xl text-primary-container mb-2">SOC2</div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">Compliance Native</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-headline font-black text-5xl md:text-7xl text-primary-container mb-2">14d</div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">Rapid Deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Founders Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <span className="material-symbols-outlined text-primary-container text-4xl">
              verified_user
            </span>
            <h2 className="font-headline font-extrabold text-4xl md:text-5xl uppercase tracking-tighter">
              Institutional Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-surface-container flex flex-col group overflow-hidden border border-white/5 hover:border-primary-container/50 transition-colors duration-300">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
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
                  <p className="font-label text-xs uppercase tracking-widest text-primary-container font-bold">
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
