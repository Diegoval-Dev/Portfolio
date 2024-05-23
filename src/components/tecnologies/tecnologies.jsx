import React from 'react';
import TechnologiCard from './TechnologiCard';
import htmlLogo from '@icons/html-5-48.png';

function Technologies() {
  return (
    <div className='w-4/6'>
      <TechnologiCard name="HTML" image={htmlLogo} color="FF6D00" />
    </div>
  );
}

export default Technologies;
