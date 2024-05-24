import React from 'react';
import Header from '@components/header/header';
import AboutMe from '@components/aboutMe/aboutMe';
import PresentationCard from '@components/header/presentationCard';
import Technologies from '@components/tecnologies/tecnologies';
import Achievements from '@components/achievement/achievements';


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950">
    <Header />
    <main className='flex flex-col items-center'>
      <PresentationCard />
      <h2 className='text-white text-4xl font-semibold mt-10'>Sobre mí</h2>
      <AboutMe />
      <h2 className='text-white text-4xl font-semibold mt-10'>Tecnologías</h2>
      <Technologies />
      <h2 className='text-white text-4xl font-semibold mt-10'>Reconocimientos</h2>
      <Achievements />
    </main>
  </div>
  );
}

export default About;