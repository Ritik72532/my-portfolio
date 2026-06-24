interface SkillGroup {
  category: string;
  skills: string[];
}

const techSkills: SkillGroup[] = [
  {
    category: "Languages & Core",
    skills: ["Java", "C++", "Python", "SQL", "Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS"],
  },
  {
    category: "Full-Stack Development",
    skills: ["JavaScript", "React.js", "Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "RBAC"],
  },
  {
    category: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Stripe API", "Socket.io", "Postman"],
  },
  {
    category: "Data Science & Basics",
    skills: ["Machine Learning fundamentals", "Data Analysis basics", "Data Cleaning"],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 border-t border-zinc-900">
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">// TECHNICAL CAPABILITIES</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Engineered Stack & Fundamentals</h2>
      </div>

      {/* Grid structure: responsive layout for mobile, tab, desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techSkills.map((group, idx) => (
          <div 
            key={idx} 
            className="border border-zinc-900 bg-zinc-950/40 p-6 hover:border-zinc-800 transition-colors"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-2 mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="inline-flex items-center border border-zinc-800 bg-zinc-900/30 px-3 py-1 font-mono text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
