// Re-mounts on every navigation, giving each page a curtain wipe + fade-in.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="curtain" aria-hidden />
      <div className="page">{children}</div>
    </>
  );
}
