import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ image, title, description, technologies, projectLink }) {
  return (
    <div className="w-full lg:h-[35rem] md:h-80 rounded-lg overflow-hidden shadow-lg bg-slate-700 flex flex-col">
      <div className="w-full h-48 md:h-1/2 bg-gray-800 flex items-center justify-center">
        <img src={image} alt={title} className="max-w-full max-h-full object-cover" />
      </div>
      <div className="w-full p-4 flex flex-col justify-between h-48 md:h-1/2">
        <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 text-white">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 text-center ">
          Ver Proyecto
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectCard;
