import Footer from "./Footer";

export default function Legal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <main className="legal">
        <h1 className="sans">{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
}
