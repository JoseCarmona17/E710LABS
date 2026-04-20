export default function Difference() {
  return (
    <>
      <section className="relative min-h-[716px] flex items-center px-6 md:px-12 py-16 md:py-24 overflow-hidden pt-24 md:pt-36 pb-36">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp6Pe9g8urW3L0bR8CUxCH2A4tapsey-d30n68sleJcJF1Cbf6SmUQWxnfhnHdNRzoUw8-ii-dQRdfO-oqfnwUnvQT-EOpDurZAuEM-e7EgpNaP9HVgJfspvqa3sN0rIa_iVEMlOs6_ZfBWPSK--qHjAkZG5ggH46uDoxo-FhZhnsb4GF7wdc0Pp0Dj8us6zGakgDmr9Fl_RG-QrW2ReIa3GDERIKpW7lEsvgBsen8eLNFcOPgsf7xpN4l5dAd9cyBBjIJQF6GF-Z3"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-dim via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="font-label text-primary-container font-bold uppercase tracking-[0.3em] mb-4 text-sm">
            The Sovereign Architecturalist
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-8">
            Structural Advantage,
            <br />
            <span className="text-primary-container">Multicountry Scale.</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
            Our hybrid multicountry architecture eliminates geographic risk through diversified delivery locations across the Americas, managed under a single, unified framework.
          </p>
        </div>
      </section>

      {/* The Comparison Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/20">
          {/* Left Column: The Legacy Problem */}
          <div className="bg-surface-dim p-6 md:p-12 lg:pr-24">
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-12 flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">
                history
              </span>
              Legacy BPO Model
            </h2>
            <div className="space-y-12">
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-container-highest"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Operational Continuity
                </h3>
                <p className="text-on-secondary-container">
                  Fragile infrastructure reliant on single-point locations. High
                  downtime risk during localized disruptions.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-container-highest"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Immediate Scalability
                </h3>
                <p className="text-on-secondary-container">
                  Rigid recruitment cycles. Scaling up requires months of
                  physical office expansion and local logistics.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-surface-container-highest"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Talent Control
                </h3>
                <p className="text-on-secondary-container">
                  Standardized training with zero client oversight. You get
                  "available" staff, not "curated" talent.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The 710LABS Solution */}
          <div className="bg-surface-container-low p-6 md:p-12 lg:pl-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className="text-3xl md:text-5xl md:text-8xl font-black text-primary-container/10">
                710
              </span>
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-12 flex items-center gap-4 text-primary-container">
              <span className="material-symbols-outlined">shield_with_heart</span>
              Strategic Moats
            </h2>
            <div className="space-y-12">
              <div className="bg-surface-container-highest p-8 relative border-l-4 border-primary-container">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary-container mb-4">
                  The Retention Engine
                </h3>
                <div className="flex items-end gap-2 mb-2">
                   <span className="text-4xl font-extrabold tracking-tighter">
                    Behavioral Yield
                  </span>
                </div>
                <p className="text-on-surface text-sm leading-relaxed">
                  Proprietary behavioral segmentation and omnichannel architecture designed to maximize recovery yield and borrower engagement through data-driven negotiation protocols.
                </p>
              </div>
              <div className="bg-surface-container-highest p-8 relative border-l-4 border-primary-container">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary-container mb-4">
                  The Compliance Shield
                </h3>
                <div className="flex items-end gap-2 mb-2">
                   <span className="text-4xl font-extrabold tracking-tighter">
                    SOC 2 / GDPR
                  </span>
                </div>
                <p className="text-on-surface text-sm leading-relaxed">
                  Institutional-grade governance architecture with SOC 2-aligned controls and real-time audit trails, allowing tier-1 entities to outsource without regulatory exposure.
                </p>
              </div>
              <div className="bg-surface-container-highest p-8 relative border-l-4 border-primary-container">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary-container mb-4">
                  Institutional Capital Integration
                </h3>
                <div className="flex items-end gap-2 mb-2">
                   <span className="text-4xl font-extrabold tracking-tighter">
                    Operational Alpha
                  </span>
                </div>
                <p className="text-on-surface text-sm leading-relaxed">
                  Transforming fragmented execution into a strategic asset. We enable capital providers to deploy resources into LatAm with reduced friction and enhanced yield visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Manifesto Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-dim">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:p-24 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-8">
              One single contract.
              <br />
              One quality standard.
              <br />
              Four languages.
            </h2>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-12">
              We eliminate the complexity of multi-vendor management. 710LABS
              unifies your global operation under a single legal and operational
              framework, guaranteeing the same precision in every interaction.
            </p>
            <div className="grid grid-cols-4 gap-4">
              {["EN", "ES", "FR", "PT"].map((lang) => (
                <div
                  key={lang}
                  className="group relative aspect-square bg-surface-container-high flex flex-col items-center justify-center cursor-default hover:bg-primary-container transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-3xl mb-2 text-primary-container group-hover:text-white transition-colors">
                    language
                  </span>
                  <span className="font-label text-[10px] uppercase font-bold tracking-widest group-hover:text-white">
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 border-[20px] border-surface-container-high"></div>
            <div className="absolute inset-[40px] border-[1px] border-primary-container/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                className="w-full h-full object-cover grayscale brightness-75 mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA88wFw6mktI0MyDzYKIqXPeu-EgiJkE5ND8lcjtKtz01dkSu4iJX1TjGIsjOQ23GTjIaVGQO5ffQY_HK9qzntUNTOiBx8YQZ46jTDrGXYUdzHEo6UA28swukGKfO8PUGBlBEQ4dJpiuH9d-JXiCffxqTGpucOhiKhOrlDBuVYqE_re0e506bkwwYv-pHVKvTD3mzj-UBwL8XMFni4Tg4BeD1s3jXS_U5TlY8i0ZVjqplYVy2uAju0U29fBQ2SpMqo-nhLVD054hzEk"
                alt="Visual"
              />
              <div className="absolute bg-surface-dim p-10 border border-primary-container/50 shadow-2xl text-center">
                <span className="block text-4xl md:text-6xl font-black text-primary-container mb-2">
                  0.0%
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em]">
                  Friction Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Bento */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-surface-container-low p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="font-label text-primary-container text-[10px] font-bold uppercase tracking-widest mb-4 block">
                Structural Power
              </span>
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">
                Elite Force Density
              </h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Our selection process rejects 98% of applicants. We only integrate
              high-performance talent that meets the Executive Vanguard
              standard, offering you full transparency into who represents your
              brand.
            </p>
          </div>
          <div className="bg-surface-container-high p-10 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-5xl font-black text-white mb-2">4X</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-container">
              Native Fluency
            </span>
          </div>
          <div className="bg-surface-container-high p-10 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-5xl font-black text-white mb-2">24/7</span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-container">
              Command Center
            </span>
          </div>
          <div className="lg:col-span-2 bg-surface-bright p-10 flex flex-col justify-between">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 text-on-surface">
              Immediate Integration
            </h3>
            <div className="w-full bg-surface-dim h-2 mb-6">
              <div className="bg-primary-container h-full w-[85%]"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface">
              <span>Deployment Alpha</span>
              <span>85% Faster than Market</span>
            </div>
          </div>
          <div className="md:col-span-2 bg-surface-container-low p-10 relative overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd9otYnU0A86sL7QbvmQRfVbO7NUILT4SiGwiQJDv6CitDpbxGSyP_YPWxWvwjjCQV-C0le2P_AXaDE1mo8sZh9EAiNooexd0-DKr3pFuiGifv6DxzIfQcwOGjOtlW0uhEGAqSnXG8tHk5-IpXZYp4s6LT4wXl5BbJstp0LqVq-twBRH4UkEFDyInDpUm9HCqTJLCaDff0bQWsUT4mBhBWHIUQ1Zy2Xkjgu7FBg-JP5kh-FciPR6dOvFGqkPoywqbJinLqrJV8JwQ3"
              alt="Global Operations"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">
                Global Operations Hub
              </h3>
              <p className="text-sm text-on-surface-variant">
                Centralized control, decentralized execution through our Hybrid
                Model.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
