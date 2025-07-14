"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"
import { sendEmail } from "@/app/actions"

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setErrorMessage("")

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.")
      setIsPending(false)
      return
    }

    try {
      const response = await sendEmail(formData)
      if (response.success) {
        setIsSuccess(true)
        // Reset the form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      } else {
        setErrorMessage(response.message)
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        {isSuccess ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold mb-4 text-green-500">Your message has been sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form id="contact-form" action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-input text-foreground rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-input text-foreground rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 bg-input text-foreground rounded"
                required
              ></textarea>
            </div>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <Button type="submit" className="w-full" disabled={isPending}>
              <Send className="mr-2 h-4 w-4" />
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
