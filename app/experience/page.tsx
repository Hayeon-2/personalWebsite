import type { Metadata } from "next";
import { ContentSections } from "@/components/content-sections";
import { PageHeading } from "@/components/page-heading";
import { experience, featuredEngineeringProject, pageCopy } from "@/data/site";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeading {...pageCopy.experience} eyebrow="Learning by doing" size="compact" />
      <ContentSections sections={experience} variant="experience" featuredProject={featuredEngineeringProject} />
    </>
  );
}
