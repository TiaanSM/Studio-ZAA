import styles from './Articles.module.css';
import articleImage from '../../assets/img/projectImage2.webp';
import articleImage2 from '../../assets/img/articleImage2.webp';
import articleImage3 from '../../assets/img/projectImage3.webp';

import { useInView } from 'react-intersection-observer';
import Image from '../Image.jsx';

const Articles = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .80,
    triggerOnce: true
  });

  return (
    <div className={styles.articles}>

      <div className={styles.container}>
      
        <Image width='100%' height="520px" src={articleImage} imagealt="house-image" />

        <p className={styles.articleTitle}>Achitecture And Change</p>
        <a href="" className={styles.articleLink}>Read Article</a>
      </div>

      <div className={styles.container}>
        <div className={styles.articleContainer}>
        
          <Image width='490px' height="222px" src={articleImage2} imagealt="house-image" />

          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

        <div className={styles.articleContainer}>

        <Image width='490px' height="222px" src={articleImage3} imagealt="house-image" />

          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

      </div>
    </div>
  )
}

export default Articles