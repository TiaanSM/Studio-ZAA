import styles from './Navbar.module.css';

import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Logo.png';

const Navbar = (props) => {
    
  // move linktext span styles to the link container.
  // black logo when applicable.
    
    const [openHamburger, setOpenHamburger] = useState(false);
    
    const isMobile = window.innerWidth < 768;
    const logoLinkStyles = {
      fontWeight: '500',
      fontSize: '12px',
      color : 'black'
    };

  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
            <a href="/" className={styles.established}>
              {isMobile 
              ? <img className={styles.logo} src={logo} alt="logo" /> 
              : <b style={logoLinkStyles}>Studio ZAA</b>}
            </a>

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
          <Link to="/Contact" className={styles.linkStyles}>
            <span className={styles.linkText}>
              <p>Contact</p>
            </span>
            </Link>
          </div>
          <div className={styles.journalLink}>
          <Link to="/Journal" className={styles.linkStyles}>
          <span className={styles.linkText}>
              <p>Journal</p>
            </span>
            </Link>
          </div>
          <div className={styles.projectsLink}>
            <Link to="/Projects" className={styles.linkStyles}>
          <span className={styles.linkText}>
              <p>Projects</p>
            </span>
            </Link>
          </div>
          <div className={styles.aboutLink}>
          <Link to="/About" className={styles.linkStyles}>
          <span className={styles.linkText}>
              <p>About</p>
            </span>
            </Link>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar