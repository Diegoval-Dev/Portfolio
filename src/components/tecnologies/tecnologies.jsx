import React from 'react';
import TechnologiCard from './technologiCard';
import htmlLogo from '@icons/html-5-48.png';
import cssLogo from '@icons/css3.png';
import jsLogo from '@icons/javascript.png';
import reactLogo from '@icons/react-js.png';
import bootstrapLogo from '@icons/bootstrap.png';
import dockerLogo from '@icons/docker.png';
import expressLogo from '@icons/express-js.png';
import gitLogo from '@icons/git.png';
import gitHubLogo from '@icons/github.png';
import javaLogo from '@icons/java.png';
import kotlinLogo from '@icons/kotlin.png';
import linuxLogo from '@icons/linux.png';
import mysqlLogo from '@icons/mysql.png';
import nextLogo from '@icons/nextjs.png';
import nginxLogo from '@icons/nginx.png';
import nodeLogo from '@icons/nodejs.png';
import npmLogo from '@icons/npm.png';
import postgresLogo from '@icons/postgresql.png';
import pythonLogo from '@icons/python.png';
import tailwindLogo from '@icons/tailwindcss.png';
import viteLogo from '@icons/vite.png';
import TechnologieGroupCard from './technologiGroupCard';

function Technologies() {
  return (
    <div className='w-4/6  grid grid-cols-2 mt-10'>
      <TechnologieGroupCard title="Frontend">
        <TechnologiCard name="HTML" image={htmlLogo} color="FF6D00" />
        <TechnologiCard name="CSS" image={cssLogo} color="2196F3" />
        <TechnologiCard name="JavaScript" image={jsLogo} color="F7DF1E" />
        <TechnologiCard name="React" image={reactLogo} color="61DAFB" />
        <TechnologiCard name="Bootstrap" image={bootstrapLogo} color="7952B3" />
        <TechnologiCard name="Tailwind CSS" image={tailwindLogo} color="38B2AC" />
        <TechnologiCard name="Next.js" image={nextLogo} color="a0a0a0" />
        <TechnologiCard name="Vite" image={viteLogo} color="646CFF" />
      </TechnologieGroupCard>

      <TechnologieGroupCard title="Backend">
        <TechnologiCard name="Node.js" image={nodeLogo} color="339933" />
        <TechnologiCard name="Express.js" image={expressLogo} color="a0a0a0" />
        <TechnologiCard name="Python" image={pythonLogo} color="3776AB" />
        <TechnologiCard name="Java" image={javaLogo} color="007396" />
        <TechnologiCard name="Kotlin" image={kotlinLogo} color="0095D5" />
        <TechnologiCard name="Nginx" image={nginxLogo} color="009639" />
      </TechnologieGroupCard>

      <TechnologieGroupCard title="Bases de Datos">
        <TechnologiCard name="MySQL" image={mysqlLogo} color="4479A1" />
        <TechnologiCard name="PostgreSQL" image={postgresLogo} color="336791" />
      </TechnologieGroupCard>

      <TechnologieGroupCard title="Herramientas">
        <TechnologiCard name="Docker" image={dockerLogo} color="2496ED" />
        <TechnologiCard name="Git" image={gitLogo} color="F05032" />
        <TechnologiCard name="GitHub" image={gitHubLogo} color="a0a0a0" />
        <TechnologiCard name="Linux" image={linuxLogo} color="FCC624" />
        <TechnologiCard name="npm" image={npmLogo} color="CB3837" />
      </TechnologieGroupCard>
    </div>
  );
}

export default Technologies;
