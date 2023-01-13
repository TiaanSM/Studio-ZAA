import styles from './Header.module.css';
import headerImage from '../../assets/img/headerImg.webp';
import logo from '../../assets/img/Logo.png';

import Image from '../Image';

const Header = () => {

  // on website open = 3 box loading reveal, image zoom out, main text fade up.


  return (
   <header className={styles.header}>
      <a href="/"><img src={logo} alt="logo" className={styles.logo} /></a>
      <img className={styles.image} src={headerImage} alt="house-image"/>
      <h1 className={styles.title}>Building Beyond</h1>
      <p className={styles.desc}>We are a South African architecture and design studio with a global reputation for creating innovative spaces.</p>
   </header>
  )
}

export default Header