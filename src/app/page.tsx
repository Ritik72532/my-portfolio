import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import TechWidget from "./components/TechWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-zinc-800 selection:text-white">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Hero Identity Block */}
        <section id="about" className="py-24 md:py-32 max-w-3xl">
          <div className="animate-fade-in">
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">LOCATION: NOIDA,INDIA</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Engineered for speed. Built for scalability.
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl">
              I am a Full-Stack Software Engineer building cleanly structured applications. Specialized in optimization architectures, high performance Core Web Vitals, and bulletproof discovery frameworks.
            </p>
          </div>
           <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
            <TechWidget />
          </div>
        </section>

        {/* Feature Grid Component */}
        <ProjectGrid />

        {/* Minimalist Contact Prompt */}
        <section id="contact" className="py-20 border-t border-zinc-900 text-center md:text-left">
          <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">// COMMUNICATIONS</span>
          <h2 className="mt-2 text-2xl font-bold text-white">Let's build something substantial.</h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-md">Open for core architecture roles, technical consulting, and systemic development pipelines.</p>
          <div className="mt-6">
            <a 
              href="mailto:ritikaryan17@gmail.com" 
              className="inline-flex h-11 items-center justify-center border border-zinc-800 bg-zinc-900 px-6 font-mono text-xs uppercase tracking-widest text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all min-h-12"
            >
              Get In Touch
            </a>
          </div>
        </section>

      </main>

      {/* System Footer Stamp */}
      <footer className="mx-auto max-w-6xl border-t border-zinc-900 px-4 py-8 sm:px-6 lg:px-8 text-center md:text-between flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600">
        <div>SYSTEM STATUS: ACTIVE</div>
        <div>© {new Date().getFullYear()} Ritik Aryan. ALL RIGHT RESERVED.</div>
      </footer>
    </div>
  );
}
