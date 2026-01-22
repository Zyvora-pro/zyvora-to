"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"

const aiServices = [
  {
    title: "AI Strategy & Consulting",
    description: "We simplify AI adoption with clear, future ready roadmaps.",
  },
  {
    title: "Conversational AI & Generative Solutions",
    description: "Smarter chatbots and creative automation that engage customers effortlessly.",
  },
  {
    title: "Machine Learning, Deep Learning & Predictive Analytics",
    description: "Intelligent models that learn, adapt, and forecast business outcomes.",
  },
  {
    title: "Mobile & Web Engineering",
    description: "Seamless digital experiences built to perform and scale.",
  },
  {
    title: "Digital Transformation & Innovation Technology",
    description: "Guiding your business through AI driven change with confidence.",
  },
  {
    title: "AI Driven UI/UX Design",
    description: "Interfaces that feel natural, intuitive, and built for people.",
  },
  {
    title: "Enterprise Applications & Performance Engineering",
    description: "Custom apps and optimized systems that drive efficiency and speed.",
  },
  {
    title: "Data Engineering & AI Pipelines",
    description: "Turning raw data into clarity, insights, and action.",
  },
  {
    title: "AI Cybersecurity & Trust",
    description: "Intelligent protection that keeps your business secure in a digital world.",
  },
  {
    title: "Computer Vision & NLP",
    description: "Smarter automation through image recognition and language understanding.",
  },
  {
    title: "Recommendation Systems & RPA with AI",
    description: "Personalized experiences and automated workflows that boost growth.",
  },
  {
    title: "Cloud AI Integration",
    description: "Deploying and scaling AI seamlessly across cloud platforms.",
  },
  {
    title: "AI Ethics & Governance Consulting",
    description: "Responsible, transparent, and fair AI adoption that builds trust.",
  },
]

export default function ArtificialIntelligencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#c4c4c4] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
                Artificial Intelligence
              </h1>
              <p className="text-muted-foreground">
                <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
                <span className="mx-2">/</span>
                <span>Services</span>
                <span className="mx-2">/</span>
                <span>Artificial Intelligence</span>
              </p>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
                Our AI Services
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                We offer comprehensive AI solutions designed to transform your business and unlock new possibilities in the digital age.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-lg text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
