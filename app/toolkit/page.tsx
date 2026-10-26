
"use client";

import { useState } from "react";

const toolkitGroups = [
  {
    id: "languages",
    number: "01",
    title: "Programming Languages",
    shortTitle: "Languages",
    accent: "sage",
    description:
      "The foundations I use to build application logic, services, and end-to-end features.",
    skills: ["Java", "Go", "Python", "JavaScript", "TypeScript"],
    practice:
      "Choosing the right language for the problem, keeping code readable, and making behavior predictable.",
    connections: ["backend", "ai", "data"],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Engineering",
    shortTitle: "Backend",
    accent: "terracotta",
    description:
      "Designing APIs and application services with clear responsibilities and maintainable boundaries.",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Hibernate / JPA",
      "REST APIs",
      "Microservices",
      "Node.js",
      "Angular",
    ],
    practice:
      "Building service interfaces, integrating application components, and balancing maintainability with performance.",
    connections: ["languages", "distributed", "cloud", "data"],
  },
  {
    id: "distributed",
    number: "03",
    title: "Distributed Systems",
    shortTitle: "Distributed",
    accent: "blue",
    description:
      "Connecting services through events and asynchronous workflows while accounting for failure and recovery.",
    skills: [
      "Apache Kafka",
      "Event-driven architecture",
      "Asynchronous workflows",
      "Feature pipelines",
    ],
    practice:
      "Thinking through retries, duplicate events, delivery guarantees, service boundaries, and recovery paths.",
    connections: ["backend", "ai", "data"],
  },
  {
    id: "ai",
    number: "04",
    title: "AI Engineering",
    shortTitle: "AI",
    accent: "sage",
    description:
      "Integrating AI and machine-learning capabilities into real application workflows.",
    skills: [
      "ML inference APIs",
      "Fraud-scoring integration",
      "Feature pipelines",
      "AI/ML integration",
    ],
    practice:
      "Connecting model outputs to application logic, integrating inference into workflows, and considering data quality.",
    connections: ["languages", "distributed", "data"],
    tools: ["Claude Code", "Cursor", "Codex"],
  },
  {
    id: "cloud",
    number: "05",
    title: "Cloud & Delivery",
    shortTitle: "Cloud",
    accent: "terracotta",
    description:
      "Packaging, deploying, and delivering software with repeatable workflows.",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "Maven"],
    practice:
      "Using containers, automation, and delivery pipelines to make software releases more consistent.",
    connections: ["backend", "data"],
  },
  {
    id: "data",
    number: "06",
    title: "Data & Quality",
    shortTitle: "Data & QA",
    accent: "blue",
    description:
      "Working with persistence, search, and testing tools to support dependable applications.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Elasticsearch",
      "Testify",
      "Mockito",
      "Jasmine / Karma",
    ],
    practice:
      "Validating behavior, testing application boundaries, and choosing storage and search tools to fit the use case.",
    connections: ["languages", "backend", "distributed", "ai", "cloud"],
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

const positions: Record<string, { x: number; y: number }> = {
  languages: { x: 100, y: 42 },
  backend: { x: 255, y: 112 },
  distributed: { x: 255, y: 224 },
  ai: { x: 100, y: 294 },
  cloud: { x: 100, y: 168 },
  data: { x: 410, y: 168 },
};

const accentClasses: Record<string, string> = {
  sage: "text-[var(--sage)]",
  terracotta: "text-[var(--terracotta)]",
  blue: "text-[var(--blue)]",
};

