import AchievementsCard from "./achievementsCard";
import EstudianteDistinguido from "@images/EstudianteDistinguido2022.jpg";
import MencionAcademica from "@images/MencionAcademica2023.jpg";

function Achievements() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-black p-10 rounded-xl">
        <AchievementsCard
          image={EstudianteDistinguido}
          title="Diploma a Estudiante Distinguido 2022"
          description="Diploma por alto desempeño académico, participación y comportamiento universitario durante el año académico 2022."
          link="https://media.licdn.com/dms/image/D4E2DAQERUNs_ldVfeQ/profile-treasury-image-shrink_1280_1280/0/1703174447583?e=1717120800&v=beta&t=SPeD3h2J4b3QV67nQobDlCZfW5rJ7KEQkw1MLSIOKhY"
        />
        <AchievementsCard
          image={MencionAcademica}
          title="Diploma de Mención Académica 2023"
          description="Diploma por alto desempeño académico, participación y comportamiento universitario durante el año académico 2023."
          link="https://media.licdn.com/dms/image/D4E2DAQG1VNN4UVNZVg/profile-treasury-image-shrink_1280_1280/0/1712591024193?e=1717124400&v=beta&t=yNqiW0O3ylSUHhc6XJP9WFUuwR4eTIhHjhKHXHvn_UI"
        />
      </div>
    </div>
  );
}

export default Achievements;
