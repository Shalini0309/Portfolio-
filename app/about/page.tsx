"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code2, Compass, Shield, Award, Terminal } from "lucide-react"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const experiences = [
    {
      role: "Frontend Web Developer Intern",
      company: "MHSA Technologies",
      date: "Jan 2025 - Jun 2025",
      desc: "Refactored heavy content directories and components, reducing build overhead by 25%. Engineered Socket.io event interfaces and optimized core web vitals. Translated high-fidelity Figma canvas assets into React layouts with 100% pixel precision.",
      skills: ["React.js", "Next.js", "REST APIs", "Socket.io", "Core Web Vitals"]
    },
    {
      role: "UI/UX Design Intern",
      company: "D9 Design Studio Pvt Ltd",
      date: "Aug 2023 - Oct 2023",
      desc: "Conducted usability testing and card sorting for an EV dispatch web app. Developed interactive personas and detailed journey maps, sparking a verified 30% increase in client engagement metrics. Streamlined Figma-to-developer handoff design guidelines.",
      skills: ["Figma Wireframes", "Adobe XD", "User Testing", "Usability Specs"]
    }
  ]

  const stats = [
    { label: "USER_ENGAGEMENT", value: "+41%" },
    { label: "DEV_REDUCTION", value: "-25%" },
    { label: "DESIGN_ACCURACY", value: "100%" },
    { label: "UX_RETENTION", value: "98%" }
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0F0E0D] text-[#E6E2DE] relative overflow-hidden figma-grid">
      {/* Soft Background Flares */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D46F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#F2CC8F]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <section className="text-center space-y-4 max-w-xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            About <span className="bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] bg-clip-text text-transparent">Shalini</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            IT Graduate, Full-Stack Software Engineer, and Usability-focused UI/UX Designer.
          </p>
        </section>

        {/* Narrative & Visual Silhouette Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Polaroid Frame & Bio (Fills 7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6 relative overflow-hidden">
              
              {/* Sticky note */}
              <div className="absolute -top-6 right-8 sticky-note p-3 w-40 rotate-[4deg] text-xs leading-tight z-30 select-none">
                📌 Always keeping component files modular.
              </div>

              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center gap-3 text-[#D46F50] font-bold uppercase tracking-widest text-sm">
                  <Compass size={18} />
                  <span>My Design & Coding Philosophy</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">
                  Bridging the gap between scalable data structures and high-fidelity interfaces.
                </h2>
                
                <p className="text-[#B0A9A2] text-sm leading-relaxed">
                  I believe that modern software shouldn't just run efficiently—it must feel delightful to interact with. 
                  My background in **Information Technology** gives me a rock-solid engineering foundation, while my **UI/UX internships** have trained my eyes to design with extreme pixel precision.
                </p>
                <p className="text-[#B0A9A2] text-sm leading-relaxed">
                  Whether I am coding real-time location mapping tools using WebSockets and Node.js or assembling modular, reusable design tokens in Figma, I bring a structured approach that reduces developer handoff friction and ensures production code aligns 100% with high-fidelity mockups.
                </p>
              </div>

              {/* Stats Metrics grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80">
                {stats.map(stat => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{stat.label.replace("_", " ")}</div>
                    <div className="text-2xl font-black text-[#F2CC8F]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* B.Tech IT Education Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D46F50]/10 border border-[#D46F50]/20 text-[#D46F50] rounded-xl">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-tight text-md">Bachelor of Technology in IT</h3>
                  <p className="text-slate-300 text-sm">ABES Engineering College</p>
                  <p className="text-slate-500 text-xs mt-1">Ghaziabad, India</p>
                </div>
              </div>
              <div className="text-[#F2CC8F] font-bold text-xs bg-[#F2CC8F]/10 px-3.5 py-1.5 border border-[#F2CC8F]/20 rounded-full">
                Aug 2021 - May 2025
              </div>
            </div>
          </div>

          {/* Right Column: Polaroid Frame & Technical Specs Terminal (Fills 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Polaroid Graphic Self Portrait Frame (Extremely Humanizing!) */}
            <div className="bg-[#EAE6DF] p-4 pb-12 rounded-lg shadow-xl rotate-[-2deg] border border-neutral-300 max-w-sm mx-auto group hover:rotate-[1deg] transition-all duration-300">
              {/* Styled portrait slot showing Shalini's actual photo */}
              <div className="h-[280px] w-full rounded relative overflow-hidden flex items-center justify-center border border-neutral-400">
                <img 
                  src="/shalini.jpeg" 
                  alt="Shalini Mishra" 
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="mt-4 text-center font-handwritten text-[#382405] text-lg select-none">
                Shalini Mishra — 2026 Studio Portrait
              </div>
            </div>

            {/* Technical Specs console terminal */}
            <div className="bg-[#121110] border border-[#E07A5F]/20 rounded-2xl shadow-2xl overflow-hidden text-xs font-mono text-slate-300">
              <div className="bg-[#1C1A19] px-4 py-2 flex items-center justify-between border-b border-neutral-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-[#FF5F56] rounded-full" />
                  <div className="w-2.5 h-2.5 bg-[#FFBD2E] rounded-full" />
                  <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full" />
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">cat developer_specs.log</span>
                <Terminal size={12} className="text-slate-500" />
              </div>
              <div className="p-5 space-y-2 bg-[#0F0E0D]/95">
                <div><span className="text-slate-500">{`>>>`}</span> <span className="text-[#D46F50]">IT_FOUNDATION:</span> ABES Engineering College</div>
                <div><span className="text-slate-500">{`>>>`}</span> <span className="text-[#F2CC8F]">INTERNSHIP_COUNT:</span> 2 (Frontend & Design)</div>
                <div><span className="text-slate-500">{`>>>`}</span> <span className="text-[#81B29A]">CORE_STACK:</span> React.js, Next.js, Node.js, MongoDB</div>
                <div><span className="text-slate-500">{`>>>`}</span> <span className="text-cyan-400">DESIGN_PROMPT:</span> Figma layout variables mapped</div>
                <div className="border-t border-slate-800/80 pt-2 mt-2 text-[10px] text-slate-500 leading-relaxed font-handwritten">
                  "I love analyzing geospatial proximity loops inside delivery code, but I spent B.Tech years learning that code must remain highly readable."
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Unified Experience Timeline */}
        <section className="space-y-8 pt-8">
          <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
            <Briefcase size={22} className="text-[#D46F50]" />
            <span>Internship History</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col md:flex-row justify-between gap-6 hover:border-[#D46F50]/20 transition-all duration-300"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">{exp.role}</h3>
                    <span className="text-[10px] font-semibold text-[#F2CC8F] bg-[#F2CC8F]/10 border border-[#F2CC8F]/20 px-2 py-0.5 rounded-full">
                      {exp.date}
                    </span>
                  </div>
                  <div className="text-[#81B29A] text-sm font-semibold tracking-wider uppercase">{exp.company}</div>
                  <p className="text-[#B0A9A2] text-sm leading-relaxed">{exp.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 md:w-64 md:justify-end md:self-center h-fit">
                  {exp.skills.map(s => (
                    <span key={s} className="text-[9px] bg-slate-900 border border-slate-800 text-slate-400 font-semibold px-2 py-1 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
