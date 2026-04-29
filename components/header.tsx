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

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Letters", "#recommendations"],
    ["Contact", "#contact"],
    ["Resume", "/resume"],
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6">
        <ul className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.035] p-1 text-sm text-slate-300">
          {links.map(([label, href]) => (
            <li key={href} className="shrink-0">
              <Link
                href={href}
                className="block rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-cyan-200 sm:px-4"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
