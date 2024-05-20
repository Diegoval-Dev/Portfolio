import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';


function AnimatedButton({ onClick, bgColor, hoverColor, text, icon}) {
  const [styles, api] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseEnter = () => {
    api.start({ transform: 'scale(1.1)' });
  };

  const handleMouseLeave = () => {
    api.start({ transform: 'scale(1)' });
  };

  return (
    <animated.button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${bgColor} ${hoverColor} text-white text-sm font-bold py-2 px-4 rounded-full flex items-center`}
      style={styles}
    >
      {text}
      {icon && <img src={icon} alt={text} className="w-6 h-6 ml-1 inline-block" />}
    </animated.button>
  );
}

AnimatedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default AnimatedButton;

