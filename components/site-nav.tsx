"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation, pageCopy, profile } from "@/data/site";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <div className="site-container nav-inner">
        <Link href="/" className="site-brand" onClick={() => setOpen(false)}>
          {profile.name}<span className="brand-dot" aria-hidden="true">.</span>
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" width="18" height="18" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="m5 5 10 10M5 15 15 5" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
          </svg>
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={"primary-nav" + (open ? " is-open" : "")}>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                {item.href === pageCopy.cv.file ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
