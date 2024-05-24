import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ image, title, description, technologies }) {
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
