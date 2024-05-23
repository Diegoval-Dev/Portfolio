import React from 'react';
import Header from '@components/header/header';
import AboutMe from '@components/aboutMe/aboutMe';
import PresentationCard from '@components/header/presentationCard';
import Technologies from '@components/tecnologies/tecnologies';


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950">
    <Header />
    <main className='flex flex-col items-center'>
      <PresentationCard />
      <AboutMe />
      <Technologies />
    </main>
  </div>
  );
}

export default About;