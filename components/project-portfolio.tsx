"use client";

import { useRef, useState } from "react";
import { projectPresentation, type PortfolioEntry } from "@/data/site";
import { EntryDetail } from "@/components/entry-detail";

export function ProjectPortfolio({ items }: { items: PortfolioEntry[] }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const detailPanel = useRef<HTMLDivElement>(null);
  const selected = items.find((item) => item.id === selectedId) ?? items[0];

  if (!selected) return null;

  function selectProject(id: string) {
    setSelectedId(id);
    requestAnimationFrame(() => {
      detailPanel.current?.focus({ preventScroll: true });
      detailPanel.current?.scrollIntoView({ block: "start", behavior: "auto" });
    });
  }

  return (
    <>
      <div className="portfolio-grid" role="group" aria-label="Select a project">
        {items.map((project, index) => {
          const cover = projectPresentation[project.id];
          const active = project.id === selected.id;
          return (
            <button
              key={project.id}
              type="button"
              className="project-card"
              aria-pressed={active}
              aria-controls="project-detail"
              aria-labelledby={"project-card-title-" + project.id}
              aria-describedby={"project-card-summary-" + project.id}
              onClick={() => selectProject(project.id)}
            >
              <span className={"project-cover cover-" + (cover?.tone ?? "lavender")} aria-hidden="true">
                <span className="cover-topline">
                  <span>Engineering studies</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </span>
                <span className="cover-title">
                  {(cover?.coverLines ?? [project.title]).map((line) => <span key={line}>{line}</span>)}
                </span>
                <span className="cover-note">{cover?.coverNote ?? project.subtitle}</span>
              </span>
              <span className="project-card-copy">
                <span className="eyebrow project-category">{cover?.category ?? project.subtitle}</span>
                <span id={"project-card-title-" + project.id} className="project-card-title">{project.title}</span>
                <span id={"project-card-summary-" + project.id} className="project-card-summary">{cover?.summary ?? project.description}</span>
                <span className="card-action" aria-hidden="true">
                  {active ? "Selected project" : "Explore project"}
                  <span>{active ? "↓" : "↗"}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div
        ref={detailPanel}
        id="project-detail"
        role="region"
        aria-labelledby="project-detail-title"
        tabIndex={-1}
        className="project-detail"
      >
        <div className="project-detail-heading">
          <p className="eyebrow">In detail / {String(items.indexOf(selected) + 1).padStart(2, "0")}</p>
          <h2 id="project-detail-title" className="detail-title">{selected.title}</h2>
          {selected.subtitle && <p className="detail-subtitle">{selected.subtitle}</p>}
        </div>
        <EntryDetail entry={selected} />
      </div>
    </>
  );
}
