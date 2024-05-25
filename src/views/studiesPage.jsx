import React from 'react';
import Header from '@components/header/header';
import EducationTimeline from '@components/education/educationTimeline';

const StudiesPage = () => {
  const educationData = [
    {
      date: "2022 - Presente",
      institution: "Universidad del Valle de Guatemala",
      degree: "Licenciatura en Ingenieria en Ciencias de la Computación y Tecnologías de la Información",
      description: "Actualmente finalizando el 5to semestre de la carrera."
    },
    {
      date: "jun 2023 - oct 2023",
      institution: "Universidad del Valle de Guatemala",
      degree: "Aprende a programar en Solidity",
      description: "Curso sobre programación en Solidity, el lenguaje de programación de Ethereum."
    },
    {
      date: "ago 2023",
      institution: "Udemy",
      degree: "Universidad Desarrollo Web - FrontEnd Web Developer!",
      description: "Curso en linea sobre desarrollo web, enfocado en el desarrollo de aplicaciones web."
    },
    {
      date: "dic 2022",
      institution: "Platzi",
      degree: "Curso Práctico de Frontend Developer",
      description: "Curso en linea sobre desarrollo web, enfocado en desarrollo frontend."
    },
    {
      date: "2017 - 2021",
      institution: "Bilingüe El Prado",
      degree: "Bachiller en Ciencias y Letras con Orientación en Computación",
      description: "Graduado con honores, promedio de 92%."
    },
    {
      date: "oct 2019 - dic 2019",
      institution: "Instituto Técnico de Capacitación y Productividad",
      degree: "Programación en java y conexión a bases de datos",
      description: "Cruso de programación en java orientada a objetos y conexión a bases de datos con MySQL."
    },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950">
    <Header />
    <main className='flex flex-col items-center'>
      <EducationTimeline education={educationData} />
    </main>
  </div>
  );
};

export default StudiesPage;