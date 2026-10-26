
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Experience", href: "/experience" },
  { label: "Engineering Work", href: "/engineering-work" },
  { label: "Toolkit", href: "/toolkit" },
  { label: "Education & Beyond", href: "/education" },
  { label: "Contact", href: "/contact" },
];

type Theme = "light" | "dark";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function getLinkClass(href: string, mobile = false) {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    const baseClass = mobile
    ? "relative block border-b border-border py-3 text-sm transition-colors last:border-b-0"
    : "relative py-2 text-sm transition-colors";

    return [
      baseClass,
      isActive
        ? "font-medium text-terracotta after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-terracotta"
        : "text-muted hover:text-foreground",
    ].join(" ");
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme: Theme =
      savedTheme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme === "dark"
        ? "dark"
        : "light";

    const nextTheme: Theme =
      currentTheme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="Sushma Yella, home"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`shrink-0 font-serif text-xl font-semibold tracking-tight ${
            pathname === "/" ? "text-terracotta" : "text-foreground"
          }`}
        >
          SY<span className="text-terracotta">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={getLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle color theme"
            className="group flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="theme-sun size-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                strokeLinecap="round"
              />
            </svg>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="theme-moon size-5"
            >
              <path
                d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue lg:hidden"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="size-5"
              >
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="size-5"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-border px-5 py-3 sm:px-8 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={getLinkClass(link.href, true)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
