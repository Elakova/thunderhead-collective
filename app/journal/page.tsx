import type { Metadata } from "next";
import Footer from "@/components/Footer";
import JournalIndex from "@/components/JournalIndex";
import { journal } from "@/lib/journal";

export const metadata: Metadata = { title: "Journal", description: "Notes from set, process and gear." };

export default function Journal() {
  return (
    <>
      <JournalIndex posts={journal} />
      <Footer />
    </>
  );
}
