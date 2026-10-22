import type { PortfolioEntry } from "@/data/site";

const metricSections = new Set([
  "Validation",
  "Validation Results",
  "Fractal Dimension Results",
  "Reported Results",
]);

export function EntryDetail({
  entry,
  sectionHeading = "h3",
}: {
  entry: PortfolioEntry;
  sectionHeading?: "h3" | "h4";
}) {
  const SectionHeading = sectionHeading;
  return (
    <div className="entry-detail">
      {entry.metadata && (
        <dl className="detail-facts">
          {entry.metadata.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {entry.description && <p className="detail-overview">{entry.description}</p>}
      {entry.sections?.map((section) => (
        <section key={section.title} className="detail-section">
          <SectionHeading>{section.title}</SectionHeading>
          {section.body && <p>{section.body}</p>}
          {section.items && (
            metricSections.has(section.title) ? (
              <dl className="metric-grid">
                {section.items.map((point) => {
                  const separator = point.indexOf(": ");
                  return (
                    <div key={point} className="metric">
                      <dt>{separator >= 0 ? point.slice(0, separator) : point}</dt>
                      {separator >= 0 && <dd>{point.slice(separator + 2)}</dd>}
                    </div>
                  );
                })}
              </dl>
            ) : (
              <ul className="detail-list">
                {section.items.map((point) => <li key={point}>{point}</li>)}
              </ul>
            )
          )}
        </section>
      ))}
      {entry.videoId && (
        <figure className="project-video">
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + entry.videoId}
            title={entry.title + " — project video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <figcaption>
            <a className="text-link" href={"https://www.youtube.com/watch?v=" + entry.videoId} target="_blank" rel="noopener noreferrer">
              Watch on YouTube <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
