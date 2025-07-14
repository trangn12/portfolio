"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  section: string
}

export function BackButton({ section }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/#${section}`)
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <Button onClick={handleClick} variant="ghost" className="mb-4">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to {section.charAt(0).toUpperCase() + section.slice(1)}
    </Button>
  )
}
