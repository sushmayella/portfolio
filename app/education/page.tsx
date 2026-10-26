
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education & Beyond",
  description:
    "Explore Sushma Yella's educational background in management science and computer science, combining technical foundations with business and software engineering.",
};


const education = [
  {
    period: "Current",
    degree: "Master of Science",
    major: "Management Science",
    institution: "Golden Gate University",
    location: "San Francisco, California, United States",
    description:
      "Exploring the intersection of technology, management, and practical business applications while continuing to grow as a software engineer.",
    status: "In progress",
  },
  {
    period: "2021 — 2022",
    degree: "Master of Science",
    major: "Computer Science",
    institution: "Texas A&M University",
    location: "Corpus Christi, Texas, United States",
    description:
      "Graduate-level study in computer science that strengthened my foundation for building and understanding software systems.",
    status: "Completed",
  },
  {
    period: "2016 — 2020",
    degree: "Bachelor of Technology",
    major: "Computer Science Engineering",
    minor: "Website Design",
    institution: "Amity University",
    location: "Jaipur, Rajasthan, India",
    description:
      "Built the academic foundation that led me toward software development and backend engineering.",
    status: "Completed",
  },
];

const teachingAreas = [
  {
    number: "01",
    title: "Machine Learning",
    description:
      "Supporting student learning around data preparation, feature engineering, and model evaluation.",
  },
  {
    number: "02",
    title: "Generative AI",
    description:
      "Helping students explore prompt engineering, retrieval-augmented generation, and practical AI applications.",
  },
  {
    number: "03",
    title: "Agentic AI",
    description:
      "Supporting coursework and exploration of AI agents, tool use, and workflows that connect models with applications.",
  },
];

const interests = [
  {
    title: "Systems that work in the real world",
    description:
      "I enjoy understanding how APIs, databases, messaging systems, and services fit together, especially when reliability matters.",
  },
  {
    title: "AI with a practical purpose",
    description:
      "I'm interested in moving beyond impressive demos to AI features that solve real problems and can be evaluated thoughtfully.",
  },
  {
    title: "Learning by building",
    description:
      "Working through an implementation, testing assumptions, and understanding trade-offs helps me turn concepts into engineering judgment.",
  },
];

export default function EducationPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <section className="max-w-3xl pb-14 sm:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
          Education & beyond
        </p>

        <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
          Engineering is a practice.
          <span className="block text-[var(--sage)]">
            Learning never stops.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          My path combines computer science, hands-on software engineering,
          continued learning, and opportunities to help others understand
          emerging technologies.
        </p>
      </section>

      <section className="grid gap-10 border-t border-[var(--border)] pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pt-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
            01 / Education
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Foundations and new perspectives.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            A computer science foundation, complemented by continued
            graduate study and a growing interest in the relationship
            between technology and business.
          </p>
        </div>

        <div className="relative space-y-0 border-l border-[var(--border)] pl-6 sm:pl-8">
          {education.map((item, index) => (
            <article
              key={item.institution}
              className={`relative pb-10 last:pb-0 ${
                index === 0 ? "" : ""
              }`}
            >
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--background)] ${
                  index === 0
                    ? "bg-[var(--sage)]"
                    : "bg-[var(--border)]"
                } sm:-left-[39px]`}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-[var(--sage)]">
                  {item.period}
                </span>
                <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  {item.status}
                </span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl">
                {item.degree}
              </h3>

              {item.major && (
              <p className="mt-1 text-sm text-[var(--sage)]">
                {item.major}
              </p>
              )}

             {item.minor && (
             <p className="mt-1 text-xs text-[var(--muted)]">
                Minor: {item.minor}
             </p>
             )}

              <p className="mt-2 text-sm font-medium">
                {item.institution}
              </p>

              <p className="mt-1 text-xs text-[var(--muted)]">
                {item.location}
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:mt-24 sm:p-10">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
              02 / Teaching & mentorship
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Making complex ideas easier to understand.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
              As a Teaching Assistant at Golden Gate University, I support
              graduate students as they explore machine learning and
              emerging AI technologies.
            </p>

            <div className="mt-6 border-l-2 border-[var(--sage)] pl-4">
              <p className="text-lg font-semibold text-[var(--foreground)]">
                Teaching Assistant
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                Golden Gate University · June 2026 — Present
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {teachingAreas.map((area) => (
              <article
                key={area.number}
                className="grid grid-cols-[40px_1fr] gap-4 border-b border-[var(--border)] py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span className="pt-1 font-mono text-xs text-[var(--sage)]">
                  {area.number}
                </span>

                <div>
                  <h3 className="font-serif text-xl">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}

            <div className="mt-6 rounded-xl border border-[var(--border)] p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                Also involved in
              </p>
              <p className="mt-3 text-sm leading-6">
                Data pipelines, faculty course materials, AI business
                applications, and exploring how AI capabilities can be
                evaluated and integrated into useful applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 border-t border-[var(--border)] pt-12 sm:mt-24 sm:pt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
            03 / Beyond the résumé
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            What keeps me curious.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            The technologies may change from project to project, but the
            questions I enjoy exploring stay remarkably consistent.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {interests.map((interest, index) => (
            <article
              key={interest.title}
              className="rounded-2xl border border-[var(--border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--surface)]"
            >
              <span className="font-mono text-xs text-[var(--sage)]">
                0{index + 1}
              </span>

              <h3 className="mt-5 font-serif text-xl leading-snug">
                {interest.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-[var(--sage)] px-6 py-10 text-center text-white sm:mt-20 sm:px-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
          Looking ahead
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
          Building thoughtful software, one system at a time.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
          I&apos;m interested in backend and platform engineering opportunities
          where reliability, sound design, and practical problem-solving matter.
        </p>

        <a
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-sm transition-colors hover:border-white"
        >
          Get in touch
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
