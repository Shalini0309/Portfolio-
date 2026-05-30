import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#333333] py-6 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[#888888]">
          &copy; {new Date().getFullYear()} Shalini Mishra &middot; Made with <span className="text-red-500">❤️</span> + 💻 &middot; All rights reserved
        </div>
        
        <div className="flex gap-6 items-center">
          <SocialLink href="https://github.com/Shalini0309" icon={<Github size={16} />} />
          <SocialLink href="https://www.linkedin.com/in/shalini-mishra-670b74227" icon={<Linkedin size={16} />} />
          <SocialLink href="mailto:urs.shalini.m@gmail.com" icon={<Mail size={16} />} />
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#888888] hover:text-primary transition-colors"
    >
      {icon}
    </a>
  )
}
