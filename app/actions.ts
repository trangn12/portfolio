"use server"

import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in the environment variables")
}

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!resend) {
    console.error("Resend client is not initialized due to missing API key")
    return { success: false, message: "Server configuration error. Please contact the administrator." }
  }

  try {
    await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "your-email@gmail.com", // Replace with your Gmail address
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}

