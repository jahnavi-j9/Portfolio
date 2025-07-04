import React from 'react';
import pfp from '../../assets/pfp.jpeg';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <>
            {/* Social Icons */}
            <div className={styles['social-container']}>
                <div className={styles['icon-wrapper']}>
                    <div>
                        <a href='https://github.com/jahnavi-j9' target='_blank' rel="noreferrer" className={styles.icon}><FaGithub /></a>
                   </div>
                    <div>
                        <a href='https://www.linkedin.com/in/jahnavi-grandhi-a74a042a1' target='_blank' rel="noreferrer" className={styles.icon}><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className={styles['hero-wrapper']}>
                <div className={`innerWidth paddings flexCenter ${styles['hero-container']}`} style={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                    {/* Left */}
                    <div className={`flexStart ${styles['hero-left']}`}>
                        <div className={styles['hero-title']}>
                            <div className={styles['orange-circle']} />
                            <motion.h2
                                initial={{ y: "2rem", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 2, type: 'spring' }}
                                className={styles['hi']}
                            >
                                Hi, I'm
                            </motion.h2>
                            <motion.h1
                                initial={{ y: "2rem", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 2, type: 'spring' }}
                            >
                                Jahnavi
                            </motion.h1>
                            <motion.h2
                                initial={{ y: "2rem", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 2, type: 'spring' }}
                                className={styles['fd']}
                            >
                                Full Stack Developer
                            </motion.h2>
                            <p>Architecting innovative solutions with Full Stack expertise.</p>
                            <motion.div className={`${styles['btn-container']} flexStart`}>
                                <button className="button" style={{ marginRight: '2rem' }}>
                                    <a href='https://drive.google.com/file/d/1ugAg0S7hj2mzvDviAvjFF3_ikH05NrqR/view?usp=drivesdk' target='_blank' rel="noreferrer">
                                        Download CV
                                    </a>
                                </button>   
                                <button className="button">
                                    <a href='#contact' rel="noreferrer">
                                        Let's Talk
                                    </a>
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className={`flexCenter ${styles['hero-right']}`}>
                        <motion.div
                            initial={{ x: "7rem", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, type: 'spring' }}
                            className={styles['image-container']}
                        >
                            <img src={pfp} alt="Jahnavi" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
