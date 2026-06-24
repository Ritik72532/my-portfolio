"use client";

import { useState } from "react";

type Section = "runtime" | "frontend" | "backend";

export default function TechWidget() {
  const [activeTab, setActiveTab] = useState<Section>("runtime");

  const data = {
    runtime: {
      cmd: "node --version && npm --version",
      output: ["v22.12.0 (Active LTS)", "npm v11.17.0", "Engine: V8 v12.4"],
    },
    frontend: {
      cmd: "npm list --depth=0",
      output: ["├── next@15.x.x", "├── react@19.x.x (React Compiler Active)", "└── tailwindcss@4.x.x"],
    },
    backend: {
      cmd: "cat system/architecture.json",
      output: [
        `{ "db": "PostgreSQL", "cache": "Redis", "queue": "RabbitMQ" }`,
        "Status: Systems nominal / optimized",
      ],
    },
  };

  return (
    <div className="w-full max-w-xl border border-zinc-900 bg-zinc-950/60 font-mono text-xs text-zinc-400 backdrop-blur-sm">
      {/* Top Header Window Bar */}
      <div className="flex items-center justify-between border-b border-zinc-900 px-4 py-3 bg-zinc-950">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-zinc-800" />
          <div className="h-2 w-2 rounded-full bg-zinc-800" />
          <div className="h-2 w-2 rounded-full bg-zinc-800" />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-zinc-600">diagnostics.sh</div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex border-b border-zinc-900 bg-zinc-900/10">
        {(["runtime", "frontend", "backend"] as Section[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-r border-zinc-900 uppercase tracking-wider text-[10px] transition-colors min-h-10 ${
              activeTab === tab 
                ? "bg-zinc-900/40 text-white font-medium border-b border-b-transparent" 
                : "hover:bg-zinc-900/20 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Terminal View Area */}
      <div className="p-4 space-y-2 min-h-30 bg-zinc-950/40">
        <div className="flex items-center space-x-2 text-zinc-500">
          <span>$</span>
          <span className="text-zinc-300">{data[activeTab].cmd}</span>
        </div>
        <div className="space-y-1 font-sans text-zinc-400">
          {data[activeTab].output.map((line, idx) => (
            <p key={idx} className="font-mono text-zinc-400 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
