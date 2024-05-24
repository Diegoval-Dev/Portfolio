import React from 'react';
import Header from '@components/header/header';
import Projects from '@components/projects/projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950">
    <Header />
    <main className='flex flex-col items-center'>
      <Projects />
    </main>
  </div>
  );
};

export default ProjectsPage;