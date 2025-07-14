"use client"

import { useEffect, useRef } from "react"

interface ParallaxBackgroundProps {
  className?: string
}

export function ParallaxBackground({ className = "" }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = container.getBoundingClientRect()

      const x = clientX - left
      const y = clientY - top

      const xPercentage = (x / width - 0.5) * 2
      const yPercentage = (y / height - 0.5) * 2

      const xOffset = xPercentage * 10 // Max 10px movement
      const yOffset = yPercentage * 10

      container.style.transform = `translate(${xOffset}px, ${yOffset}px)`
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 transition-transform duration-200 ease-out ${className}`} />
  )
}
