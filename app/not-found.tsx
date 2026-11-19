import Link from "next/link";

export default function NotFound() {
  return (
    <main className="work-head" style={{ minHeight: "80svh" }}>
      <h1 className="work-head__title sans">Not found</h1>
      <Link href="/work-grid" className="bracket">
        view work
      </Link>
    </main>
  );
}
