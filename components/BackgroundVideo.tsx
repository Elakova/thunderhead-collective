// Full-bleed muted loop with a centred statement on top.
export default function BackgroundVideo({ video, poster, children, className = "" }: { video: string; poster: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-video ${className}`}>
      <video src={video} poster={poster} muted loop playsInline autoPlay preload="auto" />
      <div className="bg-video__content">{children}</div>
    </section>
  );
}
