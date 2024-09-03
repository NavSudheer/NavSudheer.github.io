import React from 'react'
import './projects.css'

const projectsData = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3' },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects