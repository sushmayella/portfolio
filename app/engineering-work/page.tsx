
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Work",
  description:
    "Explore software engineering projects involving payment processing, event-driven architectures, distributed systems, and real-time fraud analysis.",
};


const palette = {
  sage: "#71836D",
  terracotta: "#B96F58",
  blue: "#607CA6",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
      {children}
    </p>
  );
}

function PaymentVisual() {
  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="Conceptual payment event flow through transaction processing and fraud analysis"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="payment-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity=".12" />
        </pattern>
      </defs>
      <rect width="560" height="300" rx="18" fill="url(#payment-grid)" />
      <text x="24" y="28" fill="currentColor" opacity=".6" fontSize="11" letterSpacing="2">
        CONCEPTUAL SYSTEM FLOW
      </text>
      <g stroke="currentColor" strokeWidth="1.5" opacity=".5" fill="none">
        <path d="M130 139 H166" />
        <path d="M278 139 H314" />
        <path d="M426 139 H462" />
        <path d="M157 134 L166 139 L157 144" />
        <path d="M305 134 L314 139 L305 144" />
        <path d="M453 134 L462 139 L453 144" />
      </g>
      <g>
        <rect x="20" y="103" width="110" height="72" rx="12" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="75" cy="123" r="5" fill={palette.blue} />
        <text x="75" y="145" fill="var(--foreground)" fontSize="12" textAnchor="middle" fontWeight="600">Payment</text>
        <text x="75" y="160" fill="var(--muted)" fontSize="10" textAnchor="middle">event</text>
      </g>
      <g>
        <rect x="166" y="103" width="112" height="72" rx="12" fill="var(--surface)" stroke={palette.blue} />
        <rect x="180" y="115" width="15" height="15" rx="4" fill={palette.blue} opacity=".2" />
        <path d="M184 123 H191 M187.5 119 V127" stroke={palette.blue} strokeWidth="1.5" />
        <text x="222" y="145" fill="var(--foreground)" fontSize="12" textAnchor="middle" fontWeight="600">Processing</text>
        <text x="222" y="160" fill="var(--muted)" fontSize="10" textAnchor="middle">service</text>
      </g>
      <g>
        <rect x="314" y="103" width="112" height="72" rx="12" fill="var(--surface)" stroke={palette.terracotta} />
        <circle cx="370" cy="123" r="8" fill={palette.terracotta} opacity=".2" />
        <path d="M366 123 L369 126 L375 119" stroke={palette.terracotta} fill="none" strokeWidth="1.5" />
        <text x="370" y="145" fill="var(--foreground)" fontSize="12" textAnchor="middle" fontWeight="600">Fraud</text>
        <text x="370" y="160" fill="var(--muted)" fontSize="10" textAnchor="middle">analysis</text>
      </g>
      <g>
        <rect x="462" y="103" width="78" height="72" rx="12" fill="var(--sage)" fillOpacity=".13" stroke="var(--sage)" />
        <path d="M485 122 L490 127 L500 116" stroke="var(--sage)" fill="none" strokeWidth="2" />
        <text x="501" y="145" fill="var(--foreground)" fontSize="11" textAnchor="middle" fontWeight="600">Outcome</text>
        <text x="501" y="160" fill="var(--muted)" fontSize="10" textAnchor="middle">decision</text>
      </g>
      <path d="M370 175 V211 H222 V175" fill="none" stroke={palette.terracotta} strokeDasharray="4 4" strokeWidth="1.5" opacity=".7" />
      <rect x="175" y="210" width="194" height="36" rx="9" fill="var(--surface)" stroke="var(--border)" />
      <text x="272" y="232" textAnchor="middle" fontSize="11" fill="var(--foreground)">Event-driven coordination</text>
      <text x="24" y="278" fill="currentColor" opacity=".55" fontSize="10">Illustrative only · Not a proprietary architecture</text>
    </svg>
  );
}

