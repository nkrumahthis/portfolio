import React from 'react'
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Project } from '@/lib/types';
import Image from 'next/image';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { url, github, title, subtitle, description, thumbnail, technologies } = project;
  return (
    <a target="_blank" href={url ?? github} key={title}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        {thumbnail &&
          <div className="border-solid border-2 border-gray-100">
            <Image src={thumbnail} height={0} width={0} alt={title} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        }
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-xs">{subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {description}
            <div className="mt-2 flex flex-wrap gap-1">
              {technologies.map(tech =>
                <Badge variant="secondary" className="text-[10px]" key={tech}>{tech}</Badge>
              )}
            </div>
          </CardDescription>
          <CardDescription>
            <div className="mt-2 flex flex-wrap gap-1">

            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  )
}
