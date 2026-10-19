
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

function SystemsIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-8 rounded-full bg-sage/10 blur-3xl" />

      <svg
        viewBox="0 0 560 480"
        role="img"
        aria-labelledby="systems-title systems-description"
        className="relative h-auto w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="systems-title">A visual map of connected systems</title>
        <desc id="systems-description">
          Abstract connected nodes represent events flowing through services,
          data, and intelligent systems.
        </desc>

        <circle
          cx="280"
          cy="240"
          r="174"
          stroke="currentColor"
          strokeOpacity=".12"
          strokeDasharray="3 8"
        />
        <circle
          cx="280"
          cy="240"
          r="124"
          stroke="currentColor"
          strokeOpacity=".12"
        />

        <path
          d="M86 134 C150 134 155 204 224 204"
          stroke="var(--sage)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M224 204 C260 204 255 112 322 112"
          stroke="var(--terracotta)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M224 204 C272 204 274 278 340 278"
          stroke="var(--blue)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M340 278 C390 278 386 358 460 358"
          stroke="var(--sage)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M322 112 C405 112 407 178 465 178"
          stroke="currentColor"
          strokeOpacity=".35"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        <rect
          x="34"
          y="104"
          width="104"
          height="60"
          rx="15"
          fill="var(--surface)"
          stroke="var(--sage)"
          strokeOpacity=".7"
        />
        <text
          x="86"
          y="129"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
          letterSpacing="1.5"
        >
          EVENT
        </text>
        <text
          x="86"
          y="146"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
        >
          Received
        </text>

        <rect
          x="172"
          y="176"
          width="104"
          height="58"
          rx="15"
          fill="var(--surface)"
          stroke="var(--sage)"
          strokeWidth="1.5"
        />
        <circle cx="191" cy="196" r="4" fill="var(--sage)" />
        <text
          x="224"
          y="199"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="12"
        >
          API
        </text>
        <text
          x="224"
          y="217"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
        >
          Processing
        </text>

        <rect
          x="280"
          y="82"
          width="104"
          height="60"
          rx="15"
          fill="var(--surface)"
          stroke="var(--terracotta)"
          strokeOpacity=".8"
        />
        <text
          x="332"
          y="106"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
          letterSpacing="1.5"
        >
          SERVICE
        </text>
        <text
          x="332"
          y="124"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
        >
          Decisions
        </text>

        <rect
          x="296"
          y="250"
          width="104"
          height="58"
          rx="15"
          fill="var(--surface)"
          stroke="var(--blue)"
          strokeOpacity=".8"
        />
        <text
          x="348"
          y="274"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
          letterSpacing="1.5"
        >
          DATA
        </text>
        <text
          x="348"
          y="291"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
        >
          Signals
        </text>

        <rect
          x="414"
          y="148"
          width="112"
          height="60"
          rx="15"
          fill="var(--surface)"
          stroke="currentColor"
          strokeOpacity=".35"
        />
        <text
          x="470"
          y="172"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
          letterSpacing="1.5"
        >
          INTELLIGENCE
        </text>
        <text
          x="470"
          y="190"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
        >
          Insights
        </text>

        <rect
          x="408"
          y="330"
          width="118"
          height="58"
          rx="15"
          fill="var(--surface)"
          stroke="var(--sage)"
          strokeOpacity=".8"
        />
        <text
          x="467"
          y="354"
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize="10"
          letterSpacing="1.5"
        >
          OUTCOME
        </text>
        <text
          x="467"
          y="372"
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize="13"
        >
          Reliable flow
        </text>

        <circle cx="145" cy="286" r="4" fill="var(--terracotta)" />
        <circle cx="414" cy="278" r="4" fill="var(--blue)" />
        <circle cx="190" cy="350" r="3" fill="var(--sage)" />
        <circle cx="392" cy="62" r="3" fill="var(--terracotta)" />
        <circle cx="125" cy="370" r="5" fill="var(--blue)" />
      </svg>

      <p className="relative -mt-1 text-center font-mono text-[10px] tracking-[0.2em] text-muted sm:text-xs">
        EVENTS → SYSTEMS → OUTCOMES
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="relative z-10">
          <p className="mb-4 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
            Sushma Yella
          </p>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-muted uppercase">
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

            <span aria-hidden="true" className="text-terracotta">✳</span>

            <span>Open to backend and platform engineering opportunities</span>
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
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
            <span aria-hidden="true" className="text-terracotta">✳</span>
            <span>Distributed systems</span>
            <span aria-hidden="true" className="text-terracotta">✳</span>
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
              <article
                key={principle.number}
                className="border-t border-border pt-5"
              >
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
