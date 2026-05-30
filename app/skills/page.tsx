"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Palette, Database, Cloud, ShieldCheck, Terminal, HelpCircle } from "lucide-react"

const skillCategories = [
  {
    id: "design",
    name: "Design & UX",
    icon: <Palette size={20} className="text-[#D46F50]" />,
    skills: [
      { name: "Figma Prototyping", level: 95 },
      { name: "Adobe XD Mockups", level: 85 },
      { name: "UI/UX Usability Testing", level: 90 },
      { name: "Design System Guidelines", level: 92 },
      { name: "Wireframing & Journeys", level: 95 }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Code2 size={20} className="text-[#F2CC8F]" />,
    skills: [
      { name: "React.js Framework", level: 96 },
      { name: "Next.js App Router", level: 90 },
      { name: "TypeScript typings", level: 88 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS & Grid", level: 94 },
      { name: "HTML5 & CSS3 Semantics", level: 98 }
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    icon: <Database size={20} className="text-[#81B29A]" />,
    skills: [
      { name: "Node.js Server Bindings", level: 88 },
      { name: "Express.js Controllers", level: 90 },
      { name: "MongoDB Proximity queries", level: 87 },
      { name: "SQL Databases", level: 82 },
      { name: "RESTful API Interfaces", level: 94 },
      { name: "WebSockets (Socket.io)", level: 85 }
    ]
  },
  {
    id: "quality",
    name: "Quality Assurance",
    icon: <ShieldCheck size={20} className="text-emerald-400" />,
    skills: [
      { name: "Testing & Debugging", level: 90 },
      { name: "Functional Verification", level: 88 },
      { name: "Code Review Standards", level: 85 },
      { name: "Performance Optimization", level: 86 }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Cloud size={20} className="text-cyan-400" />,
    skills: [
      { name: "Git & Collaborative Flow", level: 92 },
      { name: "Vercel Deployments", level: 90 },
      { name: "Render Cloud Hosting", level: 85 },
      { name: "Agile Standups & Scrum", level: 92 }
    ]
  }
]

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("design")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0F0E0D] text-[#E6E2DE] relative overflow-hidden figma-grid">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D46F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-[#F2CC8F]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Skill <span className="bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] bg-clip-text text-transparent">Matrix</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Click on the JSON terminal categories on the right to inspect my structural competencies in the visual grid on the left.
          </p>
        </header>

        {/* Combined Layout: Visual Skill Level & JSON Configuration inspector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Sandbox Progress Meters (Fills 7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  borderColor: selectedCategoryId === category.id ? "rgba(212, 111, 80, 0.4)" : "rgba(224, 122, 95, 0.1)",
                  backgroundColor: selectedCategoryId === category.id ? "rgba(22, 20, 18, 0.85)" : "rgba(22, 20, 18, 0.65)"
                }}
                className="glass-card p-6 rounded-2xl border transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                      {category.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {category.name}
                    </h3>
                  </div>
                  {selectedCategoryId === category.id && (
                    <span className="text-[10px] bg-[#D46F50]/10 border border-[#D46F50]/20 text-[#F2CC8F] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-handwritten">
                      Inspecting
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900/50">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className="h-full progress-bar-fill rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Dynamic Terminal JSON Code Inspector (Fills 5 columns) */}
          <div className="lg:col-span-5 bg-[#121110] border border-[#E07A5F]/20 rounded-2xl shadow-2xl overflow-hidden text-xs font-mono text-slate-300 sticky top-20">
            {/* Mock Editor Title */}
            <div className="bg-[#1C1A19] px-4 py-2 flex items-center justify-between border-b border-neutral-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1">
                <Terminal size={10} />
                <span>skills.json --verbose</span>
              </span>
              <HelpCircle size={12} className="text-slate-500" />
            </div>

            {/* Interactive JSON content */}
            <div className="p-6 overflow-x-auto space-y-1 bg-[#0F0E0D]/95 text-xs select-none">
              <div className="text-slate-500">{`{`}</div>
              {skillCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`pl-6 py-1 cursor-pointer transition-all rounded ${
                    selectedCategoryId === category.id
                      ? "bg-[#D46F50]/10 border-l-2 border-[#D46F50] text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/30"
                  }`}
                >
                  <span className="text-[#D46F50] font-bold">"{category.id}"</span>: <span className="text-slate-500">[</span>
                  <div className="pl-6 flex flex-wrap gap-x-2">
                    {category.skills.slice(0, 3).map((skill, si, arr) => (
                      <span key={skill.name} className="text-[#F2CC8F]">
                        "{skill.name.split(" ")[0]}"
                        {si < arr.length - 1 && <span className="text-slate-500">,</span>}
                      </span>
                    ))}
                    <span className="text-slate-500">...</span>
                  </div>
                  <span className="text-slate-500">]</span>
                </div>
              ))}
              <div className="text-slate-500">{`}`}</div>
            </div>

            {/* adhesive yellow sticky note inside the terminal */}
            <div className="absolute bottom-4 right-4 sticky-note p-3 w-44 rotate-[4deg] text-[10px] leading-tight select-none">
              💡 Interactive CLI: click on keys to toggle inspection!
            </div>
          </div>
        </div>

        {/* Cozy Sandbox stat widgets */}
        <footer className="glass-card p-6 md:p-8 rounded-2xl max-w-4xl mx-auto border border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">DESIGN_STANDARD</div>
            <div className="text-white font-black text-md">Figma Prototyping</div>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">FRONTEND_CORE</div>
            <div className="text-white font-black text-md">React & Next.js App Router</div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">BACKEND_ROUTER</div>
            <div className="text-white font-black text-md">Node.js Express & MongoDB</div>
          </div>
        </footer>
      </div>
    </main>
  )
}
