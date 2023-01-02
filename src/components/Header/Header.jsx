import styles from './Header.module.css';
import headerImage from '../../assets/img/headerImg.webp';

const Header = () => {

  // image
  // logo
  // top right desc
  // bottom title

  return (
   <header className={styles.header}>
    <a href="/" className={styles.logo}>LOGO</a>
      <img className={styles.image} src={headerImage} alt="" />
      <h1 className={styles.title}>Building Beyond</h1>
      <p className={styles.desc}>We are a South African architecture and design studio with a global reputation for creating innovative spaces.</p>
   </header>
  )
}

export default Header


/*
<img src={image} className={styles.image1} alt="" />
*/