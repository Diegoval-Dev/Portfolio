import React from 'react';
import ProjectCard from './proyectCard';
import habitadConnet from '@images/habitatConnect.png';
import apiRest from '@images/APIREST.png';
import apoAdmin from '@images/BlogAdmin.png';

function Projects() {
  const projects = [
    {
      image: habitadConnet,
      title: "Habitat Connect",
      description: "Habitat Connect es una aplicación web diseñada para agilizar la gestión de torres de apartamentos premium. En un mundo donde las aplicaciones mejoran nuestras vidas simplificando procesos basados en papel, este proyecto permite a los administradores de edificios supervisar de manera eficiente las comodidades, cuentas por pagar, estacionamiento y beneficiar a los residentes. Habitat Connect se construye como un servicio innovador que puede adaptarse a nuevas oportunidades emergentes, lo que lo convierte en una herramienta valiosa para la gestión de edificios premium.",
      technologies: ["HTML","CSS","Javascript", "Nodejs","Express", "jQuery", "MySQL","Sequelize"],
      projectLink: "#"
    },
    {
      image: apiRest,
      title: "API REST",
      description: "Este proyecto es un blog dedicado al mundo del fitness, que ofrece a los usuarios la posibilidad de leer, escribir y compartir sus experiencias y conocimientos sobre ejercicios, nutrición y bienestar general. Construido con tecnologías modernas, este blog está diseñado para ser fácil de usar, tanto para administradores como para lectores.",
      technologies: ["HTML","CSS","Javascript", "Nodejs","Express", "MySQL","Swagger"],
      projectLink: "https://api.diegovalenzuela.me/"
    },
    {
      image: apoAdmin,
      title: "Blog Admin",
      description: "Este proyecto es un blog dedicado al mundo del fitness. Los usuarios pueden explorar publicaciones que incluyen títulos, fechas, imágenes, categorías y descripciones detalladas relacionadas con el fitness. Este blog está diseñado con una interfaz moderna y funcionalidades completas de gestión de contenido, incluyendo un área de administración protegida para la gestión de publicaciones.",
      technologies: ["HTML","CSS","Javascript","Reactjs", "Vite"],
      projectLink: "https://blogapi.diegovalenzuela.me/#/"
    }
  ];

  return (
    <div className="p-8">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-10 rounded-xl justify-items-center content-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            projectLink="/"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
