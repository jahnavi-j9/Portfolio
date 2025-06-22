import React, { useState } from 'react';
import styles from './Header.module.css'; // Import CSS module
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const getMenuStyles = (open) => {
    if (document.documentElement.clientWidth <= 768) {
      return {
        right: open ? 0 : '-100%' 
      }
    }
  }

  return (
    <section className={styles['h-wrapper']}>
      <div className={`${styles['h-container']} flexCenter innerWidth `} style={{ justifyContent: 'space-between', padding: '2rem' }}>
        <div className={styles['logo']}>Jahnavi Grandhi</div>
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
          <div className={`flexCenter ${styles['h-menu']}`} style={getMenuStyles(open)}>
            <a href='#about'>About</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>

          </div>
        </OutsideClickHandler>
        <div className={styles['menu-icon']} onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header;
