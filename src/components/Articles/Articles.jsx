import styles from './Articles.module.css';
import articleImage from '../../assets/img/projectImage2.webp';
import articleImage2 from '../../assets/img/articleImage2.webp';
import articleImage3 from '../../assets/img/projectImage3.webp';

import { useInView } from 'react-intersection-observer';

const Articles = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .80,
    triggerOnce: true
  });

  return (
    <div className={styles.articles}>

      <div className={styles.container}>
      <div className={styles.imageContainer} ref={ref}>
        <img src={articleImage2} alt="" className={inView ? styles.image1 : styles.image1A} />
      </div>
        <p className={styles.articleTitle}>Achitecture And Change</p>
        <a href="" className={styles.articleLink}>Read Article</a>
      </div>

      <div className={styles.container}>
        <div className={styles.articleContainer}>
        <div className={styles.imageContainer2} >
          <img src={articleImage} alt="" className={inView ? styles.image2 : styles.image2A} />
        </div>
          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

        <div className={styles.articleContainer}>
        <div className={styles.imageContainer2} >
          <img src={articleImage3} alt="" className={inView ? styles.image2 : styles.image2A} />
        </div>
          <p className={styles.articleTitle}>Achitecture And Change</p>
          <a href="" className={styles.articleLink}>Read Article</a>
        </div>

      </div>
    </div>
  )
}

export default Articles