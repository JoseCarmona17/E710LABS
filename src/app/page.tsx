import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center px-6 md:px-12 md:px-8 md:px-24 overflow-hidden pt-20"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(19, 19, 19, 0.8), rgba(22, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl z-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-primary-container"></span>
            <span className="font-label text-sm uppercase tracking-[0.3em] text-primary">
              Elite Force Operations
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-8 text-on-surface">
            Operational Alpha. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-white">
              Institutional Scale.
            </span>
            <br />
            Next-Gen Debt Resolution.
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 font-light leading-relaxed">
            We are a cross-border operational platform engineered to transform debt resolution into a scalable, data-driven, and compliance-first asset class across Latin America.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/technical">
              <button className="bg-primary-container text-on-primary-container px-10 py-5 font-headline font-bold uppercase tracking-tight text-sm active:scale-95 transition-all">
                Optimize Operations
              </button>
            </Link>
            <Link href="/join">
              <button className="bg-transparent border border-outline-variant/30 text-white px-10 py-5 font-headline font-bold uppercase tracking-tight text-sm hover:bg-surface-bright transition-all">
                Join the Elite
              </button>
            </Link>
          </div>
        </div>
        {/* Side Metric Monolith */}
        <div className="absolute right-0 bottom-0 p-6 md:p-12 hidden lg:block">
          <div className="bg-surface-container-highest p-8 w-64 border-l-2 border-primary-container">
            <div className="text-label text-[10px] uppercase tracking-widest text-primary mb-2">
              Network Uptime
            </div>
            <div className="text-headline text-3xl md:text-5xl font-black text-on-surface">
              99.9%
            </div>
            <div className="mt-4 text-[10px] text-on-surface-variant opacity-60">
              SLA GUARANTEED
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Model Bento Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 md:px-8 md:px-24 bg-surface-dim">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 mb-24">
          <div className="md:col-span-8">
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-4">
              The Hybrid Engine
            </h2>
            <p className="font-body text-on-surface-variant max-w-xl">
              A surgical strike at operational inefficiency. We blend the
              security of high-tier fixed centers with the limitless scalability
              of our private virtual cloud.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-10 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8">
              payments
            </span>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight">
              Financial Recovery
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
              Transforming non-performing assets into structured revenue streams through behavioral science and data-driven engagement.
            </p>
            <div className="h-1 w-0 group-hover:w-full bg-primary-container transition-all duration-500"></div>
          </div>
          <div className="bg-surface-container-highest p-10 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-8">
                account_balance
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight">
                Credit Advisory & Restructuring
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
                Strategic consulting and lifecycle management for complex, high-value debt portfolios requiring institutional-grade execution.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 p-4 opacity-10">
              <span
                className="material-symbols-outlined text-[120px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                handshake
              </span>
            </div>
            <div className="h-1 w-0 group-hover:w-full bg-primary-container absolute bottom-0 left-0 transition-all duration-500"></div>
          </div>
          <div className="bg-surface-container-low p-10 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-8">
              admin_panel_settings
            </span>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight">
              Sovereign BPO Framework
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
              A hybrid operations model that shifts from "outsourced labor" to "operational intelligence" under the Compliance Shield.
            </p>
            <div className="h-1 w-1/3 bg-primary-container/20 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* Markets & Map Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 md:px-8 md:px-24 bg-surface-container-low flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12 leading-tight">
            Strategic <br />
            Territories
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6 border-l-2 border-outline-variant/20 pl-6 hover:border-primary-container transition-colors py-2">
              <span className="font-headline text-3xl font-black text-on-surface opacity-20">
                01
              </span>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-widest text-lg">
                  United States & Canada
                </h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Multilingual operations serving established markets with native English and French.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 border-l-2 border-outline-variant/20 pl-6 hover:border-primary-container transition-colors py-2">
              <span className="font-headline text-3xl font-black text-on-surface opacity-20">
                02
              </span>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-widest text-lg">
                  Latin America
                </h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Strategic hubs for Spanish and Portuguese coverage across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[500px] bg-surface-dim relative overflow-hidden">
          <img
            alt="map"
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJtHfE3garuDPf9-NbTDlsNe-FAbL5FpokMuhQQcJmIQ8KDSqyU8Chq-cv3cMxrOgin3_WNr4fZjOn71YDnPRw6LdcKaiisFrZ_uBEu8KJyO2ZCCOgVoEr0CyXb5hkI8bjdxX7u4bO8VYL7yMXa7kGVVBlHAGVpci36fR5SSkVaTInqZ8kiBv_0hw7Y5HwbEMf0VMjupLUMFB3942QhbERtBB7tDRNCtZHbJRheULXbQXPKUNrTEuBXGzbRjZHsG-phnLlpvTNbRhv"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-primary-container animate-ping rounded-full absolute"></div>
            <div className="w-4 h-4 bg-primary-container rounded-full relative"></div>
          </div>
        </div>
      </section>

      {/* Metric Monoliths Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 md:px-8 md:px-24 bg-surface-dim grid grid-cols-2 md:grid-cols-4 gap-1">
        <div className="bg-surface-container-low p-6 md:p-12 text-center">
          <div className="text-headline text-3xl md:text-5xl font-black text-on-surface mb-2">
            4
          </div>
          <div className="text-label text-[10px] uppercase tracking-[0.2em] text-primary">
            Native Languages
          </div>
        </div>
        <div className="bg-surface-container-low p-6 md:p-12 text-center">
          <div className="text-headline text-3xl md:text-5xl font-black text-on-surface mb-2">
            12+
          </div>
          <div className="text-label text-[10px] uppercase tracking-[0.2em] text-primary">
            Global Offices
          </div>
        </div>
        <div className="bg-surface-container-low p-6 md:p-12 text-center">
          <div className="text-headline text-3xl md:text-5xl font-black text-on-surface mb-2">
            24/7
          </div>
          <div className="text-label text-[10px] uppercase tracking-[0.2em] text-primary">
            Active Coverage
          </div>
        </div>
        <div className="bg-surface-container-low p-6 md:p-12 text-center">
          <div className="text-headline text-3xl md:text-5xl font-black text-on-surface mb-2">
            15ms
          </div>
          <div className="text-label text-[10px] uppercase tracking-[0.2em] text-primary">
            Avg Latency
          </div>
        </div>
      </section>
    </>
  );
}
