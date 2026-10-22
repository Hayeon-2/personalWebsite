import type { Metadata } from "next";
import { ContentSections } from "@/components/content-sections";
import { PageHeading } from "@/components/page-heading";
import { pageCopy, publications } from "@/data/site";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <div className="publications-page">
      <PageHeading {...pageCopy.publications} eyebrow="Ideas, shared" size="compact" />
      <ContentSections sections={publications} variant="citations" />
    </div>
  );
}
