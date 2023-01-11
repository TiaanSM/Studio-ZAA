import styles from './Articles.module.css';
import articleImage from '../../assets/img/projectImage2.webp';
import articleImage2 from '../../assets/img/articleImage2.webp';
import articleImage3 from '../../assets/img/projectImage3.webp';

import Image from '../Image.jsx';
import ImageHeading from '../ImageHeading.jsx';

import { Link } from 'react-router-dom';

const Articles = () => {

  // images fixed height causing problems, fix to a relative to screen width and height


  return (
    <div className={styles.articles}>

      <div className={styles.container}>
      <Link to="Article/ArticleOne" className={styles.linkStyles}>

        <Image width='100%' height="530px" src={articleImage2} imagealt="house-image" />
        <ImageHeading title="Multi Level Housing Benefits" link="Read Article" color="white" />

      </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.articleContainer}>
        <Link to="/article/Modern-Design-And-Architecture" className={styles.linkStyles}>

          <Image width='100%' height="222px" src={articleImage} imagealt="house-image" />
          <ImageHeading title="Modern Design And Architecture" link="Read Article" color="white" />

        </Link>
        </div>

        <div className={styles.articleContainer}>
        <Link to="/article/Popular-Houses-Under-Three-Million" className={styles.linkStyles}>

          <Image width='100%' height="222px" src={articleImage3} imagealt="house-image" />
          <ImageHeading title="Popular Houses Under Three Million" link="Read Article" color="white" />
          
        </Link>
        </div>

      </div>
    </div>
  )
}

export default Articles