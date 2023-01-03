import styles from './Header.module.css';
import headerImage from '../../assets/img/headerImg.webp';
import { useInView } from 'react-intersection-observer';

const Header = () => {

  // image
  // logo
  // top right desc
  // bottom title
  const { ref, inView, entry } = useInView({
    threshold: 0.40,
    triggerOnce: true
  });

  return (
   <header className={styles.header}>
      <img className={styles.image} src={headerImage} alt="houseImage" ref={ref} />
      <h1 className={styles.title}>Building Beyond</h1>
      <p className={styles.desc}>We are a South African architecture and design studio with a global reputation for creating innovative spaces.</p>
   </header>
  )
}

export default Header


/*
<img src={image} className={styles.image1} alt="" />
*/