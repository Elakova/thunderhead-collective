import Footer from "@/components/Footer";
import Reel from "@/components/Reel";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Reel projects={projects} />
      <Footer />
    </>
  );
}
