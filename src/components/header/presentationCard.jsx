import downloadIco from '@icons/dowload-icoW.png';
import linkedinLogo from '@icons/linkedin-logo.png';
import githubLogo from '@icons/github-logo.png';
import { useSpring, animated } from 'react-spring';

function PresentationCard() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { color: 'rgb(249 115 22)' },
    to: { color: 'rgb(55 48 163)' },
    config: { duration: 2000 },
  });

  function handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/diego-pablo-valenzuela-palacios-979054202/", "_blank");
  }

  function handleGithubClick() {
    window.open("https://www.linkedin.com/in/diego-pablo-valenzuela-palacios-979054202/", "_blank");
  }

  return (
    <div className="w-full h-[16.5rem] flex flex-col justify-center items-center gap-4">
      <animated.h1 
        className="text-center text-6xl font-semibold" 
        style={styles}
      >
        Full-Stack Developer
      </animated.h1>
      <p className="text-center text-4xl">Hi, I&apos;m Diego Valenzuela</p>
      <div className="flex gap-4 justify-center">
        <button className="bg-red-950 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full">
          Descargar CV
          <img src={downloadIco} alt="Download" className="w-6 h-6 ml-1  inline-block" />
        </button>
        <button onClick={handleLinkedInClick} className="bg-indigo-950 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full">
          LinkedIn
          <img src={linkedinLogo} alt="Linkedin" className="w-6 h-6 ml-1  inline-block" />
        </button>
        <button onClick={handleGithubClick} className="bg-stone-900 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full">
          Github
          <img src={githubLogo} alt="Linkedin" className="w-6 h-6 ml-1  inline-block" />
        </button>
      </div>
    </div>
  );
}

export default PresentationCard;



