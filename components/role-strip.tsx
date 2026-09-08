/** Existing role labels, shown as a slow horizontal strip under the hero. */
const roles = [
  "Data Analyst",
  "AI/ML Builder",
  "Agentic AI Builder",
  "Dashboard Builder",
  "Power BI Developer",
  "Research Data Tool Developer",
]

const dotTones = ["bg-brand", "bg-coral", "bg-teal", "bg-orange", "bg-pink", "bg-indigo"]

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
      aria-hidden={ariaHidden || undefined}
    >
      {roles.map((role, index) => (
        <li key={role} className="flex items-center gap-3 whitespace-nowrap sm:gap-4">
          <span aria-hidden className={`size-2 rounded-full ${dotTones[index % dotTones.length]}`} />
          <span className="label-mono text-subtle">{role}</span>
        </li>
      ))}
    </ul>
  )
}

export function RoleStrip() {
  return (
    <section
      aria-label="What I work as"
      className="marquee relative border-y border-hairline bg-white py-4"
    >
      <div className="marquee-track">
        <Row />
        <Row ariaHidden />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
      />
    </section>
  )
}
