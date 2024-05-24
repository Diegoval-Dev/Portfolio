import React from 'react';

function TechnologieGroupCard({ title, children }) {
  return (
    <div className='rounded-xl bg-black p-4 m-4'>
      <h3 className='text-white text-center text-2xl font-semibold col-span-4 mb-4'>{title}</h3>
      <div className='grid grid-cols-4 p-4 gap-5'>
        {children}
      </div>
    </div>
  );
}

export default TechnologieGroupCard;
