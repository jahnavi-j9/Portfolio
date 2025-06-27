import React from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import imgYoga from '../../assets/yoga.png';
import imgCarrier from '../../assets/carrier.png';
import imgCanvas from '../../assets/CC.png';
import imgWeather from '../../assets/weather.png';

const data = [
  {
    id: 1,
    image: imgYoga,
    title: 'AI-Powered Yoga Platform',
    description: 'Built using MERN and TensorFlow.js for real-time pose detection with 90% accuracy.',
    github: 'https://github.com/jahnavi-j9/ai_yoga_tutor',
    live: 'https://aiyogatutor.netlify.app/',
    tech: ['React', 'TensorFlow.js', 'Node.js']
  },
  {
    id: 2,
    image: imgCarrier,
    title: 'carriers-website',
    description: 'Carriers website with 200+ Applications capacity.',
    github: 'https://github.com/jahnavi-j9/CarrerNest',
    live: 'https://carrer-nest.netlify.app/',
    tech: ['React', 'Express', 'SQL']
  },
  {
    id: 3,
    image: imgCanvas,
    title: 'CODE CRAFT COMPILER',
    description: 'Online code editor with real-time Multi languages preview using CodeMirror & React.',
    github: 'https://github.com/jahnavi-j9/Code-Craft',
    live: 'https://code-craft-compiler.netlify.app',
    tech: ['React', 'CodeMirror', 'CSS']
  },
  {
    id: 4,
    image: imgWeather,
    title: 'Weather Application',
    description: 'Responsive weather app fetching real-time data using OpenWeatherMap API.',
    github: 'https://github.com/jahnavi-j9/Weather',
    live: 'https://jahnavi-j9.github.io/Weather/',
    tech: ['HTML', 'CSS', 'JavaScript', 'API']
  }
];

const Projects = () => {
  return (
    <section className={`section ${styles['project-wrapper']}`} id="projects">
      <div className={`innerWidth paddings flexCenter ${styles['project-container']}`}>
        <h1>Projects</h1>
        <div className={styles['projects']}>
          {data.map(({ id, image, title, description, github, live, tech }) => (
            <article className={styles['project-item']} key={id}>
              <div className={styles['project-bar']} />
              <div className={styles['project-image']}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p className={styles['description']}>{description}</p>
              <div className={styles['project-tags']}>
                {tech.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className={styles['project-item-cta']}>
                <a href={github} target="_blank" rel="noreferrer" className="button">
                  <FaGithub /> GitHub
                </a>
                {live && (
                  <a href={live} target="_blank" rel="noreferrer" className="button">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
