import React from 'react';
import PropTypes from 'prop-types';

function TechnologiCard({ name, image, color }) {
  const cardStyle = {
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06),
                0 0 15px 5px #${color}80,  
                0 0 30px 10px #${color}50`,
    backgroundColor: `#${color}20`, 
    backdropFilter: 'blur(10px)',
  };

  return (
    <div className='h-20 w-20 rounded-lg flex flex-col justify-center items-center' style={cardStyle}>
      <img className='h-14 w-14' src={image} alt={name} />
      <p className='text-center text-white text-sm font-semibold'>{name}</p>
    </div>
  );
}

TechnologiCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TechnologiCard;
