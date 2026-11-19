import type { Metadata } from "next";
import Legal from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <Legal title="Privacy Policy">
      <p>This site does not use cookies or collect personal data beyond what your browser sends to the hosting provider to deliver pages.</p>
      <p>If you contact us by email, we use your details only to reply and do not share them with third parties.</p>
      <p>Questions: {site.email}</p>
    </Legal>
  );
}
