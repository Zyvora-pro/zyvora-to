import { Button } from "@/components/ui/button"

export function AnalyticsPlatformSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* First Block - Analytics Platform */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Column - Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-tight">
              The newest business analytics platform
            </h2>
            <p className="text-muted-foreground mb-8">
              At Zyvora, innovation meets simplicity. We turn complex technology into powerful, accessible solutions that fuel growth across industries.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-[#c4c4c4] rounded-3xl aspect-[4/3] w-full" />
          </div>
        </div>

        {/* Second Block - Data Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#c4c4c4] rounded-3xl aspect-[4/3] w-full" />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-tight">
              Radically new data solutions
            </h2>
            <p className="text-muted-foreground mb-8">
              Our mission is simple yet bold: to empower every industry with future-ready solutions that are easy to adopt, impactful, and built for lasting success.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
