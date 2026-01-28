"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    theme: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="bg-lavender-medium py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              Left questions? Contacts us now for a free consultation and free trial!
            </h2>
            <p className="text-muted-foreground mb-8">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email address</p>
                <p className="font-medium text-foreground">ensome@info.co.us</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone number</p>
                <p className="font-medium text-foreground">+1601-201-5580</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="font-medium text-foreground">
                  1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Andrea"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="andrea@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>
              <div>
                <label htmlFor="theme" className="block text-sm text-muted-foreground mb-2">
                  Theme
                </label>
                <Input
                  id="theme"
                  type="text"
                  placeholder="Job"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[80px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
