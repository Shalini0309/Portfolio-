"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type PortfolioMode = "developer" | "designer"

interface PortfolioModeContextType {
  mode: PortfolioMode
  setMode: (mode: PortfolioMode) => void
  toggleMode: () => void
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(undefined)

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>("developer")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("portfolio-mode") as PortfolioMode
    if (savedMode === "developer" || savedMode === "designer") {
      setModeState(savedMode)
    }
    setMounted(true)
  }, [])

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode)
    localStorage.setItem("portfolio-mode", newMode)
    // Synchronize HTML element classes
    const html = document.documentElement
    if (newMode === "designer") {
      html.classList.add("designer-mode")
    } else {
      html.classList.remove("designer-mode")
    }
  };

  const toggleMode = () => {
    const nextMode = mode === "developer" ? "designer" : "developer"
    setMode(nextMode)
  }

  // Update HTML class once component mounts
  useEffect(() => {
    if (mounted) {
      const html = document.documentElement
      if (mode === "designer") {
        html.classList.add("designer-mode")
      } else {
        html.classList.remove("designer-mode")
      }
    }
  }, [mounted, mode])

  return (
    <PortfolioModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PortfolioModeContext.Provider>
  )
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext)
  if (context === undefined) {
    throw new Error("usePortfolioMode must be used within a PortfolioModeProvider")
  }
  return context
}
