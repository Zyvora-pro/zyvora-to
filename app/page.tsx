import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/home/hero-section"
import { ClientLogos } from "@/components/home/client-logos"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { AnalyticsPlatformSection } from "@/components/home/analytics-platform-section"
import { SuccessCardsSection } from "@/components/home/success-cards-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { StatsSection } from "@/components/home/stats-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <WhyChooseSection />
        <AnalyticsPlatformSection />
        <SuccessCardsSection />
        <TestimonialsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
