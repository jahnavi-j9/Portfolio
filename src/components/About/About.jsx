import React from 'react';
import styles from './About.module.css';

const skills = [
  'Figma', 'HTML', 'CSS', 'JavaScript', 'React.js',
  'Node.js', 'Express.js', 'SQL', 'Python', 'Java',
  'Pandas', 'NumPy', 'Git & GitHub', 'Data Structures','TensorFlow.js'
];

const experiences = [
  {
    company: 'TEN Technologies',
    position: 'Frontend Developer',
    duration: '2025-present',
    description:
      'Engineered responsive user interfaces, reducing page load times by 40% and improving overall user experience for real-time data visualization projects.'
  },
  {
    company: 'GRADIOUS Technologies',
    position: 'Placement Training (COHORT-39) - Full Stack Developer',
    duration: '2025-present',
    description: 
        ' Maintained a 90% average in intensive full-stack development training and applied learnings to construct  fully functional web applications with complete front-end and back-end integration.'

  }
];

const education = [
  {
    institution: 'SRKR Engineering College, Bhimavaram',
    degree: 'B.Tech, Computer Science and Business Systems (CSBS)',
    duration: '2022 – Present',
    details: 'CGPA: 9.07/10'
  },
  {
    institution: 'IIT Madras',
    degree: 'BSC, Programming and Data Science',
    duration: '2025 – Present',
    details: 'Online'
  }
];

const achievements = [
  'Piloted 5 workshops on ethical coding practices via Code of Conduct Club, reaching 100+ students.',
  'Certified by Cisco Networking Academy in Network Addressing and Basic Troubleshooting.',
  'Completed 6 Google Cloud Certifications in AI, ML, Infra, and Networking (Study Jam 2023).',
  'Academic Topper in CSBS (2022–2023) with a CGPA of 9.23.'
];

const About = () => {
  return (
    <>
      {/* About, Skills, Education, Achievements */}
      <section className={`section ${styles['about-wrapper']}`} id="about">
        <div className={styles['about-title']}>

          {/* About Me */}
          <div className={styles['about-block']}>
            <h1 className={styles['section-heading']}>About Me</h1>
            <div className={styles['about-desc']}>
              I’m <b style={{ color: '#ff922d' }}>Jahnavi Grandhi</b>, a Computer Science and Business Systems undergraduate at SRKR Engineering College. I specialize in building responsive full-stack applications using the MERN stack and have a growing interest in artificial intelligence and cloud technologies.
              <br /><br />
              I’ve worked on real-time projects during my internships, contributed to student communities, and consistently pursue technical certifications to stay industry-ready. I’m driven by curiosity, clarity in execution, and a passion for learning.
            </div>
          </div>

          {/* Skills */}
          <div className={styles['about-block']}>
            <h1 className={styles['section-heading']} id="skills">Skills</h1>
            <div className={styles['skills-container']}>
              {skills.map((skill, index) => (
                <div className={styles['skill-card']} key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={styles['about-block']}>
            <h1 className={styles['section-heading']} id="education">Education</h1>
            <div className={styles['edu-container']}>
              {education.map((edu, index) => (
                <div className={styles['edu-card']} key={index}>
                  <div className={styles['edu-icon']}>🎓</div>
                  <div className={styles['edu-content']}>
                    <h2>{edu.institution}</h2>
                    <p className={styles['edu-degree']}>{edu.degree}</p>
                    <p className={styles['edu-duration']}>{edu.duration}</p>
                    <span className={styles['edu-detail']}>{edu.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={styles['about-block']}>
            <h1 className={styles['section-heading']} id="achievements">Achievements</h1>
            <div className={styles['achievement-container']}>
              {achievements.map((item, index) => (
                <div className={styles['achievement-card']} key={index}>
                  <div className={styles['achievement-icon']}>🏆</div>
                  <div className={styles['achievement-content']}>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className={`section ${styles['about-wrapper']}`} id="experience">
        <div className={styles['about-title']}>
          <h1 className={styles['section-heading']}>Experience</h1>
          <div className={styles['exp-container']}>
            {experiences.map((exp, index) => (
              <div className={styles['exp-card']} key={index}>
                <div className={styles['exp-icon']}>💼</div>
                <div className={styles['exp-content']}>
                  <h2>{exp.company}</h2>
                  <p className={styles['exp-position']}>{exp.position}</p>
                  <p className={styles['exp-duration']}>{exp.duration}</p>
                  <p className={styles['exp-description']}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;