import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/Hotelbooking.jpeg';
import freshBurger from '../../assets/contactmanager.jpeg';
import hipsster from '../../assets/quiz.jpeg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

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
