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
            About <span className="text-primary-container block not-italic">Us</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-3xl leading-relaxed font-light mb-10">
            We are driven by excellence, discipline, and uncompromising standards. Meet the architects behind 710LABS, the operators who set the benchmark for global execution.
          </p>
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
