import type { Metadata } from "next";
import Footer from "@/components/Footer";
import JournalIndex from "@/components/JournalIndex";
import { journal } from "@/lib/journal";

export const metadata: Metadata = { title: "Journal", description: "Thinking on video production, startups and creative ideas." };

export default function Journal() {
  return (
    <>
      <JournalIndex posts={journal} />
      <Footer />
    </>
  );
}
