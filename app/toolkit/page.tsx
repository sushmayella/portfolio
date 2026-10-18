
const toolkitGroups = [
  {
    number: "01",
    title: "Backend & APIs",
    description:
      "Building application services with clear responsibilities, predictable interfaces, and maintainable business logic.",
    accent: "sage",
    items: [
      { name: "Java", note: "Core language" },
      { name: "Spring Boot", note: "Backend services" },
      { name: "REST APIs", note: "Service interfaces" },
      { name: "SQL & PostgreSQL", note: "Persistence" },
      { name: "TypeScript", note: "Frontend development" },
    ],
  },
  {
    number: "02",
    title: "Distributed Systems",
    description:
      "Connecting services through events and asynchronous workflows while thinking carefully about failure and recovery.",
    accent: "blue",
    items: [
      { name: "Apache Kafka", note: "Event streaming" },
      { name: "Event-driven design", note: "Asynchronous workflows" },
      { name: "Transactional outbox", note: "Reliable event publishing" },
      { name: "Retries & recovery", note: "Failure handling" },
      { name: "Microservices", note: "Service boundaries" },
    ],
  },
  {
    number: "03",
    title: "Cloud & Reliability",
    description:
      "Packaging, deploying, testing, and observing services with an emphasis on operational reliability.",
    accent: "terracotta",
    items: [
      { name: "AWS", note: "Cloud services" },
      { name: "Docker", note: "Containerization" },
      { name: "Kubernetes", note: "Container orchestration" },
      { name: "CI/CD", note: "Build and release workflows" },
      { name: "Testing & observability", note: "Quality and visibility" },
    ],
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "Exploring how intelligent capabilities can become useful, testable features inside real applications.",
    accent: "sage",
    items: [
      { name: "Retrieval-augmented generation", note: "RAG workflows" },
      { name: "Prompt engineering", note: "Model interaction" },
      { name: "Data preparation", note: "Preprocessing and features" },
      { name: "Model evaluation", note: "Assessing output quality" },
      { name: "Agentic AI", note: "Tool-using workflows" },
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the flow",
    description:
      "Trace a request from the API through persistence, messaging, processing, and the final response.",
  },
  {
    number: "02",
    title: "Design for failure",
    description:
      "Consider timeouts, retries, duplicate messages, and what happens when a dependency becomes unavailable.",
  },
  {
    number: "03",
    title: "Make complexity useful",
    description:
      "Choose abstractions and tools because they solve a real problem, not simply because they are fashionable.",
  },
];

function ToolkitCard({
  group,
}: {
  group: (typeof toolkitGroups)[number];
}) {
  const accentClass =
    group.accent === "blue"
      ? "text-[var(--blue)]"
      : group.accent === "terracotta"
        ? "text-[var(--terracotta)]"
        : "text-[var(--sage)]";

  return (
    <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      <div className="flex items-center justify-between">
        <span className={`font-mono text-sm ${accentClass}`}>
          {group.number}
        </span>
        <span
          className={`h-2.5 w-2.5 rounded-full bg-current ${accentClass}`}
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-6 font-serif text-2xl tracking-tight">
        {group.title}
      </h2>

      <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--muted)]">
        {group.description}
      </p>

      <div className="my-6 h-px bg-[var(--border)]" />

      <ul className="space-y-4">
        {group.items.map((item) => (
          <li key={item.name} className="flex items-start gap-3">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current ${accentClass}`}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">
                {item.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ToolkitPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
      <section className="max-w-3xl pb-12 sm:pb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
          Toolkit
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
          The tools matter.
          <span className="block text-[var(--sage)]">
            The thinking matters more.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          My work sits at the intersection of backend engineering,
          distributed systems, cloud infrastructure, and practical AI.
          Here are the technologies and engineering concepts I use to
          turn problems into working systems.
        </p>
      </section>

      <section
        aria-label="Engineering skills"
        className="grid gap-5 sm:grid-cols-2 sm:gap-6"
      >
        {toolkitGroups.map((group) => (
          <ToolkitCard key={group.number} group={group} />
        ))}
      </section>

      <section className="mt-20 border-t border-[var(--border)] pt-12 sm:mt-24 sm:pt-16">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
              How I approach engineering
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Beyond the technology stack.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              Tools evolve. The ability to understand a system, reason
              about trade-offs, and make thoughtful engineering decisions
              is what I want my work to reflect.
            </p>
          </div>

          <div className="space-y-0">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-[var(--border)] py-6 first:pt-0 last:border-b-0"
              >
                <span className="pt-1 font-mono text-xs text-[var(--sage)]">
                  {principle.number}
                </span>

                <div>
                  <h3 className="font-serif text-xl">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
          Always learning
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
          Better systems start with better questions.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
          I keep strengthening my foundations in backend architecture,
          distributed systems, reliability, and the practical application
          of AI.
        </p>

        <a
          href="/engineering-work"
          className="mt-7 inline-flex items-center gap-2 border-b border-[var(--sage)] pb-1 text-sm transition-colors hover:text-[var(--sage)]"
        >
          See the engineering work
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="py-16 text-center sm:py-20">
        <p className="text-sm text-[var(--muted)]">
          Have a system worth building?
        </p>

        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 border-b border-[var(--sage)] pb-1 font-serif text-xl transition-colors hover:text-[var(--sage)]"
        >
          Let&apos;s connect
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
