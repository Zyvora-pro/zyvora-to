import Image from "next/image"

const features = [
  {
    icon: "/icons/brain.png",
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: "/icons/trending.png",
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: "/icons/key-gray.png",
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-lavender-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Why our clients
            <br />
            choose Zyvora?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make AI simple, trustworthy, and impactful—helping businesses grow with future ready solutions. At Zyvora, your success is our success. We innovate with purpose, partner with care, and ensure you thrive as the AI world evolves.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            {"Let's build smarter solutions, stronger connections, and sustainable growth—together."}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
