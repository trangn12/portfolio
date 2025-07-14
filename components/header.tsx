"use client"

import { useEffect } from "react"
import Link from "next/link"

export function Header() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.href.startsWith(window.location.origin)) {
        e.preventDefault()
        const href = target.getAttribute("href")
        if (href) {
          const targetId = href.split("#")[1]
          if (targetId) {
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" })
            }
          } else {
            window.location.href = href
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="/#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-foreground hover:text-primary transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-foreground hover:text-primary transition-colors">
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
