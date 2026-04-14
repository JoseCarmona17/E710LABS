export default function Multilingual() {
  return (
    <>
      <section className="relative h-[800px] flex items-center px-12 md:px-24 overflow-hidden bg-surface-dim pt-20">
        <div className="absolute inset-0 opacity-30">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIEz3XdyoDWO5Og_H6lAIw9GlLKutq3fVZAtlVdSkecPs0YvCSsPzLFWBaQkuMv3pF9OHp06PUiL1DGfRL8-rSsRyoNvm4q_LBx957Zk1rSr0J52SMVmBrBasFXDoHE0RyR87HPGTr_kTUMVpCnu5Vsz9i804Na-LoKFKzp0xhR2pcOjhjl_E-N0ThoLwwtRHg0Ee9rrdvQjFn2oWtmnUEt4s1R_xe-jFwFTXFMQz3789adWfCsh7Jcst-AakBdnjUl28eiJT5ZGK6" alt="Network" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl">
          <span className="font-label text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Executive Vanguard Global Operations</span>
          <h1 className="font-headline text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            Four Languages.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">No Borders.</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-4">
            Precision-engineered BPO solutions for the global financial elite. We bridge markets through cultural fluency and technical excellence in English, Spanish, French, and Portuguese.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-primary/60 uppercase tracking-widest mb-12">
            <span>English</span> <span className="text-white/20">/</span>
            <span>Spanish</span> <span className="text-white/20">/</span>
            <span>French</span> <span className="text-white/20">/</span>
            <span>Portuguese</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary-container text-on-primary-container px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">Deploy Infrastructure</button>
            <button className="border border-white/20 text-white px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all">View Operations</button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-surface-container-low border-y border-white/5">
        <div className="p-16 border-r border-white/5 hover:bg-surface-container-high transition-colors group">
          <div className="mb-10">
            <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
          </div>
          <h3 className="font-headline text-2xl font-bold text-white uppercase mb-4 tracking-tight">Customer Care</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">High-touch resolution protocols for premium clients. Multilingual support that feels native, ensuring absolute satisfaction across every touchpoint.</p>
          <div className="border-l-2 border-primary-container p-6 bg-surface-container-highest/50">
            <div className="text-[10px] uppercase font-bold text-white/40 mb-1">Average Response</div>
            <div className="text-3xl font-headline font-black text-on-surface">&lt;45 SEC</div>
          </div>
        </div>
        <div className="p-16 border-r border-white/5 hover:bg-surface-container-high transition-colors group">
          <div className="mb-10">
            <span className="material-symbols-outlined text-4xl text-primary">trending_up</span>
          </div>
          <h3 className="font-headline text-2xl font-bold text-white uppercase mb-4 tracking-tight">Sales</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">Aggressive market expansion through localized persuasion. Conversion-focused strategies designed for rapid global growth in competitive sectors.</p>
          <div className="border-l-2 border-primary-container p-6 bg-surface-container-highest/50">
            <div className="text-[10px] uppercase font-bold text-white/40 mb-1">Conversion Uplift</div>
            <div className="text-3xl font-headline font-black text-on-surface">+32.4%</div>
          </div>
        </div>
        <div className="p-16 hover:bg-surface-container-high transition-colors group">
          <div className="mb-10">
            <span className="material-symbols-outlined text-4xl text-primary">account_tree</span>
          </div>
          <h3 className="font-headline text-2xl font-bold text-white uppercase mb-4 tracking-tight">Backoffice</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">Surgical data precision and complex administrative workflows. We maintain the absolute integrity of your global operational framework.</p>
          <div className="border-l-2 border-primary-container p-6 bg-surface-container-highest/50">
            <div className="text-[10px] uppercase font-bold text-white/40 mb-1">Accuracy Rating</div>
            <div className="text-3xl font-headline font-black text-on-surface">99.99%</div>
          </div>
        </div>
      </section>

      {/* Multilingual Pillars */}
      <section className="p-12 md:p-24 bg-surface-dim">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span className="font-label text-[10px] tracking-[0.4em] text-primary font-bold uppercase mb-4 block">Operational Pillars</span>
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">Native Mastery.<br />Global Standards.</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm uppercase tracking-widest font-medium border-l border-primary pl-6 py-2">Four Languages. One Unified Global Standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container-low shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/5">
            <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBMu0LkGifU0oJUpo-o5tzvz3cVm0cNUBKwQY8kuBNZimaEq7cWh_ixetrsmq5YYrc-IG3ayWUTJKeqxp93ZeYDt0odu4nPLoY8prAI1tpnECHkFARXDvJuvCq5lI3Fo8Ls_TQ8n8uwY9V6OAAOCu08P36x3wHPOLPzCq_Ar6nSQtPBESRGUVvHo3V_FbwxgGveiDAukeSQ5VHE5aMuuz85SwVj8x21x3Mcg3EjkqB1xULFmt0YJMvpLf_pZnCxRTrfQw7vU6mgPp" alt="English" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <span className="text-primary font-black text-5xl mb-4">01</span>
              <h4 className="font-headline text-4xl font-bold text-white uppercase mb-4">English</h4>
              <p className="text-on-surface-variant max-w-sm mb-8 uppercase text-[10px] tracking-[0.3em] font-bold">Universal Business Protocol</p>
              <div className="flex gap-3">
                <span className="px-4 py-1.5 border border-white/10 text-[10px] font-bold uppercase tracking-widest bg-white/5">US Market</span>
                <span className="px-4 py-1.5 border border-white/10 text-[10px] font-bold uppercase tracking-widest bg-white/5">UK Standards</span>
                <span className="px-4 py-1.5 border border-white/10 text-[10px] font-bold uppercase tracking-widest bg-white/5">AU Coverage</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container-low border border-white/5">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 p-10">
              <span className="text-primary font-black text-3xl mb-4 block">02</span>
              <h4 className="font-headline text-2xl font-bold text-white uppercase mb-2">Spanish</h4>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold mb-8">LATAM & Spain Strategic Hubs</p>
              <ul className="text-[10px] font-bold uppercase text-white/50 space-y-3">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> Neutral Accent Protocols</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> Regional Customization</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container-high border border-white/5">
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
            <div className="relative z-10 p-10">
              <span className="text-primary font-black text-3xl mb-4 block">03</span>
              <h4 className="font-headline text-2xl font-bold text-white uppercase mb-2">French</h4>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold mb-8">Quebec & European Markets</p>
              <ul className="text-[10px] font-bold uppercase text-white/50 space-y-3">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> Canadian Compliance</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary"></span> Cultural Nuance Integration</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-surface-container-low border border-white/5">
            <img className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8F7YmxVTfDq1MJ0KX3UOJBt7o3prr2MrFN7s5jfdey4UaB1mi04rSGDsG9INmCDAevhL4EyjGIN5k6pii4ZwHz-rZFmWdMUslcXJCUVOMU5HQ_fPsequOxAOlaYjvopMsTM4bR7qxhRPjxrrwirrlnEt2I2SKxA6eyieG4JFE1FtgrJfEzPOaNcjR5Ro5El8IwzP1o9oijKBQMzatgMadKbd8ciNCPoKKmwttDG2fUr6yrdhP6ooJq6rhCf9Gb0jxJI6LlQjNbDKd" alt="Brazil" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/60 to-transparent"></div>
            <div className="relative z-10 p-12 flex flex-col justify-center h-full">
              <span className="text-primary font-black text-3xl mb-4 block">04</span>
              <h4 className="font-headline text-4xl font-bold text-white uppercase mb-4">Portuguese</h4>
              <p className="text-on-surface-variant max-w-md text-sm mb-8 font-light">Dominating the Brazilian landscape with native proficiency and rapid-scale capabilities for financial tech giants.</p>
              <div className="flex items-center gap-8">
                <div className="border-l-2 border-primary-container pl-6">
                  <span className="block text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Market Reach</span>
                  <span className="text-3xl font-black text-white">214M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-16 md:p-24 bg-surface-container-lowest border-r border-white/5">
          <span className="font-label text-[10px] tracking-[0.4em] text-primary font-bold uppercase mb-6 block">Target Sectors</span>
          <h2 className="font-headline text-5xl font-black text-white uppercase tracking-tight mb-16">Industry Specialization</h2>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-20 h-20 flex-shrink-0 bg-primary-container flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <span className="material-symbols-outlined text-4xl text-white">account_balance</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-bold text-white uppercase mb-4 tracking-tight">Fintech Operations</h4>
                <p className="text-on-surface-variant text-base leading-relaxed font-light mb-6">Securing global transactions and managing multi-currency compliance across four major economic zones. We provide PCI-DSS certified multilingual support for high-volume financial institutions.</p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary-container transition">AML/KYC Verified</span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary-container transition">Regulatory Fluency</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-20 h-20 flex-shrink-0 bg-primary-container flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <span className="material-symbols-outlined text-4xl text-white">shopping_cart</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-bold text-white uppercase mb-4 tracking-tight">Global Ecommerce</h4>
                <p className="text-on-surface-variant text-base leading-relaxed font-light mb-6">Scaling seasonal peaks with elastic multilingual teams. From complex order orchestration to logistics management and returns in native dialect, we optimize the entire customer lifecycle.</p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary-container transition">Conversion Optimized</span>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary-container transition">Omnichannel Mastery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-surface-dim flex items-center justify-center overflow-hidden min-h-[600px]">
          <div className="absolute inset-0 opacity-15">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzznzYXjxvjppBzLt7yevpu7i1m9v4JAMSX85yFukHg5iDDuWu1BDoXP2etcJWQdsD94wm2Fbr_N6lII6zXkUg6jrJQmdvdPhCkKwdBkQY3Wc9mpV2uYuzFI5V5RzUXX28_LbB15hqp02h0DswAlo4VdrfMXhC5reETe2i2nqKsGMCBSZyxzbRl4dDJcCAu4rKupe6jC5pdKADhaY7kvF_mHhuPKtQk3utmD2cN9wJSvI1zzM4qv9oZ0S8lRPheW6uWn-WrzNTZo8J" alt="Map" />
          </div>
          <div className="relative z-10 text-center p-16 bg-[#111]/80 backdrop-blur-xl border border-white/10 max-w-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <h3 className="font-headline text-3xl font-black text-white uppercase mb-10 tracking-tighter">Operational Presence</h3>
            <div className="space-y-6 text-left mb-12">
              <div className="flex justify-between items-center border-b border-white/5 pb-3 hover:border-primary-container transition-colors">
                <span className="font-label text-xs uppercase tracking-widest text-white/50">North America</span>
                <span className="font-black text-xs text-primary uppercase tracking-widest">Active Tier 1</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3 hover:border-primary-container transition-colors">
                <span className="font-label text-xs uppercase tracking-widest text-white/50">Latin America</span>
                <span className="font-black text-xs text-primary uppercase tracking-widest">Active Tier 1</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3 hover:border-primary-container transition-colors">
                <span className="font-label text-xs uppercase tracking-widest text-white/50">Western Europe</span>
                <span className="font-black text-xs text-primary uppercase tracking-widest">Active Tier 1</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-3 hover:border-primary-container transition-colors">
                <span className="font-label text-xs uppercase tracking-widest text-white/50">Brazil</span>
                <span className="font-black text-xs text-primary uppercase tracking-widest">Active Tier 1</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold mb-2">Total Network Coverage</p>
              <p className="text-5xl font-headline font-black text-white">4 LANGUAGES</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-12 md:px-24 bg-primary-container text-on-primary-container relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-20%] h-full w-1/2 opacity-10 pointer-events-none">
          <span className="text-[40rem] font-black leading-none select-none tracking-tighter">710</span>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="font-headline text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10">Scale Without<br />Translation Lag.</h2>
          <p className="text-xl md:text-2xl font-medium mb-16 max-w-2xl leading-relaxed opacity-90">Integrate our multilingual command center into your financial operations in as little as 14 days. Precision, culture, and performance, unified for the elite.</p>
          <button className="bg-on-primary-container text-primary-container px-14 py-6 font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all shadow-2xl">Request Technical Briefing</button>
        </div>
      </section>
    </>
  );
}
