import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to my portfolio
        </h2>
        <p className="text-muted-foreground">
          I'm Emmanuel, a software engineer and full-stack developer with a passion for
          technology and design. I've worked in edtech, fintech and data analytics.
          My expertise includes JavaScript, TypeScript, Python, and PHP.
        </p>
      </section>
      <section>
        <h3 className="text-2xl font-semi-bold mb-6">Projects</h3>
        <ProjectList />
      </section>
    </div>
  );
}
