import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WorkIndex from "@/components/WorkIndex";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkGrid() {
  return (
    <>
      <WorkIndex projects={projects} view="grid" />
      <Footer />
    </>
  );
}
