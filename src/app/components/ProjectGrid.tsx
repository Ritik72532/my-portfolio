interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projectsList: Project[] = [
  {
    title: "SmartTag",
    description:
      "Asset tracking and management platform with real-time monitoring, analytics dashboard, authentication, and inventory insights for efficient resource management.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://smart-tag-qr.vercel.app/",
  },
  {
    title: "TravelNest",
    description:
      "Scalable travel booking backend system featuring JWT authentication, role-based access control, hotel search, booking management, Stripe payments, and RESTful APIs.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    link: "https://github.com/Ritik72532/TravelNest",
  },
  {
    title: "PingUp",
    description:
      "Real-time chat application supporting instant messaging, online user presence, secure authentication, and bidirectional communication using WebSockets.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/Ritik72532/PingUp",
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 border-t border-slate-950">
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">// FEATURED REPOSITORIES</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Selected Engineering Work</h2>
      </div>

      {/* Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project, index) => (
          <div 
            key={index}
            className="group flex flex-col justify-between border border-zinc-900 bg-zinc-950/40 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/30"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors font-mono text-xs">↗</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag, tIndex) => (
                <span 
                  key={tIndex}
                  className="inline-flex items-center border border-zinc-800 bg-zinc-900/50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
