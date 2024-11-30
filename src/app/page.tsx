import Bio from "@/components/bio";
import ProjectList from "@/components/project-list";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="max-w-2xl space-y-6 my-8">
        <Bio/>
        <p>
          I'm Emmanuel, and I build software for finance, education and artificial intelligence.
          My expertise includes JavaScript, TypeScript, Python, and PHP.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-bold mb-6">Things I've Built</h3>
        <ProjectList />
      </section>
    </div>
  );
}
