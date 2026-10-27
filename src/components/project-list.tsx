import React from 'react'
import { PROJECT_DATA } from '../../data/project-data';
import ProjectCard from './project-card';


export default function ProjectList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {PROJECT_DATA.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}
