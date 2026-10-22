import { Fragment } from "react";
import type { ContentSection, PortfolioEntry } from "@/data/site";

type Entry = ContentSection["entries"][number];

function AuthorList({ authors }: { authors: string }) {
  return (
    <>
      {authors.split(/(Yun, H\.|Hayeon Yun)/).map((part, index) => (
        <Fragment key={index}>
          {part === "Yun, H." || part === "Hayeon Yun" ? <strong>{part}</strong> : part}
        </Fragment>
      ))}
    </>
  );
}

function EntryContent({ entry }: { entry: Entry }) {
  return (
    <>
      <h3>{entry.title}</h3>
      {entry.authors && <p className="entry-description citation-authors"><AuthorList authors={entry.authors} /></p>}
      {entry.description && <p className="entry-description">{entry.description}</p>}
      {entry.details && (
        <div className="entry-meta">
          {entry.details.map((detail) => <p key={detail}>{detail}</p>)}
        </div>
      )}
      {entry.status && <p className="entry-status">{entry.status}</p>}
      {entry.items && (
        <ul className="detail-list">
          {entry.items.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}
    </>
  );
}

function FeaturedProject({ project }: { project: PortfolioEntry }) {
  const projectType = project.metadata?.find((detail) => detail.label === "Type")?.value;
  const dates = project.metadata?.find((detail) => detail.label === "Dates")?.value;
  const partner = project.metadata?.find((detail) => detail.label === "Industry Partner")?.value;
  const visibleSections = project.sections?.filter((section) => section.title !== "Validation Results");

  return (
    <div className="experience-timeline">
      <section className="timeline-section featured-engineering-project" aria-labelledby="featured-engineering-project-heading">
        <h2 id="featured-engineering-project-heading" className="eyebrow">Featured Engineering Project</h2>
        <article className="timeline-entry">
          <h3>{project.title}</h3>
          {project.subtitle && <p className="entry-description">{project.subtitle}</p>}
          <div className="entry-meta">
            {projectType && <p>{projectType}</p>}
            {dates && <p>{dates}</p>}
          </div>
          {partner && <p className="featured-project-partner">Industry Partner: {partner}</p>}
          {project.description && <p className="detail-overview">{project.description}</p>}
          {project.videoId && (
            <figure className="project-video">
              <iframe
                src={"https://www.youtube-nocookie.com/embed/" + project.videoId}
                title={project.title + " — project video"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <figcaption>
                <a className="text-link" href={"https://www.youtube.com/watch?v=" + project.videoId} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          )}
          {visibleSections?.map((section) => (
            <section key={section.title} className="detail-section">
              <h4>{section.title}</h4>
              {section.body && <p>{section.body}</p>}
              {section.items && (
                <ul className="detail-list">
                  {section.items.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>
      </section>
    </div>
  );
}

export function ContentSections({
  sections,
  variant,
  featuredProject,
}: {
  sections: ContentSection[];
  variant: "citations" | "experience";
  featuredProject?: PortfolioEntry;
}) {
  const populated = sections.filter((section) => section.entries.length > 0);

  if (variant === "experience") {
    const timeline = populated.filter((section) => section.id === "industry" || section.id === "teaching");
    const groups = populated.filter((section) => section.id !== "industry" && section.id !== "teaching");
    return (
      <>
        <div className="experience-sequence">
          {timeline.map((section) => (
            <Fragment key={section.id}>
              <div className="experience-timeline">
                <section className="timeline-section" aria-labelledby={section.id}>
                  <h2 id={section.id} className="eyebrow">{section.title}</h2>
                  {section.entries.map((entry, index) => (
                    <article key={entry.title + index} className="timeline-entry">
                      <EntryContent entry={entry} />
                    </article>
                  ))}
                </section>
              </div>
              {section.id === "industry" && featuredProject && <FeaturedProject project={featuredProject} />}
            </Fragment>
          ))}
        </div>
        <div className="experience-groups">
          {groups.map((section) => (
            <section key={section.id} className={"experience-group group-" + section.id} aria-labelledby={section.id}>
              <h2 id={section.id} className="subsection-title">{section.title}</h2>
              <div>
                {section.entries.map((entry, index) => (
                  <article key={entry.title + index} className="group-entry">
                    <EntryContent entry={entry} />
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="publication-sections">
      {populated.map((section) => (
        <section key={section.id} className={"publication-section publication-" + section.id} aria-labelledby={section.id}>
          <div className="section-lede">
            <h2 id={section.id} className="subsection-title">{section.title}</h2>
            <span className="entry-count">{String(section.entries.length).padStart(2, "0")} entries</span>
          </div>
          <ol className="citation-list">
            {section.entries.map((entry, index) => (
              <li key={entry.title + index} className="citation-row">
                <span className="citation-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <article><EntryContent entry={entry} /></article>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
