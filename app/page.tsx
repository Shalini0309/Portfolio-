"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Layout, Code2, ArrowRight, MousePointer2, Coffee, Music, Code } from "lucide-react"
import Link from "next/link"

const techStack = ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "Figma", "REST APIs", "Socket.io"]

const featuredProjects = [
  {
    name: "SwasthRoute",
    description:
      "My B.Tech IT capstone. A full-stack medicine delivery platform connecting users, pharmacies, and riders. Implemented live vehicle tracking using Socket.io and Mapbox API, and designed an automated dispatch algorithm based on geospatial proximity.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Mapbox API"],
    github: "https://github.com/Shalini0309/swasth-route",
    demo: "https://swasth-route.vercel.app/",
    note: "Socket.io proximity loops active! 🗺️"
  },
  {
    name: "OTT Platform Admin Panel",
    description:
      "Engineered an administrator dashboard to optimize media content pipelines. Focused on responsive UI navigation, lightweight component patterns, and RESTful API structures, reducing development cycles by 30%.",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    github: "https://github.com/Shalini1005",
    demo: "#",
    note: "Designed 12+ modular hooks ⚡"
  },
  {
    name: "Groot - Plant Health Assistant",
    description:
      "A smart, responsive web utility built to perform rapid plant health assessments. Focused on creating highly intuitive UX flows, responsive mobile layouts, and modular, clean code repositories.",
    techStack: ["JavaScript", "HTML5", "CSS3", "UI/UX Principles", "Git"],
    github: "https://github.com/Shalini1005",
    demo: "#",
    note: "Sketched wireframes on paper first! 🌿"
  },
]

