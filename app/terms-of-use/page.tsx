import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <Legal title="Terms of Use">
      <p>All films, stills and text on this site are the work of {site.name} and the credited collaborators, and may not be reused without written permission.</p>
      <p>Client names and marks belong to their respective owners.</p>
      <p>Contact: {site.email}</p>
    </Legal>
  );
}