function ToolkitMap({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const selected = toolkitGroups.find((group) => group.id === selectedId);

  const edges = toolkitGroups.flatMap((group) =>
    group.connections
      .filter((targetId) => group.id < targetId)
      .map((targetId) => ({
        source: group.id,
        target: targetId,
      })),
  );

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
          Engineering capability map
        </p>
        <p className="text-xs text-[var(--muted-foreground)]">
          Select a node to explore
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <svg
            viewBox="0 0 510 340"
            role="img"
            aria-label="Connected map of six engineering capability groups"
            className="hidden h-auto w-full overflow-visible sm:block"
          >
            {edges.map((edge) => {
              const from = positions[edge.source];
              const to = positions[edge.target];
              const active =
                edge.source === selectedId || edge.target === selectedId;

              return (
                <line
                  key={`${edge.source}-${edge.target}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--border)"
                  strokeWidth={active ? 2.5 : 1.3}
                  strokeDasharray={active ? "none" : "4 5"}
                  opacity={active ? 1 : 0.65}
                />
              );
            })}

            {toolkitGroups.map((group) => {
              const point = positions[group.id];
              const active = group.id === selectedId;
              const related = selected?.connections.includes(group.id) ?? false;

              return (
                <g
                  key={group.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${group.title}`}
                  aria-pressed={active}
                  onClick={() => onSelect(group.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelect(group.id);
                    }
                  }}
                  className="cursor-pointer outline-none"
                >
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={active ? 27 : 23}
                    fill="var(--background)"
                    stroke={`var(--${group.accent})`}
                    strokeWidth={active ? 3 : related ? 2 : 1.2}
                    opacity={active || related ? 1 : 0.75}
                  />
                  <text
                    x={point.x}
                    y={point.y + 4}
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="monospace"
                    fill="var(--foreground)"
                  >
                    {group.number}
                  </text>
                  <text
                    x={point.x}
                    y={point.y + 43}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight={active ? 600 : 400}
                    fill="var(--foreground)"
                  >
                    {group.shortTitle}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {toolkitGroups.map((group) => {
              const active = group.id === selectedId;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => onSelect(group.id)}
                  aria-pressed={active}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    active
                      ? "border-[var(--terracotta)] bg-[var(--background)]"
                      : "border-[var(--border)]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${accentClasses[group.accent]}`}
                  >
                    {group.number}
                  </span>
                  <span className="mt-1 block text-sm font-medium">
                    {group.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          aria-live="polite"
          className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6"
        >
          {selected ? (
            <>
              <p
                className={`font-mono text-xs ${accentClasses[selected.accent]}`}
              >
                CAPABILITY {selected.number}
              </p>
              <h2 className="mt-3 font-serif text-2xl tracking-tight">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                {selected.description}
              </p>
              <div className="my-5 h-px bg-[var(--border)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                How I apply it
              </p>
              <p className="mt-2 text-sm leading-6">{selected.practice}</p>

              {selected.tools && (
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    AI developer tools
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selected.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                  Connected capabilities
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.connections.map((id) => {
                    const related = toolkitGroups.find((group) => group.id === id)!;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => onSelect(id)}
                        className={`rounded-full border border-[var(--border)] px-3 py-1.5 text-xs transition-colors hover:border-[var(--sage)] ${accentClasses[related.accent]}`}
                      >
                        {related.shortTitle}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm leading-6 text-[var(--muted-foreground)]">
              Select a capability node to explore its engineering context and connections.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillGroup({
  group,
  selected,
  onSelect,
}: {
  group: (typeof toolkitGroups)[number];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={`rounded-2xl border bg-[var(--surface)] p-5 transition-colors sm:p-6 ${
        selected
          ? "border-[var(--terracotta)]"
          : "border-[var(--border)]"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <span className="flex items-start gap-3">
          <span
            className={`pt-1 font-mono text-xs ${accentClasses[group.accent]}`}
          >
            {group.number}
          </span>
          <span>
            <span className="block font-serif text-xl tracking-tight">
              {group.title}
            </span>
            <span className="mt-2 block text-sm leading-6 text-[var(--muted-foreground)]">
              {group.description}
            </span>
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 text-lg transition-transform ${
            selected ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs sm:text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>

      {selected && (
        <div className="mt-5 border-t border-[var(--border)] pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
            Engineering context
          </p>
          <p className="mt-2 text-sm leading-6">{group.practice}</p>
          {group.tools && (
            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
              Developer tools: {group.tools.join(", ")}.
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export default function ToolkitPage() {
  const [selectedId, setSelectedId] = useState<string | null>("backend");

  const handleSelect = (id: string) => {
    setSelectedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
      <section className="max-w-3xl pb-10 sm:pb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
          Toolkit
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
          The tools matter.
          <span className="block text-[var(--sage)]">
            The thinking matters more.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          My work spans backend engineering, distributed systems, cloud
          infrastructure, and practical AI. These are the technologies I
          use and the engineering decisions that connect them.
        </p>
      </section>

      <section aria-label="Interactive engineering capability map">
        <ToolkitMap selectedId={selectedId} onSelect={handleSelect} />
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="mb-7 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
            The technologies
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            A stack built around real systems.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
            The full stack stays visible for a quick scan. Select a group
            to explore its engineering context and related capabilities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {toolkitGroups.map((group) => (
            <SkillGroup
              key={group.id}
              group={group}
              selected={group.id === selectedId}
              onSelect={() => handleSelect(group.id)}
            />
          ))}
        </div>
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
            <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
              Tools evolve. The ability to understand a system, reason
              about trade-offs, and make thoughtful engineering decisions
              is what I want my work to reflect.
            </p>
          </div>

          <div>
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-[var(--border)] py-6 first:pt-0 last:border-b-0"
              >
                <span className="pt-1 font-mono text-xs text-[var(--sage)]">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
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
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">
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
        <p className="text-sm text-[var(--muted-foreground)]">
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
