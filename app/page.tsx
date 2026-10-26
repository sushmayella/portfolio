
import SystemsIllustration from "@/components/home/systems-illustration";
import Reveal from "@/components/motion/reveal";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Build for reliability",
    description:
      "I care about what happens beyond the happy path: failure handling, clear interfaces, and systems that behave predictably under pressure.",
    accent: "text-sage",
  },
  {
    number: "02",
    title: "Connect the pieces",
    description:
      "APIs, services, data, and infrastructure are most interesting to me when they come together to solve a meaningful problem.",
    accent: "text-terracotta",
  },
  {
    number: "03",
    title: "Make AI practical",
    description:
      "I enjoy exploring how intelligent capabilities can become useful applications through thoughtful engineering and real-world workflows.",
    accent: "text-blue",
  },
];

export default function Home() {
  return (
   <main className="relative isolate flex-1 overflow-hidden">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-28">
        <div className="relative z-10">
          <p className="mb-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            Sushma Yella
          </p>

          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-muteduppercase">
            <span className="h-px w-8 bg-terracotta" />
            Backend · Cloud · Applied AI
          </p>

          <h1 className="max-w-2xl text-2xl leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Making systems work.
            <span className="mt-2 block text-sage">
              Making AI useful.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I&apos;m a backend-leaning full-stack engineer who enjoys building
            reliable systems, connecting intelligent capabilities to real
            applications, and figuring out how all the pieces fit together.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground">
            <span className="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="size-4"
              >
                <path
                  d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              San Francisco Bay Area
            </span>

            <span aria-hidden="true" className="text-terracotta">
              ✳
            </span>

            <span>
              Open to backend and platform engineering opportunities
            </span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/engineering-work"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full borderborder-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-5">
            <a
              href="https://www.linkedin.com/in/yellasushma/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted">
            <span>Backend engineering</span>
            <span aria-hidden="true" className="text-terracotta">
              ✳
            </span>
            <span>Distributed systems</span>
            <span aria-hidden="true" className="text-terracotta">
              ✳
            </span>
            <span>Practical AI</span>
          </div>
        </div>

        <div className="min-w-0 py-2 sm:py-6 lg:py-0">
          <SystemsIllustration />
        </div>
      </section>

      <section className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] text-terracotta uppercase">
              My engineering North Star
            </p>

            <h2 className="text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Build things that hold up, work together, and make a difference.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-7">
            {principles.map((principle) => (
              <Reveal
                key={principle.number}
                delay={Number(principle.number) * 0.08}
              >
                <article className="border-t border-border pt-5">
                  <p className={`font-mono text-sm ${principle.accent}`}>
                    {principle.number}
                  </p>

                  <h3 className="mt-4 text-2xl text-foreground">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {principle.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
            What&apos;s next
          </p>

          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Let&apos;s build something meaningful.
          </h2>
        </div>

        <Link
          href="/contact"
          className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
        >
          Start a conversation
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
