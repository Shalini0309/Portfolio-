"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    position: "Frontend Web Developer Intern",
    company: "MHSA Technologies",
    period: "JAN 2025 - JUN 2025",
    description:
      "Architected modular React.js structures and modular libraries, successfully trimming setup cycle times by 25%. Structured seamless REST API hooks for real-time WebSocket messaging pipelines. Fine-tuned core web vitals and browser compatibility vectors. Collaborated inside an Agile team to translate Figma prototypes into Next.js schemas with 100% pixel precision.",
    link: "#",
    skills: ["React.js", "Next.js", "REST APIs", "Performance Audits", "Agile Flow", "Socket.io"],
    note: "Pristine developer components refactoring!"
  },
  {
    position: "UI/UX Design Intern",
    company: "D9 Design Studio Pvt Ltd",
    period: "AUG 2023 - OCT 2023",
    description:
      "Spearheaded user research and usability verification workflows for an EV application to map and resolve friction. Crafted comprehensive customer personas and journey maps, sparking a verified 30% increase in overall client engagement. Drafted strict UI design libraries and guidelines in Figma, optimizing engineer implementation speed.",
    link: "#",
    skills: ["Figma Wireframes", "Adobe XD", "User Research", "Design Systems", "Usability Audits"],
    note: "EV mockups designed on paper grids first!"
  }
]

export default function ExperiencePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0F0E0D] text-[#E6E2DE] relative overflow-hidden figma-grid">
      {/* Background flares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D46F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F2CC8F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#D46F50] font-mono text-xs font-bold">
            <span>$ ./experience --verbose</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Career <span className="bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] bg-clip-text text-transparent">Timeline</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-serif italic">
            "A record of my frontend engineering and creative design internships."
          </p>
        </header>

        {/* Cohesive Sandstone Timeline Cards */}
        <div className="space-y-10 relative">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6 flex flex-col justify-between hover:border-[#D46F50]/20 transition-all duration-300 relative"
            >
              {/* Pinned handwritten note inside the experience list (Cozy & humanizing!) */}
              <div className={`absolute -top-4 right-10 sticky-note p-2 w-44 text-[10px] leading-tight select-none rotate-[${idx === 0 ? '-3' : '4'}deg]`}>
                💡 {exp.note}
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800/50 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">
                      {exp.position}
                    </h2>
                    <div className="text-[#81B29A] text-sm font-semibold uppercase tracking-wider mt-1">{exp.company}</div>
                  </div>
                  <span className="text-[10px] font-bold text-[#F2CC8F] bg-[#F2CC8F]/10 border border-[#F2CC8F]/20 px-3.5 py-1.5 rounded-full uppercase whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[#B0A9A2] text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {exp.skills.map((skill) => (
                  <span key={skill} className="text-[10px] bg-slate-900 border border-slate-800 text-[#F2CC8F] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {skill}
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
