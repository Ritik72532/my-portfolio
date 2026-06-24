"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="font-mono text-sm tracking-tight text-white font-semibold">
            Ritik<span className="text-zinc-500">Aryan</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">// about</a>
            <a href="#projects" className="hover:text-white transition-colors">// projects</a>
            <a href="#contact" className="hover:text-white transition-colors">// contact</a>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              className="inline-flex h-9 items-center justify-center border border-zinc-800 bg-zinc-900 px-4 text-xs font-mono uppercase tracking-widest text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all min-h-12 min-w-12"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 items-center justify-center text-zinc-400 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl font-mono">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="border-b border-slate-900 bg-slate-950 px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 text-sm font-mono tracking-wide text-zinc-400">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white py-2">// about</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white py-2">// projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white py-2">// contact</a>
            <a 
              href="/resume.pdf" 
              className="inline-flex h-10 items-center justify-center border border-zinc-800 bg-zinc-900 text-xs font-mono uppercase tracking-widest text-zinc-200"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
