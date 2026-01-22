const stats = [
  { value: "1830+", label: "Project executed" },
  { value: "220", label: "Data analytics" },
  { value: "390", label: "Data management" },
  { value: "834+", label: "Satisfied customers" },
]

export function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-primary-foreground mb-2">{stat.value}</p>
              <p className="text-sm text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
