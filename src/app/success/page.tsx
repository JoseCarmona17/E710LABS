export default function Success() {
  return (
    <>
      <section className="relative h-[800px] flex items-center px-12 overflow-hidden bg-surface-dim pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Background" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa2WN4POlRejAgu5BnF2nQ7dFDFfMyg8eTUoCIf21odz9D5a-_ufbg1UdWScc6iBLOJ9z9be3K41-RGYnQ1Ds6gEpEHNsXBZ1fvVKsbXQhrOeAnK2-xb5A-nUcxjOWEjp4IrVfFvWM5j7ao209Puo-hRgPkZRRl1nMkikichdCIP035MAWDAxM5Cfcjfdp2-nYY53Rq7DbQAYPZKbqGkdPycCxxcwiYVTbindKYtk1Sd_j_VCfSrOwFRuPsN4VIE0z6k1Ozpv1zYFe" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <span className="font-label text-primary-container font-bold tracking-[0.4em] uppercase mb-6 block border-l-4 border-primary-container pl-4">The Executive Vanguard</span>
          <h1 className="font-headline text-7xl md:text-[120px] font-extrabold tracking-tighter leading-none mb-8">
            ELITE <br /> <span className="text-white">PARTNERSHIPS</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-tertiary max-w-2xl leading-relaxed opacity-80">
            Deploying operational rigour and cultural fluency for the world's most demanding market leaders. From Fintech disruption to Ecommerce scaling.
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 bg-surface-container-low border-y border-outline-variant/10">
        <div className="p-16 border-r border-outline-variant/10 group hover:bg-surface-container transition-colors duration-500">
          <div className="w-1 h-16 bg-primary-container mb-8 group-hover:h-20 transition-all"></div>
          <h3 className="font-headline text-6xl font-black mb-2 text-on-surface">14ms</h3>
          <p className="font-label uppercase tracking-widest text-xs font-bold text-primary-container mb-4">Average Latency</p>
          <p className="text-sm text-white/40 leading-relaxed">Friction-less integration across global nodes and localized data processing centres.</p>
        </div>
        <div className="p-16 border-r border-outline-variant/10 bg-surface-container/30 group hover:bg-surface-container transition-colors duration-500">
          <div className="w-1 h-16 bg-primary-container mb-8 group-hover:h-20 transition-all"></div>
          <h3 className="font-headline text-6xl font-black mb-2 text-on-surface">99.9%</h3>
          <p className="font-label uppercase tracking-widest text-xs font-bold text-primary-container mb-4">Operational Uptime</p>
          <p className="text-sm text-white/40 leading-relaxed">Guaranteed performance and structural resilience in high-stakes digital environments.</p>
        </div>
        <div className="p-16 border-r border-outline-variant/10 group hover:bg-surface-container transition-colors duration-500">
          <div className="w-1 h-16 bg-primary-container mb-8 group-hover:h-20 transition-all"></div>
          <h3 className="font-headline text-6xl font-black mb-2 text-on-surface">4.2B</h3>
          <p className="font-label uppercase tracking-widest text-xs font-bold text-primary-container mb-4">Annual Transactions</p>
          <p className="text-sm text-white/40 leading-relaxed">Scalability engineered for massive throughput without compromising data integrity.</p>
        </div>
        <div className="p-16 bg-surface-container/30 group hover:bg-surface-container transition-colors duration-500">
          <div className="w-1 h-16 bg-primary-container mb-8 group-hover:h-20 transition-all"></div>
          <h3 className="font-headline text-6xl font-black mb-2 text-on-surface">0s</h3>
          <p className="font-label uppercase tracking-widest text-xs font-bold text-primary-container mb-4">Cultural Friction</p>
          <p className="text-sm text-white/40 leading-relaxed">Seamless multilingual synchronization across diverse regional operational units.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-12 bg-surface-dim">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="font-label text-xs font-bold tracking-[0.3em] uppercase text-primary-container mb-4 block">Proven Trajectories</span>
            <h2 className="font-headline text-6xl font-extrabold tracking-tighter mb-4 uppercase">Success Stories</h2>
            <div className="w-24 h-1 bg-primary-container"></div>
          </div>
          <div className="flex space-x-4">
            <button className="border border-outline-variant/20 px-10 py-4 font-label text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all font-bold">Category: All</button>
            <button className="bg-primary-container px-10 py-4 font-label text-[10px] tracking-[0.2em] uppercase text-white font-bold">Featured</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-outline-variant/10">
          <div className="md:col-span-8 group relative aspect-[16/9] md:aspect-auto md:h-[600px] overflow-hidden bg-surface-container-highest">
            <img alt="Fintech Case Study" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiaEyh2cEZdYSeTYpoaf-InGAxuJgFbzk6fAjSWdcvzbveI9R16Bkx7pyB9_Io_wY96nO_Kj0oT5_9tltfz1N1mGdT_jQgrJgBNqYyJtkDVwC2-xbBvrRpbU4M5RSWUTQG_HYloFB46C-cEDD_fj3FbkwGIvBYbIBEQmJyOgQ1IGFFdH29ik5YucujC36R42Dr81a5WkxTWC_HkWtVwIYjWi7hM7eURjcRFWAPnA09LOOF3cP0Hp_Bd7T_CC7NVPeMBQwdSbGSS7D9" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-16 w-full">
              <span className="inline-block bg-primary-container text-white text-[10px] font-bold px-4 py-1.5 mb-6 tracking-[0.2em] uppercase">Sector: Fintech</span>
              <h3 className="font-headline text-5xl font-bold mb-6 tracking-tight max-w-xl">The Neo-Bank Migration</h3>
              <p className="text-tertiary max-w-xl mb-8 text-lg opacity-80">Integrating legacy core banking systems with modern API infrastructures across 12 European markets while maintaining zero downtime.</p>
              <button className="flex items-center group/btn text-xs font-bold uppercase tracking-[0.3em] text-primary-container border-b border-primary-container/30 pb-2">
                Explore Technical Brief <span className="material-symbols-outlined ml-4 transition-transform group-hover/btn:translate-x-4">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high h-[600px]">
            <img alt="Ecommerce Case Study" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3WU1L65O_mPJCWSeIqtvURHMI7AA5DH-nShCxqfjRinYhCuyiA-Xd68KsRw2YRhN0LIplG20TMXBJWBSZyHkDqlXfNk9uPv_0cSTZpvpvGcmuJU8Oc7sQse0F46AaEkIypu_g_YpLPfNPEXPU2kKDs4HFBbhQYsfNynwN7KfPnSIEDuYKwHJmF00o5vmyWW5Ox1NQLDY5aqQS_v2VKg3KF2D27wDOjETJ0sg4-DbkdnkQwIdFf8I-7-M9xTJGSsJi-9v3tuvoBC9i" />
            <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>
            <div className="absolute inset-0 p-16 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
              <span className="inline-block border border-white/40 text-white text-[10px] font-bold px-4 py-1.5 mb-6 tracking-[0.2em] uppercase w-fit">Sector: Ecommerce</span>
              <h3 className="font-headline text-4xl font-bold mb-6 tracking-tight">Global Retail Sync</h3>
              <p className="text-tertiary text-sm mb-10 leading-relaxed">Real-time inventory orchestration and supply chain logistics for a global luxury conglomerate.</p>
              <button className="material-symbols-outlined text-primary-container text-5xl hover:scale-110 transition-transform">add_circle</button>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-high h-[500px]">
            <img alt="Tech Case Study" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0eq1Sy54jFMR3_VnkZKulkC83KS_IHKSpqoT_lg-SZFUX19PuVHhbkH8FGnHq_YRqp5eZmqq3So1cY82-2Luwg3BSyMTb5E2Zmx8BApAmVwOCnUqflUhneMDdr6JXPyViDNWUZIAx7xMuz8pTIgz0F-HHqg5aIKvN0n6Zzo_u80y_YmiknaIoHdTo57Fs7wZoikCBb8ZcOpntqoMm7ASGe-2LjMl8Ky5i7TxGCIE0LQ3gMk-QCJB_BhQ0icQodxeERCqPsvuiTzD_" />
            <div className="absolute inset-0 p-16 flex flex-col justify-between">
              <span className="font-label text-xs tracking-[0.3em] text-primary-container font-black">ANALYSIS 03 / TECHNOLOGY</span>
              <div>
                <h3 className="font-headline text-3xl font-bold mb-6">Cloud Sovereign</h3>
                <p className="text-tertiary text-sm leading-relaxed mb-8">Securing critical digital infrastructure for a Silicon Valley unicorn with zero-trust architecture.</p>
                <div className="h-1 w-full bg-primary-container/20 overflow-hidden">
                  <div className="h-full bg-primary-container w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 bg-surface-container-highest p-16 flex flex-col justify-center relative overflow-hidden">
            <span className="material-symbols-outlined text-[200px] text-white/5 absolute -top-12 -left-12" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <div className="relative z-10 max-w-3xl">
              <p className="font-headline text-4xl font-medium leading-tight mb-12 text-on-surface italic">
                "The operational rigour displayed by 710LABS is unparalleled. They didn't just integrate our systems; they absorbed our culture and transformed our global delivery model into a competitive advantage."
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-primary-container flex items-center justify-center font-bold text-white text-xl">MR</div>
                <div>
                  <p className="font-label text-sm font-bold tracking-[0.2em] uppercase text-white">Marcus Reign</p>
                  <p className="text-xs text-primary-container font-bold uppercase tracking-widest mt-1">Chief Technology Officer, Obsidian Financial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="py-16 border-t border-b border-outline-variant/10 bg-surface-dim overflow-hidden whitespace-nowrap">
        <div className="flex items-center space-x-32 px-12 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
          <div className="text-2xl font-black font-headline tracking-tighter uppercase italic">Vanguard.AI</div>
          <div className="text-2xl font-black font-headline tracking-tighter uppercase">NexusCorp</div>
          <div className="text-2xl font-black font-headline tracking-tighter uppercase italic">Echelon.sys</div>
          <div className="text-2xl font-black font-headline tracking-tighter uppercase">Titan_Group</div>
          <div className="text-2xl font-black font-headline tracking-tighter uppercase italic">Apex_Flow</div>
          <div className="text-2xl font-black font-headline tracking-tighter uppercase">Core_X</div>
          <div className="text-2xl font-black font-headline tracking-tighter uppercase italic text-primary-container opacity-100">Aegis_Global</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-12 text-center bg-surface-container-low relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-primary-container"></div>
        <h2 className="font-headline text-6xl md:text-[120px] font-black tracking-tighter mb-16 uppercase leading-none">
          Ready for the <br /><span className="text-primary-container">Next Tier?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <button className="bg-primary-container text-white px-16 py-6 font-headline font-bold uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Initiate Partnership
          </button>
          <button className="border border-outline-variant/40 text-on-surface px-16 py-6 font-headline font-bold uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black transition-all">
            Review Capability Deck
          </button>
        </div>
      </section>
    </>
  );
}
