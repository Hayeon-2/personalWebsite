export function PageHeading({
  title,
  description,
  eyebrow,
  size = "default",
}: {
  title: string;
  description: string;
  eyebrow?: string;
  size?: "default" | "compact";
}) {
  return (
    <header className={"page-heading" + (size === "compact" ? " page-heading-compact" : "")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </header>
  );
}
