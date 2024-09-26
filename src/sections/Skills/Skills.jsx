import React from "react";
import styles from "./SkillsStyles.module.css";
import {
  FaHtml5,
  FaJava,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpring,
  SiHibernate,
  SiSpringboot,
  SiTailwindcss,
  SiExpress
} from "react-icons/si";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList icon={<FaHtml5 size={50} color="#E34F26" />} skill="HTML" />
        <SkillList icon={<FaCss3Alt size={50} color="#1572B6" />} skill="CSS" />
        <SkillList
          icon={<SiTailwindcss size={50} color="#06B6D4" />}
          skill="Tailwind CSS"
        />
        <SkillList
          icon={<FaJsSquare size={50} color="#F7DF1E" />}
          skill="JavaScript"
        />
        <SkillList icon={<FaReact size={50} color="#61DAFB" />} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<FaJava size={50} color="#007396" />} skill="Java" />
        <SkillList
          icon={<SiSpring size={50} color="#6DB33F" />}
          skill="Spring"
        />
        <SkillList
          icon={<SiHibernate size={50} color="#59666C" />}
          skill="Hibernate"
        />
        <SkillList
          icon={<SiSpringboot size={50} color="#6DB33F" />}
          skill="Spring Boot"
        />
        <SkillList icon={<FaNodeJs size={50} color="#339933" />} skill="Node" />
        <SkillList icon={<SiExpress size={50} color="#68A063" />} skill="Express" /> {/* Added Express */}
      </div>

      <hr />
      <div className={styles.skillList}>
        <SkillList
          icon={<FaDatabase size={50} color="#4479A1" />}
          skill="MySQL"
        />
      </div>
    </section>
  );
}

export default Skills;
