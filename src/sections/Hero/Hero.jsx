import React from 'react';
import {  FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/mydp.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/RecentCV.pdf';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Mohan Das"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mohan
          <br />
          Das
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.instagram.com/mohandas00007/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill size={24} color={theme === 'light' ? '#000' : '#fff'} />
          </a>
          <a href="https://github.com/mohandasss" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color={theme === 'light' ? '#000' : '#fff'} />
          </a>
          <a href="https://www.linkedin.com/in/mdas004/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color={theme === 'light' ? '#000' : '#fff'} />
          </a>
        </span>
        <p className={styles.description}>
        With expertise in both frontend and backend, I can tackle challenges and build scalable applications that deliver great results.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
