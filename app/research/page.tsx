import type { Metadata } from "next";
import { ResearchExplorer } from "@/components/research-explorer";
import { PageHeading } from "@/components/page-heading";
import { pageCopy, research } from "@/data/site";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHeading {...pageCopy.research} eyebrow="Curiosity, in practice" size="compact" />
      <ResearchExplorer items={research} />
    </>
  );
}
