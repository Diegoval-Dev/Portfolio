import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

function TechnologiCard({ name, image, color }) {
  const springProps = useSpring({
    from: { boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                        0 2px 4px -1px rgba(0, 0, 0, 0.06),
                        0 0 10px 4px #${color}80,  
                        0 0 20px 8px #${color}50` },
    to: { boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                      0 2px 4px -1px rgba(0, 0, 0, 0.06),
                      0 0 14px 8px #${color}80,  
                      0 0 26px 12px #${color}50` },
    config: { duration: 700 },
    loop: { reverse: true },
  });

  const cardStyle = {
    backgroundColor: `#${color}20`,
    backdropFilter: 'blur(10px)',
  };

  return (
    <animated.div style={{ ...cardStyle, ...springProps }} className='h-20 w-20 rounded-lg flex flex-col justify-center items-center'>
      <img className='h-14 w-14' src={image} alt={name} />
      <p className='text-center text-white text-sm font-semibold'>{name}</p>
    </animated.div>
  );
}

TechnologiCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TechnologiCard;
