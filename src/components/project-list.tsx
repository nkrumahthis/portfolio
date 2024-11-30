import React from 'react'
import { PROJECT_DATA } from '../../data/projects';
import ProjectCard from './project-card';


export default function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECT_DATA.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  )
}