const skillsData = {
  designUX: ["Figma Wireframing", "Adobe XD Mockups", "Usability Testing", "Comprehensive Design Systems", "Interactive Journeys"],
  frontend: ["React.js Component Design", "Next.js App Router", "TypeScript Typings", "Modern CSS & Tailwind", "HTML5/CSS3 Semantic Skeletons"],
  backendTools: ["Node.js Server Bindings", "Express.js Controllers", "MongoDB Queries", "RESTful Routing", "Socket.io Events"],
  cloudDevops: ["Git Versioning", "Vercel Continuous Deploy", "Render Cloud Hosting", "Agile Standups & Scrum"]
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [coffeeLevel, setCoffeeLevel] = useState(3)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 bg-[#0F0E0D] text-[#E6E2DE] relative overflow-hidden figma-grid">
      {/* Handcrafted Warm Organic Soft Glows in background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D46F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F2CC8F]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Simulated Multiplayer Designers Cursors (Highly Humanizing!) */}
      <motion.div 
        animate={{ x: [100, 180, 140, 100], y: [150, 120, 220, 150] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute hidden lg:flex items-center gap-1.5 z-40 pointer-events-none text-xs font-semibold"
      >
        <MousePointer2 size={14} className="text-[#D46F50] fill-[#D46F50]" />
        <span className="bg-[#D46F50] text-white px-2 py-0.5 rounded-md font-handwritten shadow-md">Shalini (Designing...)</span>
      </motion.div>

      <motion.div 
        animate={{ x: [800, 720, 850, 800], y: [350, 420, 380, 350] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut", delay: 2.5 }}
        className="absolute hidden lg:flex items-center gap-1.5 z-40 pointer-events-none text-xs font-semibold"
      >
        <MousePointer2 size={14} className="text-[#81B29A] fill-[#81B29A]" />
        <span className="bg-[#81B29A] text-white px-2 py-0.5 rounded-md font-handwritten shadow-md">Dev (Testing Socket.io)</span>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Unified Hero: Designer Narrative & Embedded Live Code Sandbox */}
        <section className="grid lg:grid-cols-12 gap-12 items-center min-h-[75vh] pt-8 relative">
          
          {/* Left Side: Conversational Intro */}
          <div className="lg:col-span-7 space-y-6 text-left relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D46F50]/10 border border-[#D46F50]/20 text-[#F2CC8F] text-xs font-semibold glow-badge"
            >
              <Sparkles size={12} className="animate-pulse" />
              <span>Full-Stack Software Engineer & UI/UX Specialist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-7xl font-black tracking-tight leading-none"
            >
              Hi, I'm <span className="bg-gradient-to-r from-[#D46F50] via-[#F2CC8F] to-[#81B29A] bg-clip-text text-transparent">Shalini Mishra</span>.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-bold text-slate-400 font-serif italic"
            >
              "I write robust server APIs, but I care deeply about how they feel to the person clicking the button."
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#B0A9A2] text-sm md:text-base leading-relaxed max-w-xl"
            >
              I'm an IT graduate from **ABES Engineering College** who fell in love with component structures. 
              My frontend and UX design internships trained me to map full-scale React databases in **Next.js** 
              while maintaining 100% design-token precision with **Figma wireframes**. No guesswork, just clean human-centric code.
            </motion.p>

            {/* Dynamic Actions with Sketchy Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4 relative"
            >
              {/* Cozy Handdrawn Sketch Arrow */}
              <div className="absolute -left-36 top-6 hidden xl:block text-left text-xs text-[#F2CC8F] font-handwritten">
                <div className="rotate-[-6deg] mb-1">Grab my latest PDF! 👇</div>
                <svg width="45" height="25" viewBox="0 0 45 25" fill="none" className="ml-12 rotate-[20deg] text-[#D46F50] stroke-current">
                  <path d="M1 2C8 6 18 10 28 8C32.5 7.1 36.5 4.5 41.5 1.5M41.5 1.5C38 3 34 5.5 32 8.5M41.5 1.5C39.5 5 39 9.5 39.5 13.5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <a
                href="/Shalini_Resume.pdf"
                download
                className="bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] text-[#1E1C1A] px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-[#D46F50]/10 hover:brightness-110 transition-all active:scale-95 text-xs uppercase tracking-wider"
              >
                Download Resume
              </a>
              <Link
                href="/contact"
                className="bg-[#1E1C1A]/60 backdrop-blur-md border border-neutral-800 hover:border-[#D46F50]/50 text-white px-6 py-3 rounded-xl font-semibold transition-all active:scale-95 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(212,111,80,0.1)] text-xs uppercase tracking-wider"
              >
                <span>Let's Talk</span>
                <ArrowRight size={14} className="text-[#F2CC8F]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Embedded Live VS Code Mockup (Developer Element!) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-[#121110] border border-[#E07A5F]/20 rounded-2xl shadow-2xl overflow-hidden text-xs font-mono text-slate-300 relative"
          >
            {/* VS Code Title Bar */}
            <div className="bg-[#1C1A19] px-4 py-2 flex items-center justify-between border-b border-neutral-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">SwasthRoute_AssignRider.ts</span>
              <Code size={12} className="text-slate-500" />
            </div>

            {/* Code Lines */}
            <div className="p-4 overflow-x-auto space-y-1.5 bg-[#0F0E0D]/90 min-h-[280px]">
              <div><span className="text-[#D46F50]">import</span> {"{ Mapbox, Socket }"} <span className="text-[#D46F50]">from</span> <span className="text-[#81B29A]">"delivery-core"</span>;</div>
              <br />
              <div><span className="text-[#D46F50]">async function</span> <span className="text-[#F2CC8F]">assignNearestRider</span>(pharmacyLoc, orderId) {"{"}</div>
              <div className="pl-4"><span className="text-[#D46F50]">const</span> riders = <span className="text-[#D46F50]">await</span> Socket.<span className="text-[#F2CC8F]">getActiveRiders</span>();</div>
              <div className="pl-4"><span className="text-[#D46F50]">const</span> nearest = riders.<span className="text-[#F2CC8F]">reduce</span>((closest, rider) =&gt; {"{"}</div>
              <div className="pl-8"><span className="text-[#D46F50]">const</span> dist = Mapbox.<span className="text-[#F2CC8F]">getProximity</span>(pharmacyLoc, rider.coords);</div>
              <div className="pl-8"><span className="text-[#D46F50]">return</span> dist &lt; closest.dist ? {"{ rider, dist }"} : closest;</div>
              <div className="pl-4">{"}"}, {"{ rider: null, dist: Infinity }"});</div>
              <br />
              <div className="pl-4"><span className="text-[#D46F50]">if</span> (nearest.rider) {"{"}</div>
              <div className="pl-8"><span className="text-[#D46F50]">await</span> Socket.<span className="text-[#F2CC8F]">emit</span>(<span className="text-[#81B29A]">"rider_assigned"</span>, {"{"} orderId, riderId: nearest.rider.id {"}"});</div>
              <div className="pl-8"><span className="text-[#D46F50]">return</span> {"{ success: true, rider: nearest.rider.name }"};</div>
              <div className="pl-4">{"}"}</div>
              <div className="pl-4"><span className="text-[#D46F50]">return</span> {"{ success: false, message: 'No riders found' }"};</div>
              <div>{"}"}</div>
            </div>

            {/* Pinned Note inside Mock Editor */}
            <div className="absolute bottom-4 right-4 bg-[#FFE9A0] text-[#382405] font-handwritten px-3 py-1 text-[10px] rounded-md rotate-[3deg] shadow-md border border-neutral-200">
              📌 Automated Rider assignments calculated in &lt; 85ms!
            </div>
          </motion.div>
        </section>

        {/* Featured Projects with Handwritten Sticky Notes */}
        <section className="space-y-12 relative">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#D46F50]">
              <span className="font-mono text-xs font-bold">$ ls ./projects --featured</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Hand-Crafted Platform Projects</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              A detailed look into my full-stack platform building and UI design work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full group relative"
              >
                {/* Handwritten sticky note pinned on one of the projects! */}
                {idx === 0 && (
                  <div className="absolute -top-6 -right-6 sticky-note p-3 w-40 rotate-[6deg] text-xs leading-tight z-30 select-none">
                    📌 Real-time geospatial location assignments calculated on dispatch!
                  </div>
                )}
                {idx === 1 && (
                  <div className="absolute -bottom-8 -left-4 sticky-note p-2.5 w-36 rotate-[-4deg] text-xs leading-tight z-30 select-none">
                    🌿 Custom React component wrappers achieved 30% code reuse.
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[#D46F50]/10 border border-[#D46F50]/20 text-[#F2CC8F] rounded-xl group-hover:bg-[#D46F50]/20 transition-colors">
                      <Code2 size={20} />
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                      {project.demo !== "#" && (
                        <a href={project.demo} className="p-2 text-slate-400 hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#F2CC8F] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[#B0A9A2] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-800/80">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] bg-slate-900 border border-slate-800 text-[#F2CC8F] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Micro Skill Matrix Preview & Human Widgets */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Skill Matrix (Fills 8 cols) */}
          <section className="lg:col-span-8 glass-card p-8 rounded-3xl border border-slate-800/80 relative">
            <div className="absolute -top-6 right-10 sticky-note p-3 w-44 rotate-[-3deg] text-xs leading-tight z-30 select-none hidden md:block">
              🎨 Figma to Code handoffs done with 100% design alignment. No guesswork.
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <Layout size={20} className="text-[#D46F50]" />
                  <span>My Workspace Stack</span>
                </h3>
                <p className="text-slate-400 text-xs">
                  Granular engineering components coupled with visual layout tools.
                </p>
              </div>
              <Link
                href="/skills"
                className="text-xs font-semibold text-[#F2CC8F] hover:text-[#F2CC8F]/80 transition-colors flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider"
              >
                <span>Explore full matrix</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {Object.entries(skillsData).slice(0, 4).map(([category, skills]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D46F50]">
                    {category.replace("designUX", "UI/UX DESIGN").replace("backendTools", "BACKEND BINDINGS").replace("cloudDevops", "CLOUD & DEVOPS").replace("frontend", "FRONTEND")}
                  </h4>
                  <ul className="space-y-1.5">
                    {skills.slice(0, 3).map(skill => (
                      <li key={skill} className="text-xs text-slate-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D46F50]/60" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Right Column: Cozy Human Widgets (Fills 4 cols - VERY HUMAN!) */}
          <section className="lg:col-span-4 space-y-6">
            
            {/* Lofi Study Session Widget */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between h-[160px] relative">
              <div className="flex justify-between items-start">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#81B29A]">Study Session</h4>
                <Music size={14} className="text-[#81B29A] animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white uppercase font-sans">Lofi Coding Station 🎧</div>
                <div className="text-[10px] text-slate-500 font-handwritten italic">Prototyping & live mapping beats</div>
              </div>
              <div className="w-full bg-[#1C1A19] h-1 rounded-full overflow-hidden">
                <motion.div animate={{ width: ["20%", "85%", "40%", "95%", "20%"] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="h-full bg-[#81B29A]" />
              </div>
            </div>

            {/* Coffee widget */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800/80 flex justify-between items-center h-[100px]">
              <div className="space-y-1">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#F2CC8F]">Coffee Consumption</h4>
                <div className="text-white font-bold text-sm uppercase">Mug Level: {coffeeLevel}/5 ☕</div>
              </div>
              <button 
                onClick={() => setCoffeeLevel(prev => (prev < 5 ? prev + 1 : 1))}
                className="p-2 bg-[#F2CC8F]/10 border border-[#F2CC8F]/20 text-[#F2CC8F] hover:bg-[#F2CC8F]/20 rounded-xl transition-all active:scale-90 text-xs font-bold"
                title="Click to Refill Mug!"
              >
                Refill
              </button>
            </div>

          </section>
        </div>
      </div>
    </div>
  )
}
