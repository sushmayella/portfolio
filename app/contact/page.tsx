
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sushma Yella to discuss software engineering opportunities, backend systems, distributed architectures, and practical AI.",
};

const contactLinks = [
  {
    number: "01",
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/yellasushma/",
    external: true,
  },
  {
    number: "02",
    label: "Email",
    detail: "spoorthysushma@gmail.com",
    href: "mailto:spoorthysushma@gmail.com",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-10 sm:pt-24">
      <section className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--sage)]">
          Contact
        </p>

        <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-7xl">
          Good work starts
          <br />
          with a <span className="italic text-[var(--sage)]">conversation.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          I’m always interested in thoughtful conversations about backend
          engineering, distributed systems, practical AI, and opportunities
          to build useful things with good people.
        </p>

        <p className="mt-4 text-sm text-[var(--muted)]">
          Based in the San Francisco Bay Area · Open to backend and platform
          engineering opportunities
        </p>
      </section>

      <section className="mt-16 border-t border-[var(--border)]">
        {contactLinks.map((link) => (
          <a
            key={link.number}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-[var(--border)] py-7 transition-colors hover:bg-[var(--surface)] sm:grid-cols-[3rem_1fr_auto] sm:gap-6 sm:py-9"
          >
            <span className="text-sm text-[var(--muted)]">
              {link.number}
            </span>

            <div>
              <h2 className="font-serif text-2xl text-[var(--foreground)] transition-colors group-hover:text-[var(--sage)] sm:text-3xl">
                {link.label}
              </h2>
              <p className="mt-2 break-words text-sm text-[var(--muted)]">
                {link.detail}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="text-2xl text-[var(--muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--sage)]"
            >
              ↗
            </span>
          </a>
        ))}
      </section>

      <section className="mt-20 flex flex-col justify-between gap-6 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-serif text-2xl text-[var(--foreground)]">
            Sushma Yella
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Making systems work. Making AI useful.
          </p>
        </div>

        <a
          href="/engineering-work"
          className="text-sm font-medium text-[var(--sage)] transition-opacity hover:opacity-75"
        >
          Explore my engineering work ↗
        </a>
      </section>
    </main>
  );
}
