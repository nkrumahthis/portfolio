import Link from "next/link";
import Bio from "@/components/bio";
import PostList from "@/components/post-list";
import ProjectList from "@/components/project-list";
import SectionHeading from "@/components/section-heading";
import { getAllPosts, getPopularPosts } from "@/lib/posts";
import { RESUME_DATA } from "../../data/resume-data";

export default function Home() {
  const latest = getAllPosts().slice(0, 5);
  const popular = getPopularPosts(5);

  return (
    <div className="space-y-20 pb-20">
      <section className="space-y-6 my-8">
        <Bio />
        <p className="text-lg leading-relaxed text-pretty">
          I build software for finance, education and artificial intelligence.
          Every week I write up something I&apos;ve learnt or studied in
          software engineering.
        </p>
      </section>

      <section id="writing">
        <SectionHeading href="/blog" linkLabel="All posts">Writing</SectionHeading>
        <div className="space-y-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Latest</h3>
            <PostList posts={latest} showSummary />
          </div>
          {popular.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Most read</h3>
              <PostList posts={popular} />
            </div>
          )}
        </div>
      </section>

      <section id="about">
        <SectionHeading>About</SectionHeading>
        <div className="space-y-4 leading-relaxed text-pretty">
          <p>{RESUME_DATA.summary}</p>
          <p>
            Before that I worked on money transfer at Zeepay, survey
            infrastructure at Focaldata, e-commerce automation at Plato
            Analytics, and led engineering at an edtech startup in Kumasi.
          </p>
        </div>
        <dl className="mt-6 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[10rem_1fr]">
          {RESUME_DATA.skills.map(({ label, items }) => (
            <div key={label} className="contents">
              <dt className="font-semibold">{label}</dt>
              <dd className="font-mono text-muted-foreground">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="experience">
        <SectionHeading href="/cv" linkLabel="Full CV">Experience</SectionHeading>
        <ol className="relative border-l border-border ml-1 space-y-6">
          {RESUME_DATA.work.map((work) => (
            <li key={work.company} className="pl-6 relative">
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full dark:bg-yellow-400 bg-yellow-700" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {work.title} ·{" "}
                  <a href={work.link} target="_blank" className="hover:underline">{work.company}</a>
                </h3>
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {work.start} – {work.end}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{work.achievements[0]}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects">
        <SectionHeading>Things I&apos;ve Built</SectionHeading>
        <ProjectList />
      </section>

      <section id="contact">
        <SectionHeading>Get in touch</SectionHeading>
        <p className="leading-relaxed">
          Open to interesting problems in payments, fintech and AI. Email{" "}
          <a href="mailto:nkrumahthis@gmail.com" className="underline underline-offset-4 dark:text-yellow-400 text-yellow-700">
            nkrumahthis@gmail.com
          </a>{" "}
          or find me via the links at the top. You can also{" "}
          <Link href="/feed.xml" className="underline underline-offset-4">subscribe via RSS</Link>.
        </p>
      </section>
    </div>
  );
}
