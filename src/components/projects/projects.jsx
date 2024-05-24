import React from 'react';
import ProjectCard from './proyectCard';
import habitadConnet from '@images/habitatConnect.png';


function Projects() {
  const projects = [
    {
      image: habitadConnet,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },

    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
