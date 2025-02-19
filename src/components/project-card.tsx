import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Project } from "@/lib/types";
import { Badge } from "./ui/badge";
import ProjectCardImage from "./project-card-image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { url, github, title, subtitle, description, png, gif, technologies } =
    project;

  return (
    <a target="_blank" href={url ?? github} key={title}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <ProjectCardImage png={png} gif={gif} title={title} />
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-xs dark:text-yellow-400 text-yellow-600 font-semibold">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {description}
            <div className="mt-2 flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <Badge variant="secondary" className="text-[10px]" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
