import type { Metadata } from "next";
import { DownloadIcon, GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RESUME_DATA } from "../../../data/resume-data";

export const metadata: Metadata = {
  title: "CV",
  description: RESUME_DATA.summary,
};

export default function CVPage() {
  return (
    <div className="space-y-10 my-8 pb-20 print:my-0 print:space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
          <p className="font-mono text-sm text-muted-foreground">{RESUME_DATA.about}</p>
          <a
            className="inline-flex items-center gap-x-1.5 font-mono text-xs text-muted-foreground hover:underline"
            href={RESUME_DATA.locationLink}
            target="_blank"
          >
            <GlobeIcon className="size-3" />
            {RESUME_DATA.location}
          </a>
          <div className="flex gap-x-1 pt-1 print:hidden">
            <Button className="size-8" variant="outline" size="icon" asChild>
              <a href={`mailto:${RESUME_DATA.contact.email}`} aria-label="Email"><MailIcon className="size-4" /></a>
            </Button>
            <Button className="size-8" variant="outline" size="icon" asChild>
              <a href={`tel:${RESUME_DATA.contact.tel}`} aria-label="Phone"><PhoneIcon className="size-4" /></a>
            </Button>
          </div>
          <div className="hidden flex-col font-mono text-sm print:flex">
            <span>{RESUME_DATA.contact.email}</span>
            <span>{RESUME_DATA.contact.tel}</span>
          </div>
        </div>
        <Button variant="outline" size="sm" asChild className="print:hidden">
          <a href="/emmanuel-nkrumah-sarpong-cv.pdf" download>
            <DownloadIcon className="size-4" /> PDF
          </a>
        </Button>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">About</h2>
        <p className="text-pretty font-mono text-sm text-muted-foreground">{RESUME_DATA.summary}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <dl className="grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[11rem_1fr]">
          {RESUME_DATA.skills.map(({ label, items }) => (
            <div key={label} className="contents">
              <dt className="font-semibold">{label}</dt>
              <dd className="font-mono">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Work Experience</h2>
        {RESUME_DATA.work.map((work) => (
          <Card key={work.company} className="print:border-0 print:shadow-none">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <h3 className="font-semibold leading-none">
                  <a className="hover:underline" href={work.link} target="_blank">{work.company}</a>
                </h3>
                <span className="text-sm tabular-nums text-muted-foreground">{work.start} – {work.end}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-mono text-sm leading-none">{work.title}</h4>
                <Badge variant="secondary" className="text-[10px]">{work.location}</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="ml-4 list-disc space-y-1.5 text-muted-foreground">
                {work.achievements.map((achievement, idx) => <li key={idx}>{achievement}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-3">
          {RESUME_DATA.projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader className="pb-2">
                <h3 className="font-semibold leading-none">
                  {project.link
                    ? <a href={project.link} target="_blank" className="hover:underline">{project.title}</a>
                    : project.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-1 space-y-2 text-xs text-muted-foreground">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <Badge variant="secondary" className="text-[10px]" key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Education</h2>
        {RESUME_DATA.education.map((education) => (
          <div key={education.school} className="flex flex-wrap items-baseline justify-between gap-x-2">
            <div>
              <h3 className="font-semibold">{education.school}</h3>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
            </div>
            <span className="text-sm tabular-nums text-muted-foreground">Graduated {education.end}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
