import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/hotelwala..png';
import freshBurger from '../../assets/conact.png';
import hipsster from '../../assets/quizzy.png';
import movieapp from '../../assets/folio.png';
import ProjectCard from '../../common/ProjectCard';
import Devshare from "../../assets/DevCaster.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/mohandasss/Hotel-booking-system/tree/main/frontend"
          h3="Mohan Hotels"
          p="Hotel Booking App"
        />
        <ProjectCard
          src={movieapp}
          link="https://filmfoliooo.netlify.app/"
          h3="Film Folio"
          p="Movie Insights Platform"
        />
         <ProjectCard
        src={Devshare}
        link="https://github.com/mohandasss/Realtime-Code-Sharing.git"
        h3="Dev Caster"
        p="Realtime Code Sharing Tool"
      />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/mohandasss/Contact_App"
          h3="Snapsync Contacts"
          p="Contact Manager App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/mohandasss/quizy"
          h3="Quizilla"
          p="Quiz App"
        />

      </div>
    </section>
  );
}

export default Projects;
