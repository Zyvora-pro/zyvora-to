import { Users, Layers, Building2, Briefcase, BarChart3 } from "lucide-react"

export function ClientLogos() {
  const logos = [
    { icon: Users, name: "DELAWARE" },
    { icon: Layers, name: "AFFIN XTRAS" },
    { icon: Building2, name: "C.GROUP" },
    { icon: Briefcase, name: "WEBOCEAN*" },
    { icon: BarChart3, name: "GRAFFAR" },
  ]

  return (
    <section className="py-8 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <logo.icon className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wider">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
