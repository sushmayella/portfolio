
const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Visa Inc.",
    location: "Foster City, California",
    period: "May 2025 – Dec 2025",
    type: "Contract",
    summary:
      "Built and improved backend payment systems, cloud-native microservices, and event-driven transaction processing workflows.",
    highlights: [
      "Developed backend services using Java 17 and Spring Boot for payment-related systems.",
      "Worked with Kafka-based event processing for transaction and fraud-related workflows.",
      "Contributed to containerized services and deployment infrastructure using Docker, Kubernetes, and AWS.",
      "Contributed to fraud-processing improvements that increased throughput by 40%.",
      "Helped reduce API latency by 30% and improve anomaly-detection accuracy by approximately 15–20%.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Kafka",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Walmart",
    location: "Sunnyvale, California",
    period: "Aug 2023 – Dec 2024",
    type: "Contract",
    summary:
      "Contributed to payment modernization efforts, moving legacy functionality toward modular services and event-driven architectures.",
    highlights: [
      "Developed backend services and REST APIs using Java and Spring Boot.",
      "Contributed to modernizing legacy payment functionality into modular services.",
      "Worked with Kafka, AWS services, and Go-based workflows for backend integrations and event-driven processing.",
      "Supported engineering improvements associated with 30% faster deployments and 25% better evaluation response performance.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Kafka",
      "AWS",
      "Go",
    ],
  },
  {
    role: "Software Engineer",
    company: "Discover Financial Services",
    location: "Riverwoods, Illinois",
    period: "Jan 2023 – Jul 2023",
    type: "Contract",
    summary:
      "Developed web application features and supported search functionality, automated testing, and software delivery workflows.",
    highlights: [
      "Built frontend application features using Angular and TypeScript.",
      "Worked with Elasticsearch for search-related functionality and application integration.",
      "Contributed to automated testing and delivery workflows using Docker, AWS, Jenkins, Jasmine, and Karma.",
      "Helped achieve 80% frontend test coverage and reduce the release cycle by 40%.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Elasticsearch",
      "AWS",
      "Jenkins",
      "Jasmine",
      "Karma",
    ],
  },
  {
    role: "Java Full Stack Developer",
    company: "SR Edu Technologies",
    location: "Hyderabad, India",
    period: "Aug 2019 – Aug 2021",
    type: "Full-time",
    summary:
      "Developed Java-based application services and REST APIs, working across authentication, persistence, and database integration.",
    highlights: [
      "Built REST APIs and application services using Java and Spring Boot.",
      "Implemented authentication and persistence using Spring Security, Hibernate, and JPA.",
      "Worked on database integration, query optimization, and application testing.",
      "Contributed to database query optimizations that improved performance by 20%.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Security",
      "Hibernate",
      "JPA",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <section className="max-w-3xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-sage">
          Experience
        </p>

        <h1 className="text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Building systems, learning continuously.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          My engineering experience spans payment systems, backend services,
          web applications, and cloud infrastructure. Across these roles,
          I’ve focused on building reliable software, improving performance,
          and connecting the pieces that make systems work.
        </p>
      </section>

      <section className="mt-16 sm:mt-20" aria-label="Work history">
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4">
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Where I’ve worked
          </h2>
          <span className="text-sm text-muted">2019 – 2025</span>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-sage">
                    {experience.company}
                  </p>
                  <h3 className="mt-2 text-2xl leading-snug text-foreground sm:text-3xl">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {experience.location}
                  </p>
                </div>

                <div className="shrink-0 sm:text-right">
                  <p className="text-sm font-medium text-foreground">
                    {experience.period}
                  </p>
                  <p className="mt-1 text-sm text-muted">{experience.type}</p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-muted">
                {experience.summary}
              </p>

              <ul className="mt-5 space-y-3">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-foreground sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12">
        <p className="text-sm leading-7 text-muted">
          My interests center on backend engineering, distributed systems,
          platform infrastructure, and practical AI. I enjoy understanding
          how systems work end to end and making them more reliable,
          performant, and useful.
        </p>
      </section>
    </main>
  );
}
