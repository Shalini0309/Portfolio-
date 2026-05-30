"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles, Terminal } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500 h-14 flex items-center px-4 font-mono text-sm bg-[#0F0E0D]/90 backdrop-blur-md border-b border-[#E07A5F]/10">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* macOS Traffic Lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>

        {/* Center Breadcrumb */}
        <div className="hidden md:block text-[#888888]">
          <span className="text-[#E07A5F]">shalini@dev-designer</span>
          <span>:</span>
          <span className="text-[#81B29A]">~</span>
          <span>/{pathname.replace("/", "") || "home"}$</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 uppercase tracking-wider px-2 py-1 rounded text-xs ${
                  isActive(item.href) 
                    ? "text-[#E07A5F] bg-[#E07A5F]/10 font-bold border-b border-[#E07A5F]"
                    : "text-[#888888] hover:text-[#CCCCCC]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#888888]">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[#0F0E0D]/95 border-b border-[#E07A5F]/20 p-4 md:hidden animate-in slide-in-from-top-2 z-50">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-widest ${
                  isActive(item.href) ? "text-[#E07A5F]" : "text-[#888888]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {`> ${item.name}`}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
