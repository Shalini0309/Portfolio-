"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Heart, Sparkles } from "lucide-react"

const projects = [
  {
    name: "SwasthRoute",
    description:
      "My B.Tech Information Technology capstone platform. A full-stack multi-role (User/Rider/Pharmacy/Admin) medicine delivery platform built to tackle coordinate delays. Features real-time rider vehicle mapping powered by Mapbox API and Socket.io, and implements a custom automated proximity assignment algorithm to optimize rider dispatch speeds.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Mapbox API", "RBAC", "JWT"],
    github: "https://github.com/Shalini0309",
    demo: "https://swasth-route.vercel.app/",
    note: "Custom Mapbox Proximity Assign script calculates dispatch routes in under 85ms!"
  },
  {
    name: "OTT Platform Admin Panel",
    description:
      "Engineered an administrator dashboard for an OTT media streaming platform. Refactored heavy manager operations into lightweight reusable hooks. Focused on responsive UI structures, accelerated data tables, and RESTful query binding, achieving 30% component code reusability.",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "UI/UX Design"],
    github: "https://github.com/Shalini0309",
    demo: "#",
    note: "Established clean UX guidelines for content manager grids."
  },
  {
    name: "Groot - Plant Health Assistant",
    description:
      "A smart, responsive web utility built to perform rapid plant health assessments and suggest plant disease diagnosis guidelines. Pinned clean CSS modules, fluid grid alignments, usability prototype grids, and collaborative version control systems via Git.",
    techStack: ["JavaScript", "HTML5", "CSS3", "UI/UX Principles", "Git"],
    github: "https://github.com/Shalini0309",
    demo: "#",
    note: "Paper-prototyped mobile checklists prior to React compilation."
  }
]

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0F0E0D] text-[#E6E2DE] relative overflow-hidden figma-grid">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D46F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F2CC8F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#D46F50] font-mono text-xs font-bold">
            <span>$ ls ./projects --all</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Project <span className="bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] bg-clip-text text-transparent">Blueprints</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-serif italic">
            "A catalog of full-stack medicine delivery, admin panel, and plant assistants."
          </p>
        </header>

        {/* Dynamic Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between h-full group relative"
            >
              {/* Adhesive handwritten note pinned on the project card */}
              <div className="absolute -top-5 right-6 sticky-note p-2 w-44 rotate-[4deg] text-[10px] leading-tight select-none">
                💡 {project.note}
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[#D46F50]/10 border border-[#D46F50]/20 text-[#F2CC8F] rounded-xl group-hover:bg-[#D46F50]/20 transition-colors">
                    <Code2 size={20} />
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-[#F2CC8F] transition-colors">
                  {project.name}
                </h2>
                
                <p className="text-[#B0A9A2] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-800/80">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] bg-slate-900 border border-slate-800 text-[#F2CC8F] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
