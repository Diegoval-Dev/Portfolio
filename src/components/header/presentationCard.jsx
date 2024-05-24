import downloadIco from '@icons/dowload-icoW.png';
import linkedinLogo from '@icons/linkedin-logo.png';
import githubLogo from '@icons/github-logo.png';
import { useSpring, animated } from 'react-spring';
import AnimatedButton from '@components/AnimatedButton';
import cvUrl from '@public/DiegoValenzuela_CV_En_2.pdf';

function PresentationCard() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { color: 'rgb(249 115 22)' },
    to: { color: 'rgb(225 225 225)' },
    config: { duration: 2000 },
  });

  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/diego-pablo-valenzuela-palacios-979054202/", "_blank");
  }

  function handleGithubClick() {
    window.open("https://www.linkedin.com/in/diego-pablo-valenzuela-palacios-979054202/", "_blank");
  }

  function handleCVClick() {
    console.log(cvUrl);
    window.open(cvUrl, "_blank"); 
  }

  return (
    <div className="w-4/6 h-[23rem] flex flex-col justify-center items-center gap-4 rounded-lg mt-10 bg-radial-gradient border border-gray-700">
      <animated.h1 
        className="text-center text-6xl font-semibold" 
        style={styles}
      >
        Full-Stack Developer
      </animated.h1>
      <p className="text-center text-4xl text-white">hola, soy Diego Valenzuela</p>
      <div className="flex gap-4 justify-center">
        <AnimatedButton 
          onClick={handleCVClick} 
          bgColor="bg-red-950" 
          hoverColor="hover:bg-red-800" 
          text="Descargar CV" 
          icon={downloadIco} 
        />
        <AnimatedButton 
          onClick={handleLinkedInClick} 
          bgColor="bg-indigo-950" 
          hoverColor="hover:bg-indigo-800" 
          text="LinkedIn" 
          icon={linkedinLogo} 
        />
        <AnimatedButton 
          onClick={handleGithubClick} 
          bgColor="bg-stone-800" 
          hoverColor="hover:bg-stone-600" 
          text="Github" 
          icon={githubLogo} 
        />
      </div>
    </div>
  );
}

export default PresentationCard;
