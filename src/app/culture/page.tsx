export default function Culture() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-12 md:px-24 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Executive Boardroom" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBko08jSyJiy2THZ7LvXZBjlTSxI4iiqUcduRdLBCNOIVvvp8e9suMcTn5K7Tz-p1-l1Uya80s6iJQbwLEynzXFbiWk-uN1E86zbZ1QWIU7oCUTAZGyPv7Z7keqwfVWs5JBm5x2HHRJex6go5OwCAgTFxlb0bq20c5jo21cC-ckVMl2zsMA5Qq1mmgGbZxNX0xpTjECopcjq_ECbHXbA54r8XfSSh024nW2zEOorLCcRqP00JKjdae9b9ULQQP4zD4XnSQFRKEi_Nrq" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] tracking-[0.2em] uppercase mb-6">
            Identity & Excellence
          </div>
          <h1 className="font-headline font-extrabold text-7xl md:text-9xl leading-[0.9] tracking-tighter mb-8 uppercase italic">
            The <span className="text-primary-container block not-italic">710LABS</span> Standard
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light mb-10">
            We are not an option; we are the authority. Our culture is not built on consensus, but on <span className="text-white font-bold">unwavering discipline</span> and military-grade execution.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-tight px-10 py-5 transition-all hover:bg-surface-bright">
              Begin Training
            </button>
            <button className="border border-outline-variant/20 text-on-surface font-headline font-bold uppercase tracking-tight px-10 py-5 hover:bg-white/5 transition-all">
              View Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* The Pillars - Bento Grid */}
      <section className="px-12 md:px-24 py-32 bg-surface-container-low">
        <div className="grid grid-cols-12 gap-8">
          {/* Pillar 1: Iron Discipline */}
          <div className="col-span-12 md:col-span-7 bg-surface-container-highest p-12 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-headline font-black text-6xl text-white/10 italic">01</span>
                <span className="material-symbols-outlined text-primary-container text-4xl">schedule</span>
              </div>
              <h3 className="font-headline font-extrabold text-4xl uppercase tracking-tighter mb-6">Iron Discipline</h3>
              <p className="font-body text-on-surface-variant leading-relaxed max-w-md">
                Success begins before the sun. Mandatory training commences at <span className="text-white font-bold">6:00 AM</span>. Punctuality is not a virtue; it is a baseline requirement for entry.
              </p>
            </div>
            <div className="mt-16 flex items-center gap-4 text-primary-container font-label uppercase tracking-widest text-xs font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
              Sync Watches <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
            <img alt="Training" className="absolute right-0 bottom-0 w-1/3 h-2/3 object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATHBQ7Lc0mFhnQ4hw1ytQpW_5PabNExgoTWIRoTIbrAyexQazdIjrEK3_ePMl27rcPgosi291bwIxMrDDp6dbdEd1Sbv4hguX73Q0acdxP1CZEuy7n79pScRq696Wp2kc4oL47GNSBesdYz-iD2Cz8X7dwcSKKQ2sd63DwrAv0CIDbqXdaWNJH2W6fif_l7mKWWXbewrXVHkcpoonEj0Mk0ZbRk6HTGxtocrSFiQxhrSbeoWhs6HuEkrXWrYPVPQXGC4m8KTP8qzC_" />
          </div>
          
          {/* Pillar 2: Elite Execution */}
          <div className="col-span-12 md:col-span-5 bg-surface-container-high p-12 flex flex-col justify-between border-l border-white/5">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-headline font-black text-6xl text-white/10 italic">02</span>
                <span className="material-symbols-outlined text-primary-container text-4xl">trending_up</span>
              </div>
              <h3 className="font-headline font-extrabold text-4xl uppercase tracking-tighter mb-6">Elite Execution</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Our performance benchmarks are the floor, not the ceiling. In 710LABS, excellence is the statistical norm, not the exception.
              </p>
            </div>
            {/* Metric Monolith */}
            <div className="mt-12 bg-surface-container-lowest p-6 border-l-2 border-primary-container">
              <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-2">Performance Yield</div>
              <div className="font-headline font-black text-5xl text-on-surface">99.8%</div>
            </div>
          </div>
          
          {/* Pillar 3: Uncompromising Standards */}
          <div className="col-span-12 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12" style={{ background: "linear-gradient(135deg, #e60000 0%, #690000 100%)" }}>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-headline font-black text-6xl text-white/20 italic">03</span>
                <h3 className="font-headline font-extrabold text-5xl uppercase tracking-tighter text-white">Uncompromising Standards</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-white mt-1">check_circle</span>
                  <div>
                    <span className="block font-headline font-bold text-lg text-white uppercase italic">Suit Culture</span>
                    <span className="text-white/80 font-body text-sm">Absolute executive presence. Image is the first message of competence.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-white mt-1">check_circle</span>
                  <div>
                    <span className="block font-headline font-bold text-lg text-white uppercase italic">Drug-Free Environment</span>
                    <span className="text-white/80 font-body text-sm">Total mental clarity. Zero tolerance for any substance that clouds judgment.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-white mt-1">check_circle</span>
                  <div>
                    <span className="block font-headline font-bold text-lg text-white uppercase italic">Executive Presence</span>
                    <span className="text-white/80 font-body text-sm">Leadership in every interaction. We communicate authority and precision.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-white mt-1">bolt</span>
                  <div>
                    <span className="block font-headline font-bold text-lg text-white uppercase italic">Corporate Delta Force</span>
                    <span className="text-white/80 font-body text-sm">Operational precision across all global sectors. High-stakes problem solving.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative w-full md:w-1/3 aspect-square overflow-hidden border-8 border-white/10">
              <img alt="Professional" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwnOpbH38tqVksi6-s32k_VbQH1Ud6Wir9pWZrG1E2UzPRjNq7yqjgTAK3ldOHA7gEcyI6R1WedzlHYTToinLZlgyBo014yOelYQbGOqdztvalLGjtGTPdo4DQQ_dggDou5Q9yuL-lLhPMSYET24zqcZ_D11xrCkNBxfjBY4-6JYX_WXx-Rk17fjDLxufuSEhNSA362TKerwf0JmP2-KyrHRwwktIPm_tF9U81FE-n4aUrmINaEWYYxvXcjHDkLCGjgzw_oIV_vN6-" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics / Authority Section */}
      <section className="py-32 px-12 md:px-24 flex flex-col items-center text-center">
        <h2 className="font-headline font-black text-6xl md:text-8xl uppercase tracking-tighter mb-24 opacity-20">The Command Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 w-full max-w-7xl bg-white/5 p-1">
          <div className="bg-surface-dim p-12">
            <div className="font-headline font-black text-6xl text-primary-container mb-2">04</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Operational Languages</div>
          </div>
          <div className="bg-surface-dim p-12">
            <div className="font-headline font-black text-6xl text-primary-container mb-2">24/7</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Executive Oversight</div>
          </div>
          <div className="bg-surface-dim p-12">
            <div className="font-headline font-black text-6xl text-primary-container mb-2">0%</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Error Tolerance</div>
          </div>
          <div className="bg-surface-dim p-12">
            <div className="font-headline font-black text-6xl text-primary-container mb-2">100+</div>
            <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Leaders Formed</div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-40 px-12 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#e6000040_0%,_transparent_70%)]"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-headline font-extrabold text-6xl uppercase tracking-tighter mb-8">Do You Have the Discipline?</h2>
          <p className="font-body text-on-surface-variant text-lg mb-12">
            We seek the 1%. Those who find freedom in rules and power in structure. If you seek comfort, this is not your place.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-tight px-12 py-6 transition-all hover:bg-surface-bright">
              Apply to Vanguard
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