function ModernizationVisual() {
  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="Conceptual transition from a legacy payment application to modular services"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="modern-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity=".12" />
        </pattern>
      </defs>
      <rect width="560" height="300" rx="18" fill="url(#modern-grid)" />
      <text x="24" y="28" fill="currentColor" opacity=".6" fontSize="11" letterSpacing="2">
        MODERNIZATION CONCEPT
      </text>
      <text x="36" y="65" fill="var(--muted)" fontSize="11" fontWeight="600">BEFORE</text>
      <text x="354" y="65" fill="var(--muted)" fontSize="11" fontWeight="600">DIRECTION</text>
      <rect x="28" y="82" width="190" height="156" rx="14" fill="var(--surface)" stroke="var(--border)" />
      <rect x="47" y="102" width="152" height="116" rx="9" fill={palette.terracotta} fillOpacity=".12" stroke={palette.terracotta} strokeOpacity=".7" />
      <text x="123" y="127" fill="var(--foreground)" textAnchor="middle" fontSize="12" fontWeight="600">Legacy application</text>
      
        {[0, 1, 2].map((i) => (
        <rect
            key={i}
            x="64"
            y={143 + i * 22}
            width="118"
            height="14"
            rx="4"
            fill={palette.terracotta}
            fillOpacity={0.18 + i * 0.08}
        />
        ))}

      <path d="M232 160 H303 M293 150 L303 160 L293 170" fill="none" stroke="var(--sage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <rect x="324" y="82" width="208" height="156" rx="14" fill="var(--surface)" stroke="var(--border)" />
        <rect x="344" y="101" width="168" height="36" rx="8" fill="var(--sage)" fillOpacity=".16" stroke="var(--sage)" />
        <text x="428" y="123" fill="var(--foreground)" textAnchor="middle" fontSize="11" fontWeight="600">Payment API</text>
        <path d="M428 137 V153 M428 153 H385 V164 M428 153 H471 V164" fill="none" stroke="var(--sage)" strokeWidth="1.5" />
        <rect x="349" y="164" width="74" height="45" rx="7" fill={palette.blue} fillOpacity=".13" stroke={palette.blue} />
        <rect x="434" y="164" width="74" height="45" rx="7" fill={palette.terracotta} fillOpacity=".12" stroke={palette.terracotta} />
        <text x="386" y="183" textAnchor="middle" fill="var(--foreground)" fontSize="10">Service</text>
        <text x="386" y="195" textAnchor="middle" fill="var(--foreground)" fontSize="10">A</text>
        <text x="471" y="183" textAnchor="middle" fill="var(--foreground)" fontSize="10">Service</text>
        <text x="471" y="195" textAnchor="middle" fill="var(--foreground)" fontSize="10">B</text>
      </g>
      <text x="280" y="272" textAnchor="middle" fill="currentColor" opacity=".6" fontSize="10">
        Conceptual illustration · Not an exact system diagram
      </text>
    </svg>
  );
}

