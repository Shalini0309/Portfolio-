import type React from "react"
import type { Metadata } from "next"
import { Outfit, JetBrains_Mono, Architects_Daughter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioModeProvider } from "@/context/PortfolioModeContext"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const architectsDaughter = Architects_Daughter({ weight: "400", subsets: ["latin"], variable: "--font-handwritten" })

export const metadata: Metadata = {
  title: "Shalini Mishra | Software Engineer & UI/UX Designer",
  description:
    "Official portfolio of Shalini Mishra, a Full-Stack Software Engineer and UI/UX Designer specialized in React.js, Next.js, Node.js, and modern interface design. Features a dual Developer CLI and Designer Canvas theme.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} ${architectsDaughter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <PortfolioModeProvider>
            <Navbar />
            {children}
            <Footer />
          </PortfolioModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}