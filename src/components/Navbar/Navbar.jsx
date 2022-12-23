import styles from './Navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
    
    // hamburger icon
    // scroll progress indication
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
            <p className={styles.scrollProgress}>0%</p>
        </div>
    </nav>
  )
}

export default Navbar