function EventIntelligenceVisual() {
  const nodes = [
    { x: 18, y: 91, w: 105, label: "REST API", sub: "Submit event", color: palette.blue },
    { x: 151, y: 91, w: 112, label: "PostgreSQL", sub: "Event + outbox", color: palette.sage },
    { x: 291, y: 91, w: 104, label: "Kafka", sub: "event-created", color: palette.terracotta },
    { x: 423, y: 91, w: 119, label: "Consumer", sub: "Retry configured", color: palette.blue },
  ];

  return (
    <svg
      viewBox="0 0 560 300"
      role="img"
      aria-label="Implemented Event Intelligence flow: REST API, PostgreSQL event and outbox, Kafka publisher, consumer, analysis result, and result endpoint"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="event-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity=".12" />
        </pattern>
      </defs>
      <rect width="560" height="300" rx="18" fill="url(#event-grid)" />
      <text x="24" y="28" fill="currentColor" opacity=".6" fontSize="11" letterSpacing="2">
        EVENT INTELLIGENCE · IMPLEMENTED FLOW
      </text>
      {nodes.map((node, i) => (
        <g key={node.label}>
          <rect x={node.x} y={node.y} width={node.w} height="58" rx="9" fill="var(--surface)" stroke={node.color} strokeOpacity=".8" />
          <text x={node.x + node.w / 2} y={node.y + 23} textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600">{node.label}</text>
          <text x={node.x + node.w / 2} y={node.y + 40} textAnchor="middle" fill="var(--muted)" fontSize="9.5">{node.sub}</text>
          {i < nodes.length - 1 && (
            <path d={`M${node.x + node.w} 120 H${nodes[i + 1].x - 6} M${nodes[i + 1].x - 13} 114 L${nodes[i + 1].x - 6} 120 L${nodes[i + 1].x - 13} 126`} fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".55" />
          )}
        </g>
      ))}
      <path d="M481 149 V184 H350 V202" fill="none" stroke={palette.sage} strokeWidth="1.5" />
      <path d="M344 195 L350 202 L356 195" fill="none" stroke={palette.sage} strokeWidth="1.5" />
      <rect x="258" y="202" width="184" height="43" rx="9" fill="var(--sage)" fillOpacity=".14" stroke="var(--sage)" />
      <text x="350" y="220" textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600">Risk classification</text>
      <text x="350" y="234" textAnchor="middle" fill="var(--muted)" fontSize="9.5">Save analysis result</text>
      <path d="M258 223 H202 V178 H208" fill="none" stroke={palette.blue} strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="24" y="158" width="184" height="55" rx="9" fill="var(--surface)" stroke={palette.blue} strokeOpacity=".8" />
      <text x="116" y="180" textAnchor="middle" fill="var(--foreground)" fontSize="11" fontWeight="600">Result endpoint</text>
      <text x="116" y="196" textAnchor="middle" fill="var(--muted)" fontSize="10">PROCESSING → result</text>
      <text x="24" y="278" fill="currentColor" opacity=".55" fontSize="10">Locally verified with PostgreSQL and Kafka</text>
    </svg>
  );
}

function CaseStudy({
  number,
  title,
  subtitle,
  children,
  visual,
  tags,
  reverse = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  visual: React.ReactNode;
  tags: string[];
  reverse?: boolean;
}) {
  return (
    <article className="grid gap-8 border-t border-[var(--border)] py-10 md:grid-cols-2 md:items-center md:gap-12 md:py-14">
      <div className={reverse ? "md:order-2" : ""}>
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-[var(--sage)]">{number}</span>
          <span className="h-px w-10 bg-[var(--border)]" />
          <span className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">{subtitle}</span>
        </div>
        <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
          {children}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={`overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-5 ${reverse ? "md:order-1" : ""}`}>
        {visual}
      </div>
    </article>
  );
}

