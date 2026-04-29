"use client"

import { useEffect } from "react"
import Link from "next/link"

export function Header() {
  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.substring(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = Array.from(document.querySelectorAll('a[href^="#"]'))
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-foreground hover:text-primary transition-colors">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

