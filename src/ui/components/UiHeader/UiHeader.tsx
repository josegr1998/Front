"use client";

import { UiHeaderProps } from "./UiHeader.types";
import Link from "next/link";
import { useState } from "react";

export const UiHeader = ({ title, links }: UiHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] shadow-lg"
            >
              <svg
                className="h-6 w-6 text-[var(--primary-foreground)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text">
              {title}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="group relative px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] transition-all duration-200 hover:text-[var(--foreground)] rounded-lg hover:bg-[var(--muted)]"
              >
                <span className="relative z-10">{link.title}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/guides"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] bg-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-[var(--border)] mt-4">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block px-4 py-3 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/guides"
              className="block mx-4 mt-4 px-4 py-3 text-sm font-medium text-center text-[var(--primary-foreground)] bg-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/90 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />
    </header>
  );
};
