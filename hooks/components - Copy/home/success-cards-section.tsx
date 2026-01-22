import { Button } from "@/components/ui/button"

const cards = [
  {
    date: "22 june 2021",
    title: "Sed ut perspiciatis unde omnis at vero blanditiis",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...",
    tags: ["Pineco", "MPL"],
  },
  {
    date: "22 june 2021",
    title: "Sed ut perspiciatis unde omnis at vero blanditiis",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...",
    tags: ["Pineco", "MPL"],
  },
  {
    date: "22 june 2021",
    title: "Sed ut perspiciatis unde omnis at vero blanditiis",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...",
    tags: ["Pineco", "MPL"],
  },
]

export function SuccessCardsSection() {
  return (
    <section className="bg-lavender-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Glad to help your success</h2>
        </div>

        {/* Success Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div key={index} className="bg-background rounded-2xl p-6 shadow-sm">
              <p className="text-xs text-muted-foreground mb-3">{card.date}</p>
              <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{card.description}</p>
              <div className="flex gap-4">
                {card.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
