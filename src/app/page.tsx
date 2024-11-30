import Bio from "@/components/bio";
import ProjectList from "@/components/project-list";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="max-w-2xl space-y-8 my-8">
        <Bio />
        <p>
          I'm Emmanuel, and I build software for finance, education and artificial intelligence.
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Javascript", "Typescript", "Python", "PHP"].map(tech =>
            <Badge variant="outline" className="border-gray-300" key={tech}>{tech}</Badge>
          )}
        </div>
      </section>
      <section className="space-y-8 my-8">
        <h3 className="text-2xl font-bold mb-6">Things I've Built</h3>
        <ProjectList />
      </section>
    </div>
  );
}
