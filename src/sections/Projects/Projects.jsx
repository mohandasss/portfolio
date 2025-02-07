import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/hotelwala..png";
import freshBurger from "../../assets/conact.png";
import hipsster from "../../assets/quizzy.png";
import movieapp from "../../assets/folio.png";
import ProjectCard from "../../common/ProjectCard";
import Devshare from "../../assets/DevCaster.png";
import shop from "../../assets/shop.jpeg";
import lens2 from "../../assets/cam2.png";



function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lens2}
          link="https://github.com/mohandasss/lensBox"
          h3="LensBox"
          p="Click & Rent!"
        />
        <ProjectCard
          src={shop}
          link="https://github.com/mohandasss/shopkaro"
          h3="Shopkaro"
          p="Shopping, Ghar Se!"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/mohandasss/Hotel-booking-system/tree/main/frontend"
          h3="Mohan Hotels"
          p="Book, Relax, Enjoy!"
        />
        <ProjectCard
          src={movieapp}
          link="https://filmfoliooo.netlify.app/"
          h3="Film Folio"
          p="Movie World, Simplified!"
        />
        <ProjectCard
          src={Devshare}
          link="https://github.com/mohandasss/Realtime-Code-Sharing.git"
          h3="Dev Caster"
          p="Code Together, Anytime!"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/mohandasss/Contact_App"
          h3="Snapsync Contacts"
          p="Organize, Sync, Connect!"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/mohandasss/quizy"
          h3="Quizilla"
          p="Test Your Knowledge!"
        />
      </div>
    </section>
  );
}

export default Projects;
