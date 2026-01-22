import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Mail, PhoneCall, MessageSquareMore } from "lucide-react"

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@d8analytics.ai",
  },
  {
    icon: PhoneCall,
    title: "Request a Callback",
    description: "Leave your number, we'll reach out.",
  },
  {
    icon: MessageSquareMore,
    title: "Schedule a Call",
    description: "Choose a time that works for you.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-placeholder py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance leading-tight">
                Let's Talk Data That Drives Decisions
              </h1>
              <p className="text-muted-foreground">
                Whether you're scaling, fundraising, or simplifying complex analytics — our AI-powered solutions are
                built to bring clarity, speed, and impact to every decision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options Cards */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-[#e8d4f0] rounded-2xl p-10 pt-12 pb-10 text-center"
                >
                  <div className="w-16 h-16 bg-[#2d1b4e] rounded-full flex items-center justify-center mx-auto mb-6">
                    <option.icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-base text-foreground mb-1">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