export default function EngineeringWorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
      <section className="max-w-3xl pb-12 sm:pb-16">
        <SectionLabel>Engineering work</SectionLabel>
        <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
          Systems built to solve
          <span className="block text-[var(--sage)]">real problems.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          A closer look at the engineering problems I have worked on, the
          systems and technologies involved, and the decisions that matter
          beyond writing code.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Payments</span>
          <span>Distributed systems</span>
          <span>Event-driven architecture</span>
        </div>
      </section>

      <CaseStudy
        number="01"
        title="Payment systems & fraud processing"
        subtitle="Visa · Professional experience"
        visual={<PaymentVisual />}
        tags={["Java 17", "Spring Boot", "Kafka", "AWS", "Kubernetes"]}
      >
        <p>
          Payment systems need to process transaction events reliably while
          supporting downstream fraud-related workflows. My work involved
          backend payment services and event-driven processing.
        </p>
        <h3 className="font-semibold text-[var(--foreground)]">My contributions</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Worked with Java and Spring Boot backend services.</li>
          <li>Contributed to Kafka-based transaction and fraud workflows.</li>
          <li>Worked with containerized services and cloud infrastructure using Docker, Kubernetes, and AWS.</li>
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] p-4">
            <p className="font-serif text-3xl text-[var(--sage)]">+40%</p>
            <p className="mt-1 text-xs leading-5">Fraud-processing throughput</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-4">
            <p className="font-serif text-3xl text-[var(--terracotta)]">−30%</p>
            <p className="mt-1 text-xs leading-5">API latency</p>
          </div>
        </div>
        <p className="text-xs">
          These figures reflect reported project improvements, not a claim of
          sole ownership. Anomaly-detection accuracy also improved by approximately 15–20%.
        </p>
      </CaseStudy>

      <CaseStudy
        number="02"
        title="Modernizing payment workflows"
        subtitle="Walmart · Professional experience"
        visual={<ModernizationVisual />}
        tags={["Java", "Spring Boot", "REST APIs", "Kafka", "AWS", "Go"]}
        reverse
      >
        <p>
          Payment modernization involves evolving legacy functionality toward
          more modular services while keeping integrations and existing
          workflows working together.
        </p>
        <h3 className="font-semibold text-[var(--foreground)]">My contributions</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contributed to payment modernization using Java, Spring Boot, and REST APIs.</li>
          <li>Worked with modular service patterns and event-driven integrations.</li>
          <li>Used Kafka, AWS, and Go in payment-related workflows.</li>
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[var(--border)] p-4">
            <p className="font-serif text-3xl text-[var(--sage)]">−30%</p>
            <p className="mt-1 text-xs leading-5">Deployment time</p>
          </div>
          <div className="rounded-xl border border-[var(--border)] p-4">
            <p className="font-serif text-3xl text-[var(--terracotta)]">+25%</p>
            <p className="mt-1 text-xs leading-5">Evaluation response performance</p>
          </div>
        </div>
        <p className="text-xs">
          The illustration represents the modernization direction, not the
          exact internal architecture of the system.
        </p>
      </CaseStudy>

      <CaseStudy
        number="03"
        title="Event Intelligence"
        subtitle="Personal project · In progress"
        visual={<EventIntelligenceVisual />}
        tags={["Java 17", "Spring Boot", "PostgreSQL", "Kafka", "Transactional outbox"]}
      >
        <p>
          I built an event-processing application that accepts an event,
          persists it, processes it asynchronously, and exposes an endpoint
          for retrieving its analysis result.
        </p>
        <h3 className="font-semibold text-[var(--foreground)]">How it works</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>A REST endpoint accepts an event and saves it with an outbox record in a database transaction.</li>
          <li>A scheduled publisher sends pending outbox events to Kafka and marks successful publications.</li>
          <li>A Kafka consumer processes events with retry configuration and runs rule-based risk classification.</li>
          <li>The result endpoint returns a processing status until an analysis result is available.</li>
        </ul>
        <div className="mt-5 rounded-xl border border-[var(--border)] p-4">
          <p className="font-semibold text-[var(--foreground)]">An important design decision</p>
          <p className="mt-2 text-sm leading-6">
            The transactional outbox records the event and the intent to publish
            it in the same database transaction. This reduces the risk of
            saving an event without recording its publication intent. The
            publisher and consumer still need to account for retries and
            possible duplicate delivery.
          </p>
        </div>
        <p className="text-xs">
          Verified locally with PostgreSQL and Kafka. This is not a production deployment.
        </p>
      </CaseStudy>

      <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10">
        <SectionLabel>What connects these projects</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
          Reliable systems are built through thoughtful trade-offs.
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-semibold">Reliability</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Think about failure paths, retries, and how systems recover.
            </p>
          </div>
          <div>
            <p className="font-semibold">Clear boundaries</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Separate responsibilities and make interactions between components explicit.
            </p>
          </div>
          <div>
            <p className="font-semibold">Useful outcomes</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Connect technical choices to measurable improvements and user needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center sm:py-20">
        <p className="text-sm text-[var(--muted)]">
          Interested in building reliable backend and platform systems together?
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 border-b border-[var(--sage)] pb-1 font-serif text-xl transition-colors hover:text-[var(--sage)]"
        >
          Let&apos;s connect <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
