"use client"

import { useEffect, useRef } from "react"

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    const drawGrid = (time: number) => {
      ctx.fillStyle = "#020617"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const drift = (time * 0.018) % 64
      ctx.strokeStyle = "rgba(125, 211, 252, 0.08)"
      ctx.lineWidth = 1

      for (let y = -64; y < canvas.height + 64; y += 64) {
        ctx.beginPath()
        ctx.moveTo(0, y + drift)
        ctx.lineTo(canvas.width, y + drift)
        ctx.stroke()
      }

      for (let x = -64; x < canvas.width + 64; x += 64) {
        ctx.beginPath()
        ctx.moveTo(x + drift, 0)
        ctx.lineTo(x + drift, canvas.height)
        ctx.stroke()
      }

      const gradient = ctx.createLinearGradient(0, canvas.height * 0.2, canvas.width, canvas.height * 0.8)
      gradient.addColorStop(0, "rgba(34, 211, 238, 0)")
      gradient.addColorStop(0.35, "rgba(34, 211, 238, 0.22)")
      gradient.addColorStop(0.65, "rgba(244, 114, 182, 0.14)")
      gradient.addColorStop(1, "rgba(52, 211, 153, 0)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      for (let i = 0; i < 5; i += 1) {
        const offset = i * 130 + ((time * 0.035) % 130)
        ctx.beginPath()
        ctx.moveTo(-80, canvas.height * 0.24 + offset * 0.22)
        ctx.bezierCurveTo(
          canvas.width * 0.28,
          canvas.height * 0.02 + offset,
          canvas.width * 0.6,
          canvas.height * 0.64 - offset * 0.12,
          canvas.width + 120,
          canvas.height * 0.18 + offset * 0.28,
        )
        ctx.stroke()
      }
    }

    const animate = (time = 0) => {
      drawGrid(time)
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(115deg,rgba(15,23,42,0.15),rgba(2,6,23,0.78)_42%,rgba(8,13,32,0.9)),radial-gradient(ellipse_at_top,rgba(34,211,238,0.16),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(244,114,182,0.12),transparent_38%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.68)_72%,rgba(2,6,23,0.96))]" />
    </>
  )
}
