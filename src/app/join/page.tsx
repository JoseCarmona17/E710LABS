export default function Join() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex flex-col justify-center px-12 overflow-hidden bg-surface-dim pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-transparent to-surface-dim"></div>
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkaFxSzgJbIfnbaelvui-pt3vhjM0NZK5dlrryKr-Ffjaafqt_cQ5LCyitHIxejBTkhhmAxJnd3hkHFtGzTcNhEUwGdZu7uNBcJKeU0uhLrjg4yEegn0NU9xzwFVcamk2mmnMZLQVnvnJFPBv5e4h0y8m4a8rSGoc4ELAWnaevkmIhv96sfJn1EpzSo8B4M_enhlPT-yY5f-q6VOtgYQPB3r_6TGMmrYqT_kO9f01khlpn8KrJbkAIQsT5cKHZETOaEk_S4RvmDl5" alt="Hero Background" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <p className="font-label text-primary-container font-bold tracking-[0.2em] uppercase mb-4">The Selection Process</p>
          <h1 className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            JOIN THE <br /><span className="text-primary-container">CORPORATE</span> <br />DELTA FORCE.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-1 bg-primary-container self-stretch"></div>
            <p className="text-xl md:text-2xl font-light text-on-surface-variant max-w-2xl leading-relaxed">
              We don't hire. We select. We are building the most lethal professional unit in the global market. Targeting the top 5% who find comfort in the extreme.
            </p>
          </div>
          <div className="mt-12">
            <button className="bg-primary-container text-on-primary-container px-12 py-5 font-headline font-bold uppercase tracking-widest hover:bg-surface-bright transition-all active:scale-95 duration-100">
              Initiate Application
            </button>
          </div>
        </div>
      </section>

      {/* Manifesto Grid */}
      <section className="py-24 px-12 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          <div className="md:col-span-8 bg-surface-dim p-12 border-l-4 border-primary-container">
            <h2 className="font-headline text-5xl font-extrabold mb-6">We are not for everyone.<br />We are the only environment for the few.</h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
              At 710LABS, mediocrity is the only sin. If you're looking for a standard 9-to-5 career, look elsewhere. We operate on a different clock and a higher frequency of execution.
            </p>
          </div>
          <div className="md:col-span-4 bg-surface-container-highest p-12 flex flex-col justify-end">
            <div className="mb-4">
              <span className="material-symbols-outlined text-4xl text-primary-container">timer</span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-2">06:00 AM</h3>
            <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Daily Tactical Briefing</p>
          </div>
        </div>
      </section>

      {/* Who will I become */}
      <section className="py-32 px-12 bg-surface-dim">
        <div className="mb-20 text-right">
          <h2 className="font-headline text-6xl font-black tracking-tighter uppercase mb-4">Who will I become?</h2>
          <div className="h-1 w-32 bg-primary-container ml-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-highest p-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-container"></div>
            <div className="text-on-surface-variant mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Precision-Engineered</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              You will transition from a generalist to a high-precision operative. Your decision-making will be backed by data, governed by logic, and executed with surgical speed.
            </p>
          </div>
          <div className="bg-surface-container-highest p-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-container"></div>
            <div className="text-on-surface-variant mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Uncapped Growth</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              At 710LABS, there is no ceiling. Your trajectory is limited only by your capacity to deliver. We provide the infrastructure; you provide the momentum.
            </p>
          </div>
          <div className="bg-surface-container-highest p-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-container"></div>
            <div className="text-on-surface-variant mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shield_person</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">The Elite Vanguard</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              You will become part of a collective where every member is as capable as you. High-trust, high-stakes, and completely focused on global dominance.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Form Section */}
      <section className="relative py-32 px-12 bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-headline text-5xl font-black mb-8 uppercase tracking-tighter">Enter the Arena.</h2>
            <p className="text-on-surface-variant text-lg mb-12">
              We process applications with extreme scrutiny. Prepare your track record, your vision, and your willingness to transcend the ordinary. This is an invitation to the highest level of professional engagement.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <span className="font-headline text-4xl font-bold text-primary-container opacity-20">01</span>
                <div>
                  <h4 className="font-bold">Digital Screening</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Algorithmic baseline assessment of professional history and cognitive agility.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-headline text-4xl font-bold text-primary-container opacity-40">02</span>
                <div>
                  <h4 className="font-bold">Tactical Assessment</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Real-time simulation of high-pressure operational scenarios and strategic execution.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-headline text-4xl font-bold text-primary-container opacity-100">03</span>
                <div>
                  <h4 className="font-bold">Final Integration</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Direct board interview to determine cultural alignment and tactical fit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-high p-12">
            <form className="space-y-8">
              <div className="space-y-1">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface py-4 px-0 transition-colors placeholder:text-surface-bright" placeholder="IDENTIFY YOURSELF" type="text" />
              </div>
              <div className="space-y-1">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Current Professional Status</label>
                <input className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface py-4 px-0 transition-colors placeholder:text-surface-bright" placeholder="CURRENT DESIGNATION" type="text" />
              </div>
              <div className="space-y-1">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Your Primary Objective</label>
                <textarea className="w-full bg-surface-container-lowest border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface py-4 px-0 transition-colors placeholder:text-surface-bright" placeholder="WHY THE 5%?" rows={4}></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full bg-primary-container text-on-primary-container py-5 font-headline font-bold uppercase tracking-[0.2em] hover:bg-surface-bright transition-all">
                  SUBMIT CREDENTIALS
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
