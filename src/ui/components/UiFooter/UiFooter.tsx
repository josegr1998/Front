'use client';

import { UiFooterProps } from './UiFooter.types';
import Link from 'next/link';

export const UiFooter = ({ copyright, title, links }: UiFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--card)] border-t border-[var(--border)]">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] shadow-lg">
                <svg
                  className="h-7 w-7 text-[var(--primary-foreground)]"
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
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {title}
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-md">
              Empowering developers with comprehensive guides and tutorials.
              Build better, learn faster, and create amazing things.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="group p-2 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5 text-[var(--muted-foreground)] group-hover:text-[var(--primary-foreground)] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="group p-2 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <svg
                  className="h-5 w-5 text-[var(--muted-foreground)] group-hover:text-[var(--primary-foreground)] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="group p-2 rounded-lg bg-[var(--muted)] hover:bg-[var(--primary)] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5 text-[var(--muted-foreground)] group-hover:text-[var(--primary-foreground)] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 text-sm group"
                  >
                    <span className="relative">
                      {link.title}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-200 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>hello@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-[var(--foreground)] mb-3">
                Stay Updated
              </h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-[var(--muted)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                />
                <button className="px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] bg-[var(--primary)] rounded-lg hover:bg-[var(--primary)]/90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--muted-foreground)]">
              © {currentYear} {copyright}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-[var(--muted-foreground)]">
              <Link
                href="/privacy"
                className="hover:text-[var(--foreground)] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[var(--foreground)] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-[var(--foreground)] transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
