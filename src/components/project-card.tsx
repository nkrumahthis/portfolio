import React from 'react'
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a target="_blank" href={project.url ?? project.github} key={project.id}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
      </Card>
    </a>
  )
}
