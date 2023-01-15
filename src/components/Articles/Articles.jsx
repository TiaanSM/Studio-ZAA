import styles from './Articles.module.css';
import articleImage from '../../assets/img/projectImage2.webp';
import articleImage2 from '../../assets/img/articleImage2.webp';
import articleImage3 from '../../assets/img/projectImage3.webp';

import Image from '../Image.jsx';

import { Link } from 'react-router-dom';

const Articles = () => {

  return (
  <div className={styles.articles}>

    <div className={styles.container}>
      <Link to="Article/Architecture-and-change" className={styles.linkStyles}>

      <Image 
        width='100%' 
        height="530px" 
        src={articleImage2} 
        imagealt="house-image" 
        
        displayTexts="inline-block" 
        title="Architecture and Change"
        link="View Article" 
        color="white"
      />

      </Link>
    </div>

    <div className={styles.container}>
      <div className={styles.articleContainer}>
        <Link to="Article/Modern-Design-And-Architecture" className={styles.linkStyles}>

        <Image width='100%' 
          height="222px" 
          src={articleImage} 
          imagealt="house-image" 

          displayTexts="inline-block" 
          title="Modern Design and Architecture"
          link="View Article"
          color="white"
        />

        </Link>
      </div>

      <div className={styles.articleContainer}>
        <Link to="Article/Eco-Friendly-Designing" className={styles.linkStyles}>

        <Image 
          width='100%' 
          height="222px" 
          src={articleImage3} 
          imagealt="house-image"
          displayTexts="inline-block" 
          title="Eco Friendly Designing"
          link="View Article"
          color="white"
        />
          
        </Link>
      </div>

    </div>
  </div>
  )
}

export default Articles