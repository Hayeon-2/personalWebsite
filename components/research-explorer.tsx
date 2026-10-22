"use client";

import { useState } from "react";
import type { PortfolioEntry } from "@/data/site";
import { EntryDetail } from "@/components/entry-detail";

export function ResearchExplorer({ items }: { items: PortfolioEntry[] }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const selected = items.find((item) => item.id === selectedId) ?? items[0];

  if (!selected) return null;

  return (
    <div className="research-explorer">
      <div className="research-options" role="group" aria-label="Select a research experience">
        <p className="eyebrow selector-label">The laboratories</p>
        {items.map((item, index) => {
          const active = item.id === selected.id;
          return (
            <button
              key={item.id}
              type="button"
              className="research-option"
              aria-pressed={active}
              aria-controls="research-detail"
              onClick={() => setSelectedId(item.id)}
            >
              <span className="option-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="option-copy">
                <span className="option-title">{item.title}</span>
                <span className="option-subtitle">{item.metadata?.find((detail) => detail.label === "PI")?.value}</span>
              </span>
              <span className="option-arrow" aria-hidden="true">↗</span>
            </button>
          );
        })}
        <a href="#research-detail" className="selector-jump text-link">
          Read selected experience <span aria-hidden="true">↓</span>
        </a>
      </div>
      <section id="research-detail" className="research-panel" aria-labelledby="research-detail-title" tabIndex={-1}>
        <p className="eyebrow">Research experience</p>
        <h2 id="research-detail-title" className="detail-title">{selected.title}</h2>
        {selected.subtitle && <p className="detail-subtitle">{selected.subtitle}</p>}
        <EntryDetail entry={selected} />
      </section>
      <p className="sr-only" role="status" aria-atomic="true">Selected: {selected.title}</p>
    </div>
  );
}
