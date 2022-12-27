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
            Contact
          </div>
          <div className={styles.journalLink}>
            Journal
          </div>
          <div className={styles.projectsLink}>
            Projects
          </div>
          <div className={styles.aboutLink}>
            About
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar