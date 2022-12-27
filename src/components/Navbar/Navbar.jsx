import styles from './Navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Navbar = (props) => {
    
    // hamburger icon
    // onClick navbar stays
    // onClick open nav fades in
    const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
            <p className={styles.established}>Est. 2022</p>
            <span className={styles.hamburgerIcon}>
              <Hamburger 
                toggled={openHamburger} 
                toggle={setOpenHamburger} 
                size={28} 
                distance="sm" 
                label="Show menu" 
                rounded
              />
            </span>
            <p className={styles.scrollProgress}>{`${props.scrollProgress}%`}</p>
        </div>
        
        <div className={openHamburger ? styles.openMenu : styles.closeMenu}>
          <div className={styles.contactLink}>
            <span className={styles.linkText}>
              <p>Contact</p>
            </span>
          </div>
          <div className={styles.journalLink}>
          <span className={styles.linkText}>
              <p>Journal</p>
            </span>
          </div>
          <div className={styles.projectsLink}>
          <span className={styles.linkText}>
              <p>Projects</p>
            </span>
          </div>
          <div className={styles.aboutLink}>
          <span className={styles.linkText}>
              <p>About</p>
            </span>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar