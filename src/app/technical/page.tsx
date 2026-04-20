export default function Technical() {
  return (
    <>
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-6 md:p-12 items-end pt-24 md:pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="lg:col-span-8">
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-on-background">
            Institutional <br />
            <span className="text-primary-container">Execution</span>
          </h1>
          <p className="mt-8 font-body text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
            E710Labs institutionalizes a Hybrid-Remote Operating Model delivering credit advisory, restructuring, and high-performance debt resolution. We convert non-performing assets into structured revenue streams with precision and predictability.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col items-end gap-4">
          <div className="w-full h-px bg-outline-variant/30"></div>
          <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary-container font-bold">
            Operational Alpha Protocol
          </span>
          <span className="font-label text-xs tracking-widest text-on-surface/50">
            STRATEGIC ADVISORY ACTIVE
          </span>
        </div>
      </section>

      {/* Command Center Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-12 pb-20 max-w-7xl mx-auto">
        {/* Left Column: Intelligence */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <div className="bg-surface-container-low p-8 border-l-2 border-primary-container">
            <h3 className="font-label uppercase tracking-[0.15em] text-[10px] text-primary-container font-bold mb-6">
              Strategic Headquarters
            </h3>
            <p className="font-headline text-2xl font-bold text-white mb-2">
              Pan-Americas Operations
            </p>
            <p className="font-body text-xs text-on-surface/60 leading-relaxed uppercase tracking-wider">
              United States & Canada
              <br />
              Latin America
              <br />
              Unified Operational Hub
            </p>
          </div>
          {/* Map Visualization Block */}
          <div className="bg-surface-container-high h-[350px] relative overflow-hidden group border border-white/5">
            <img
              alt="Map"
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hzohiR8P3pZ4bM32XU4W-09I7xSQ9iPtnWtczqcTSlPx50silsMxEmffkyuqyQ6iRUa--vGDaK-XVaGai6tSwt1mlasem7Sv68PfrUIn0X_Ks_WRpDhdXH1G6_lrgXBRRt86I_PVNFpPk7asHhVUoQEhiDRHyBnJHXsCvuVlvlhGQk6MhGP2-4hzCkjEoNuW9SNhYfIcsN2y6-yho_yvPC09bqzvyBvOvHkNgkIxm1rggnFTYo0ErvDoROvdanFbwEkY_p3JABJA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
                <span className="font-label text-[9px] uppercase tracking-widest text-white">
                  Live Hub Status
                </span>
              </div>
              <p className="font-headline text-lg font-bold text-white uppercase tracking-tight">
                Strategic Hub Cluster
              </p>
              <p className="font-body text-[10px] text-on-surface/50 uppercase tracking-wide">
                Real-time operational visibility active across 4 nodes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 border border-white/5">
              <span className="material-symbols-outlined text-primary-container mb-2 text-xl">
                verified_user
              </span>
              <p className="font-label text-[9px] uppercase text-white/40 mb-1">
                Security
              </p>
              <p className="font-body text-xs font-bold uppercase tracking-widest">
                Tier 4 Data
              </p>
            </div>
            <div className="bg-surface-container-low p-6 border border-white/5">
              <span className="material-symbols-outlined text-primary-container mb-2 text-xl">
                speed
              </span>
              <p className="font-label text-[9px] uppercase text-white/40 mb-1">
                Latency
              </p>
              <p className="font-body text-xs font-bold uppercase tracking-widest">
                &lt; 15ms
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Briefing Form */}
        <div className="lg:col-span-2">
          <div className="bg-surface-container-highest p-6 md:p-12 border-t-4 border-primary-container shadow-2xl">
            <div className="mb-10">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tighter mb-2">
                Technical Briefing Intake
              </h2>
              <p className="font-body text-xs text-on-surface/50 uppercase tracking-[0.1em]">
                All data transmissions are encrypted via RSA-4096 and filtered
                through 710 Executive Layer protocols.
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold">
                  Briefing Officer Name
                </label>
                <input
                  className="bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-body p-3 transition-all placeholder:text-white/10 uppercase text-xs rounded-none"
                  placeholder="Full Identity"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold">
                  Secure Communication Node
                </label>
                <input
                  className="bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-body p-3 transition-all placeholder:text-white/10 uppercase text-xs rounded-none"
                  placeholder="email@secure-domain.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold">
                  Projected Concurrency
                </label>
                <select className="bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-body p-3 transition-all uppercase text-xs appearance-none cursor-pointer rounded-none">
                  <option>0 - 50 Active Sockets</option>
                  <option>50 - 250 Active Sockets</option>
                  <option>250 - 1000 Active Sockets</option>
                  <option>1000+ Enterprise Grade</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold">
                  Priority Tier
                </label>
                <select className="bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-body p-3 transition-all uppercase text-xs appearance-none cursor-pointer rounded-none">
                  <option>Standard Deployment</option>
                  <option>Accelerated Integration</option>
                  <option>Critical / Mission Ready</option>
                </select>
              </div>
              {/* Regional Nodes */}
              <div className="md:col-span-2 flex flex-col gap-3">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold">
                  Operational Zones
                </label>
                <div className="flex flex-wrap gap-2">
                  <label className="flex items-center gap-3 bg-surface-container-low px-4 py-2 cursor-pointer hover:bg-surface-bright transition-colors border border-white/5 w-full sm:w-auto">
                    <input
                      className="w-3 h-3 rounded-none border-outline-variant bg-transparent text-primary-container focus:ring-0"
                      type="checkbox"
                    />
                    <span className="font-label text-[9px] uppercase tracking-widest">
                      United States
                    </span>
                  </label>
                  <label className="flex items-center gap-3 bg-surface-container-low px-4 py-2 cursor-pointer hover:bg-surface-bright transition-colors border border-white/5 w-full sm:w-auto">
                    <input
                      className="w-3 h-3 rounded-none border-outline-variant bg-transparent text-primary-container focus:ring-0"
                      type="checkbox"
                    />
                    <span className="font-label text-[9px] uppercase tracking-widest">
                      Canada
                    </span>
                  </label>
                  <label className="flex items-center gap-3 bg-surface-container-low px-4 py-2 cursor-pointer hover:bg-surface-bright transition-colors border border-white/5 w-full sm:w-auto">
                    <input
                      className="w-3 h-3 rounded-none border-outline-variant bg-transparent text-primary-container focus:ring-0"
                      type="checkbox"
                    />
                    <span className="font-label text-[9px] uppercase tracking-widest">
                      Latin America
                    </span>
                  </label>
                </div>
              </div>
              {/* Technical Requirements */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-primary-container font-bold">
                  Architecture Brief / Technical Scope
                </label>
                <textarea
                  className="bg-surface-container-lowest border-0 border-b border-outline-variant/30 focus:border-primary-container focus:ring-0 text-white font-body p-4 transition-all placeholder:text-white/10 uppercase text-xs resize-none rounded-none"
                  placeholder="Detail the technical architecture requirements and performance KPIs..."
                  rows={4}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-6">
                <button className="w-full bg-primary-container py-5 flex items-center justify-center gap-4 group transition-all hover:bg-white text-on-primary-container">
                  <span className="font-headline font-black uppercase tracking-[0.2em] text-sm group-hover:text-primary-container">
                    Transmit Directives
                  </span>
                  <span className="material-symbols-outlined group-hover:text-primary-container text-lg">
                    send
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Performance Metrics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-low p-6 border-l-2 border-primary-container border-y border-r border-white/5">
              <p className="font-label text-[9px] uppercase text-white/40 mb-1">
                Global Reach
              </p>
              <p className="font-headline text-3xl font-black">99.9%</p>
              <div className="mt-2 h-0.5 w-full bg-surface-container-highest">
                <div className="h-full bg-primary-container w-[99.9%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-primary-container border-y border-r border-white/5">
              <p className="font-label text-[9px] uppercase text-white/40 mb-1">
                Response Latency
              </p>
              <p className="font-headline text-3xl font-black">4 SEC</p>
              <div className="mt-2 h-0.5 w-full bg-surface-container-highest">
                <div className="h-full bg-primary-container w-[85%]"></div>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 border-l-2 border-primary-container border-y border-r border-white/5">
              <p className="font-label text-[9px] uppercase text-white/40 mb-1">
                Elite Personnel
              </p>
              <p className="font-headline text-3xl font-black">5K+</p>
              <div className="mt-2 h-0.5 w-full bg-surface-container-highest">
                <div className="h-full bg-primary-container w-[70%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
