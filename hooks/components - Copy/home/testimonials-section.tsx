import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    avatar: "/placeholder-avatar.jpg",
    quote:
      '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."',
    name: "Alex Bern",
    title: "CEO, Leadtest",
  },
  {
    avatar: "/placeholder-avatar.jpg",
    quote:
      '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."',
    name: "Alex Bern",
    title: "CEO, Leadtest",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Trusted by the best in
            <br />
            the business
          </h2>
          {/* Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-lavender-light rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-placeholder flex-shrink-0">
                  <div className="w-full h-full bg-gray-placeholder" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
