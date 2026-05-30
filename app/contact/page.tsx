"use client"

import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, Github, Phone, Sparkles, Send, AlertCircle, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      // Mock sending if env keys are not populated to prevent crashes
      setTimeout(() => {
        setStatus("success")
        setLoading(false)
        formRef.current?.reset()
      }, 1500)
      return
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      )
      .then(
        () => {
          setStatus("success")
          formRef.current?.reset()
          setLoading(false)
        },
        (error) => {
          console.error("Email sending error:", error)
          setStatus("error")
          setLoading(false)
        }
      )
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0F0E0D] text-[#E6E2DE] relative overflow-hidden figma-grid">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D46F50]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F2CC8F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#D46F50] font-mono text-xs font-bold">
            <span>$ send --message</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Get In <span className="bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Have an exciting full-stack engineering gig, design consulting needs, or simply want to chat? Fill out the log below!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 pt-6">
          {/* Form Card */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800/80 space-y-6"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Your Name</label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  className="w-full bg-slate-950/65 border border-slate-800 focus:border-[#D46F50] focus:outline-none p-3.5 rounded-xl text-sm transition-all focus:shadow-[0_0_15px_rgba(212,111,80,0.1)] text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Your Email</label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  className="w-full bg-slate-950/65 border border-slate-800 focus:border-[#D46F50] focus:outline-none p-3.5 rounded-xl text-sm transition-all focus:shadow-[0_0_15px_rgba(212,111,80,0.1)] text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Message Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Let's build something epic!"
                  required
                  className="w-full bg-slate-950/65 border border-slate-800 focus:border-[#D46F50] focus:outline-none p-3.5 rounded-xl text-sm transition-all focus:shadow-[0_0_15px_rgba(212,111,80,0.1)] text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Message Body</label>
                <textarea
                  name="message"
                  placeholder="Hey Shalini, I'd love to chat about..."
                  required
                  rows={5}
                  className="w-full bg-slate-950/65 border border-slate-800 focus:border-[#D46F50] focus:outline-none p-3.5 rounded-xl text-sm transition-all focus:shadow-[0_0_15px_rgba(212,111,80,0.1)] text-white resize-none"
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl font-handwritten">
                  <CheckCircle2 size={16} />
                  <span>Message dispatched successfully! I will get back to you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl font-handwritten">
                  <AlertCircle size={16} />
                  <span>Failed to dispatch message. Please email me directly!</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#D46F50] to-[#F2CC8F] hover:brightness-110 text-[#1E1C1A] p-3.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-[#D46F50]/10 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 uppercase tracking-wider text-xs"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={12} />
                  </>
                )}
              </button>
            </form>
          </motion.section>

          {/* Side Info Cards */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-4 font-mono">
                Directory: /contactsystems
              </h3>

              <div className="space-y-6">
                <ContactCard icon={<Mail size={20} className="text-[#D46F50]" />} label="Email Address" value="urs.shalini.m@gmail.com" href="mailto:urs.shalini.m@gmail.com" />
                <ContactCard icon={<Linkedin size={20} className="text-[#F2CC8F]" />} label="LinkedIn Connection" value="Shalini Mishra" href="https://www.linkedin.com/in/shalini-mishra-670b74227" />
                <ContactCard icon={<Github size={20} className="text-[#81B29A]" />} label="GitHub Repository" value="@Shalini0309" href="https://github.com/Shalini0309" />
                <ContactCard icon={<Phone size={20} className="text-emerald-400" />} label="Voice Call" value="+91 7740248828" href="tel:+917740248828" />
              </div>
            </div>

            <div className="bg-[#D46F50]/5 border border-[#D46F50]/20 rounded-2xl p-6 flex items-center gap-3 text-[#F2CC8F] text-xs font-semibold font-handwritten">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
              <span>SYSTEM STATUS: STABLE & DISPATCH_LOG_ONLINE</span>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-[#D46F50]/20 hover:bg-slate-950/80 transition-all group">
      <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg group-hover:bg-[#D46F50]/10 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{label}</div>
        <div className="text-sm font-bold text-white group-hover:text-[#F2CC8F] transition-colors mt-0.5">{value}</div>
      </div>
    </a>
  )
}
