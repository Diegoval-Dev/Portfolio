import React from 'react';
import PropTypes from 'prop-types';

function EducationTimeline({ education }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-white">Mi Educación</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</p>
            <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
            <p className="text-base font-normal text-gray-200">{edu.degree}</p>
            <p className="text-sm text-gray-400">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

EducationTimeline.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
};

export default EducationTimeline;
