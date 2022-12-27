import styles from './Header.module.css';
import { Parallax } from 'react-scroll-parallax';

const Header = () => {

  // image
  // logo
  // top right desc
  // bottom title

  return (
    <header className={styles.header}>
      <Parallax speed={10}>
       
      <div>HEADER</div>
      <p>DESC</p>
      <h1>TITLE</h1>
      
        <img src="" alt="" />
    </Parallax>
    </header>
  )
}

export default Header