import React, { useRef, useState } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { FaUser, FaPen, FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_b4afr7i',
      'template_3wugpvc',
      form.current,
      'R1mczJ4Z6FvD15uz_'
    ).then(
      (result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className={styles['c-wrapper']} id='contact'>
      <div className={`${styles['c-container']} paddings`}>
        <h1 className={styles['section-heading']}>Contact Me</h1>
        <p className={styles['c-desc']}>
          You’re welcome to get in touch! I’ll respond as soon as possible.
        </p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className={styles['form']}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles['input-group']}>
            <FaUser className={styles['input-icon']} />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className={styles['input-group']}>
            <FaPen className={styles['input-icon']} />
            <input type="text" name="title" placeholder="Subject Title" required />
          </div>
          <div className={styles['input-group']}>
            <FaCommentDots className={styles['input-icon']} />
            <textarea name="message" rows="5" placeholder="Your Message" required />
          </div>
          <button className="button" type="submit">✉️ Send Message</button>
          {done && <span className={styles['thankyou']}>Thanks! I'll reply soon 😊</span>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
