import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const teamMembers = [
  { name: "Joe Bridges", role: "Founder" },
  { name: "Jeffrey Walters", role: "Chief Executive Officer" },
  { name: "Jason Reed", role: "Chief Technology Officer" },
  { name: "Nellie Padilla", role: "Creative Director" },
  { name: "Dean Bell", role: "Lead Programmer" },
  { name: "Pearl Brooks", role: "Digital Marketer" },
  { name: "Isaiah Griffin", role: "UX Designer" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Our Story Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our story</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                With lots of unique blocks, you can easily build a page without coding. Build your next consultancy
                website within few minutes.
              </p>
            </div>

            {/* Large Image Placeholder */}
            <div className="bg-gray-placeholder rounded-3xl aspect-[16/9] w-full max-w-4xl mx-auto mb-20" />

            {/* We Are Here To Help */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-tight">
                  We are here to help the customers to get their success.
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  We share common trends and strategies for improving your rental income and making sure you stay in
                  high demand of service.
                </p>
                <p className="text-muted-foreground">
                  With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                  With lots of unique blocks, you can easily build a page without coding any other page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High Skilled Coders Section */}
        <section className="bg-lavender-light py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-placeholder rounded-2xl aspect-square" />
                  <div className="bg-gray-placeholder rounded-2xl aspect-square" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-placeholder rounded-2xl aspect-square" />
                  <div className="bg-gray-placeholder rounded-2xl aspect-square" />
                </div>
              </div>

              {/* Right Column - Content */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance leading-tight">
                  High skilled coders from worldwide.
                </h2>
                <p className="text-muted-foreground mb-4">
                  We share common trends and strategies for improving your rental income and making sure you stay in
                  high demand of service.
                </p>
                <p className="text-muted-foreground">
                  With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                  With lots of unique blocks, you can easily build a page without coding any other page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Meet our team</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                With lots of unique blocks, you can easily build a page without coding. Build your next consultancy
                website within few minutes.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-placeholder rounded-2xl aspect-[3/4] mb-4 group-hover:shadow-lg transition-shadow" />
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
