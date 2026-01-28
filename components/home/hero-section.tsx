import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Vision Built. Value Scaled. Success Sustained—Your AI Partner Beyond the Finish Line
            </h1>
            <p className="text-muted-foreground mb-4 max-w-lg">
              At Zyvora, innovation meets simplicity. We turn complex technology into powerful, accessible solutions that fuel growth across industries. From AI consulting to digital transformation, we blend intelligence with creativity to help businesses thrive.
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Our mission is simple yet bold: to empower every industry with future-ready solutions that are easy to adopt, impactful, and built for lasting success.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
                Know More
              </Button>
              <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground">
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                </span>
                <span className="font-medium">Watch the demo</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-[#c4c4c4] rounded-3xl aspect-[4/3] w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
