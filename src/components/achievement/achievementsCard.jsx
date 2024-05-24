import React from 'react';
import PropTypes from 'prop-types';

function AchievementsCard({ image, title, description, link }) {
  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg bg-black">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-75" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-0 hover:bg-opacity-80 transition duration-300 ease-in-out flex flex-col justify-center items-center text-white ">
        <div className="opacity-0 hover:opacity-100 transition duration-300 ease-in-out text-center h-full flex flex-col justify-center p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
            Ver Certificado
          </a>
        </div>
      </div>
    </div>
  );
}

AchievementsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AchievementsCard;
