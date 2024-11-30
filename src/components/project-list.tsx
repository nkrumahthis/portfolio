import React from 'react'
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { PROJECT_DATA } from '../../data/projects';


export default function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECT_DATA.map(project => (
        <Link href={project.url ?? project.github} key={project.id}>
          <Card className="h-full transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
