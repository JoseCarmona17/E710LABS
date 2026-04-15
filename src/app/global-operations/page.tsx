import Link from "next/link";

export default function GlobalOperations() {
  return (
    <>
      <section className="relative h-[85vh] flex items-center px-6 md:px-12 overflow-hidden bg-surface-container-lowest border-b border-white/5 pt-20">
        <div className="absolute inset-0 opacity-40">
          <img
            alt="Server infrastructure"
            className="w-full h-full object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXsUdGITrJ130WcjwxlzHZAiK5e0AANnwUuOTJfFPrMOkDbEr1wf24GM-w0reGYYGjba0cBK_BrclhqW7gvmOSHsHVI3dd_H1bp6czunM_VbfyIWWuE0pYHI-Tu5aj0J_DCdxVawsUD9C4FnYK137Z9CB6hD6-HJ43Zoy3AIVwm3Cc2_TVpx9JsbYeZgleYtrcPGAWepzLbGg3-6JJnKDr9h0-rjzZOFcBzubNl2C222ZNk_hjkPKgniMjuRjs-eZwomC84fErAduf"
          />
        </div>
        <div className="relative z-10 max-w-5xl">
          <p className="font-label text-primary-container font-bold uppercase tracking-[0.4em] mb-4 text-xs">
            Strategic Logistics Command
          </p>
          <h1 className="font-headline tracking-tighter text-4xl md:text-6xl lg:text-7xl lg:text-9xl font-extrabold text-on-surface mb-8 leading-[0.85]">
            GLOBAL
            <br />
            INFRASTRUCTURE
          </h1>
          <p className="font-body text-xl text-tertiary max-w-2xl leading-relaxed border-l-2 border-primary-container pl-8 py-2">
            Engineering a high-performance hybrid model. Fixed strategic hubs in
            USA and Costa Rica paired with a resilient, distributed virtual
            network for total operational dominance.
          </p>
        </div>
        <div className="absolute right-12 bottom-12 hidden lg:block">
          <div className="border-l-2 border-primary-container bg-surface-container-highest/80 backdrop-blur-md p-8 w-72 border-r border-y border-white/10 shadow-[0_0_20px_rgba(230,0,0,0.2)]">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary-container font-black">
              System Status
            </span>
            <div className="text-3xl md:text-5xl font-headline font-black text-on-surface mt-2 tracking-tighter italic">
              ACTIVE
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#e60000]"></div>
              <span className="text-[10px] font-label uppercase tracking-tighter text-white/60">
                Real-time Node Sync [GLOBAL_MESH]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Hybrid Model / Grid Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-dim">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 border border-white/5">
          <div className="md:col-span-8 bg-surface-container-low p-6 md:p-12 lg:p-10 md:p-20">
            <h2 className="font-headline text-3xl md:text-5xl font-black mb-16 tracking-tighter">
              HYBRID OPERATIONAL MODEL
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-primary-container bg-primary-container/10 px-2 py-1">
                    CORE_01
                  </span>
                  <h3 className="text-on-surface font-headline font-bold text-2xl uppercase tracking-tight">
                    USA COMMAND HUB
                  </h3>
                </div>
                <p className="font-body text-base text-tertiary leading-relaxed">
                  Tier IV Data centers situated in key financial corridors.
                  Optimized for ultra-low latency and maximum data sovereignty
                  compliant with federal standards and high-stakes trade
                  environments.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase border border-white/5">
                    NY-METRO_01
                  </span>
                  <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase border border-white/5">
                    TX-CORE_04
                  </span>
                  <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase border border-white/5">
                    VA-QUANTUM
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-primary-container bg-primary-container/10 px-2 py-1">
                    CORE_02
                  </span>
                  <h3 className="text-on-surface font-headline font-bold text-2xl uppercase tracking-tight">
                    LATAM STRATEGIC HUB
                  </h3>
                </div>
                <p className="font-body text-base text-tertiary leading-relaxed">
                  Strategic nearshore headquarters in Costa Rica. Hybrid
                  operational center focusing on multilingual technical support
                  and specialized tactical redundancy for global client success.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase border border-white/5">
                    SJ-LATAM_OPS
                  </span>
                  <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase border border-white/5">
                    MULTILINGUAL_ELITE
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-primary-container p-6 md:p-12 lg:p-10 md:p-20 flex flex-col justify-between group cursor-crosshair">
            <div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-primary-container leading-[0.9] uppercase tracking-tighter">
                VIRTUAL
                <br />
                NETWORK
              </h2>
              <p className="text-on-primary-container/90 mt-8 font-body text-lg leading-snug">
                Decentralized elastic workforce. 100% encrypted edge nodes
                ensuring zero-point failure across 48 timezones. Total
                scalability on demand.
              </p>
            </div>
            <div className="flex items-end justify-between">
              <span className="material-symbols-outlined text-3xl md:text-5xl md:text-8xl text-on-primary-container/20 group-hover:text-on-primary-container/40 transition-colors duration-500">
                hub
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-primary-container font-black transform rotate-90 origin-bottom-right translate-y-[-20px]">
                EDGE_SECURED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical KPIs Bento Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-none">
              OPERATIONAL
              <br />
              METRICS
            </h2>
            <div className="w-32 h-2 bg-primary-container mt-6"></div>
          </div>
          <div className="font-label text-xs uppercase tracking-[0.3em] text-white/40 mb-2">
            Live Performance Telemetry
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-surface-container-high p-10 flex flex-col justify-between min-h-[350px] border border-white/5 hover:border-primary-container/30 transition-all">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                bolt
              </span>
              <div className="text-right">
                <span className="font-label text-[10px] uppercase tracking-widest text-white/40 block">
                  Priority Protocol
                </span>
                <span className="font-label text-xs font-black text-primary-container uppercase">
                  CRITICAL RESPONSE
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-3xl md:text-5xl md:text-8xl font-black mb-2 tracking-tighter">
                &lt;72 HRS
              </h3>
              <p className="font-label text-sm uppercase tracking-[0.2em] text-primary-container font-black">
                DEPLOYMENT SPEED
              </p>
              <p className="font-body text-base text-tertiary mt-6 max-w-md">
                Rapid-onboarding protocol for enterprise-scale tactical teams
                anywhere in the global grid. Zero friction transition.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-highest p-10 flex flex-col justify-between border border-white/5">
            <span className="material-symbols-outlined text-primary-container text-4xl">
              speed
            </span>
            <div>
              <h3 className="font-headline text-3xl md:text-5xl font-black mb-2 tracking-tighter">
                99.9%
              </h3>
              <p className="font-label text-xs uppercase tracking-widest text-white/60 font-bold">
                UPTIME SLA GUARANTEE
              </p>
            </div>
          </div>
          <div className="bg-surface-container-highest p-10 flex flex-col justify-between border border-white/5">
            <span className="material-symbols-outlined text-primary-container text-4xl">
              security
            </span>
            <div>
              <h3 className="font-headline text-3xl md:text-5xl font-black mb-2 tracking-tighter">
                SOV_01
              </h3>
              <p className="font-label text-xs uppercase tracking-widest text-white/60 font-bold">
                DATA SOVEREIGNTY LEVEL
              </p>
            </div>
          </div>
          <div className="md:col-span-4 bg-surface-container-low p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-12 border border-white/5 mt-4">
            <div className="flex flex-col justify-center">
              <h4 className="font-headline text-3xl font-bold mb-8 text-on-surface tracking-tight">
                DATA SOVEREIGNTY & SECURITY
              </h4>
              <p className="font-body text-lg text-tertiary leading-relaxed mb-10">
                Every byte stays within designated jurisdictions. Our
                military-grade encryption stack and sovereign cloud architecture
                ensure compliance with GDPR, CCPA, and specialized financial
                sector mandates. We operate on a zero-trust foundation.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    shield_lock
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">
                    AES-256 ENCRYPTION
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    verified_user
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">
                    ZTNA PROTOCOLS
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    vpn_lock
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">
                    SOVEREIGN CLOUD
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    monitoring
                  </span>
                  <span className="font-label text-xs uppercase tracking-widest font-bold">
                    24/7 SIEM/SOAR
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[400px] bg-black overflow-hidden border border-white/10">
              <img
                alt="Digital Security"
                className="w-full h-full object-cover opacity-30 mix-blend-screen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0aGTOgMmoCMgpY6P9ZrdSIi7IhDwcVIzRnAw8QIT2UvuW0I3IYaOUP0R9N_TOClRBScQTD_WaQWbT_GAsOTbcEgVSukug_1Xna85nnnBY_O7kISLJjRhFYS66E57f5oFwvr4DuZqGF4pmuT-n4wINkwNIjqbUkSjxaK6Xq6EYOnT5ziGRvEU9aottoMAOYn4OEgyo4cgcsp6W4SdFQHZf7H9WujpOs3dRLCAfBqTqV_4JUleh-Mkfe7AcdtS80dQ9jhvabL1cDHi"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="p-10 bg-black/80 backdrop-blur-xl border border-primary-container/50 text-center shadow-[0_0_20px_rgba(230,0,0,0.2)]">
                  <span className="font-label text-[10px] uppercase tracking-[0.5em] block mb-4 text-primary-container font-black">
                    SECURITY STANDARD
                  </span>
                  <span className="font-headline text-3xl font-black tracking-tighter italic">
                    PROTOCOL VANGUARD
                  </span>
                  <div className="mt-6 flex justify-center gap-1">
                    <div className="w-1 h-1 bg-primary-container"></div>
                    <div className="w-1 h-1 bg-primary-container"></div>
                    <div className="w-1 h-1 bg-primary-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Operations Center Visualization */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-dim overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
            NETWORK OPERATIONS
            <br />
            CENTER
          </h2>
          <div className="flex justify-center mt-6">
            <div className="h-[1px] w-24 bg-white/20"></div>
            <div className="h-[1px] w-12 bg-primary-container mx-2"></div>
            <div className="h-[1px] w-24 bg-white/20"></div>
          </div>
        </div>
        <div className="relative aspect-[21/9] w-full bg-black overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(230,0,0,0.2)]">
          <img
            alt="NOC Visualization"
            className="w-full h-full object-cover opacity-40 brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAwbjYpw_X9rEb1_UYMoPV9briCGLo6o1GIFLj6zbeD-YzMsP0HOC_5hZanrvAgrUNchEFCOPB47ejQ72y5F2vsdvW41esXUxVm_6AYtA6l14IkQ2v5ZYqaJlZkIlcoNSkkvS--3OrI2uymwqSplyOHtu1tW-ZpeT_OQMYDkwa1ti1Bai4GlnZ8DSWe-R7yykVE7Ef0t2zGBAqTKmSt7-ybBJZ_B91wi8SPrl3x5UxT_1A_oB6S9BPXF5bqueoP2Gn3zKX10Bu3ul"
          />
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 p-8 pointer-events-none">
            <div className="col-start-2 row-start-2 bg-black/60 backdrop-blur-[20px] p-4 self-start border-l-4 border-primary-container h-fit w-fit">
              <p className="font-label text-[10px] text-primary-container font-black tracking-widest uppercase">
                LATENCY_CORE
              </p>
              <p className="text-3xl font-headline font-black tracking-tighter text-white">
                12ms
              </p>
            </div>
            <div className="col-start-9 row-start-2 bg-black/60 backdrop-blur-[20px] p-4 self-start border-l-4 border-primary-container h-fit w-fit">
              <p className="font-label text-[10px] text-primary-container font-black tracking-widest uppercase">
                NODE_HEALTH
              </p>
              <p className="text-3xl font-headline font-black tracking-tighter text-white">
                OPTIMAL
              </p>
            </div>
            <div className="col-start-10 row-start-5 bg-black/60 backdrop-blur-[20px] p-4 self-end border-l-4 border-primary-container h-fit w-fit">
              <p className="font-label text-[10px] text-primary-container font-black tracking-widest uppercase">
                GLOBAL_TRAFFIC
              </p>
              <p className="text-3xl font-headline font-black tracking-tighter text-white">
                4.2 TB/S
              </p>
            </div>
          </div>
          <div className="absolute bottom-12 left-12 max-w-sm">
            <div className="bg-primary-container/90 backdrop-blur-md p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                <h4 className="font-headline font-black uppercase text-xl text-on-primary-container">
                  LIVE MONITOR
                </h4>
              </div>
              <p className="font-body text-sm text-on-primary-container font-medium leading-relaxed">
                Continuous 24/7/365 surveillance of the infrastructure. Our
                engineers identify and resolve bottleneck issues before they
                impact the client perimeter. Proactive elimination of downtime
                risk.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 px-6 md:px-12 text-center bg-surface-container-low border-t border-white/5">
        <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
          READY FOR
          <br />
          DEPLOYMENT?
        </h2>
        <p className="font-body text-xl text-tertiary mb-12 max-w-2xl mx-auto">
          Interface with our executive architects to map your operational future
          and secure your global footprint.
        </p>
        <button className="bg-primary-container text-on-primary-container px-16 py-6 font-headline font-black text-xl uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(230,0,0,0.2)]">
          COMMAND STRATEGY
        </button>
      </section>
    </>
  );
}
