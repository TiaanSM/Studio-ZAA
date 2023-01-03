import styles from './Navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Navbar = (props) => {
    
    // hamburger icon
    // onClick navbar stays
    // onClick open nav fades in
    const [openHamburger, setOpenHamburger] = useState(false);
    
    const isMobile = window.innerWidth < 768;

  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
            <p className={styles.established}>{isMobile ? 'logo' :'Est. 2022'}</p>

            <span className={styles.hamburgerIcon}>
            <Hamburger 
              size={isMobile ? 34 : 28}
              toggled={openHamburger} 
              toggle={setOpenHamburger}
              distance='md'
              label="Show menu"
              hideOutline={false}
              rounded
              color={isMobile ? 'white' : 'black'}
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